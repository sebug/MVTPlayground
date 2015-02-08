module Main where

import Debug.Trace
import Control.Monad.Eff
import Control.Monad.Cont.Trans

import API.User

import qualified Thermite as T
import qualified Thermite.Html as T
import qualified Thermite.Html.Elements as T
import qualified Thermite.Html.Attributes as A
import qualified Thermite.Action as T
import qualified Thermite.Events as T
import qualified Thermite.Types as T

import Data.Either

type State = { user:: User }

data Action = SetFirstName String | SetLastName String | SaveUser User | LoadUser

spec :: T.Spec (T.Action _ State) State Unit Action
spec = T.simpleSpec initialState performAction render
         # T.componentWillMount LoadUser

render :: T.Render State Unit Action
render ctx st _ = case st.user of
  User u -> T.div' [ T.div' [ T.text "First name"
                                  , T.input [ A.value u.firstName, T.onChange ctx handleChangeEvent ] [] ]
                   , T.div' [ T.text "Last name"
                            , T.input [ A.value u.name, T.onChange ctx handleLastNameChangeEvent ] [] ]
                         , T.button [ T.onClick ctx (const (SaveUser st.user)) ] [ T.text "Save User" ]
                         ]

loadSetState :: forall eff. (State -> Eff (aj :: Ajax | eff) Unit) -> Eff (aj :: Ajax | eff) Unit
loadSetState f =
  getCall "/User/LoadUser" \res -> case res of
    Left err -> f { user: User {firstName: "Error", name: "Error", address: "Error", age: 0}}
    Right content ->
      case (parseUser content) of
           Left _ -> f { user: User {firstName: "Parse Error", name: "Parse Error", address: "Parse Error", age: 0}}
           Right (User u) -> f { user: User u }

saveSetState :: forall eff. User -> (State -> Eff (aj :: Ajax | eff) Unit) -> Eff (aj :: Ajax | eff) Unit
saveSetState u f =
  postCall "/User/SaveUser" (stringifyUser u) \res -> case res of
    Left err -> f { user: User {firstName: "Error", name: "Error", address: "Error", age: 0}}
    Right content -> f { user: u }

performAction :: T.PerformAction Unit Action (T.Action _ State)
performAction _ LoadUser = T.asyncSetState loadSetState
performAction _ (SaveUser u) = T.asyncSetState (saveSetState u)
performAction _ (SetFirstName fn) = T.modifyState \st -> case st.user of
  User u -> { user: User { firstName: fn, name: u.name, address: u.address, age: u.age } }
performAction _ (SetLastName ln) = T.modifyState \st -> case st.user of
  User u -> { user: User { firstName: u.firstName, name: ln, address: u.address, age: u.age } }

foreign import getValue
  "function getValue(e) {\
  \  return e.target.value;\
  \}" :: forall event. event -> String

handleChangeEvent :: T.FormEvent -> Action
handleChangeEvent e = SetFirstName (getValue e)

handleLastNameChangeEvent :: T.FormEvent -> Action
handleLastNameChangeEvent e = SetLastName (getValue e)

initialState :: State
initialState = { user: User { firstName: "", name: "", address: "", age: 0 } }

main = do
  let cl = T.createClass spec
  T.render cl unit


