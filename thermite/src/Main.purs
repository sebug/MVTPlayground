module Main where

import Debug.Trace

import API.User

import qualified Thermite as T
import qualified Thermite.Html as T
import qualified Thermite.Html.Elements as T
import qualified Thermite.Html.Attributes as A
import qualified Thermite.Action as T
import qualified Thermite.Events as T
import qualified Thermite.Types as T

type State = { firstName :: String }

data Action = SetFirstName String | SaveUser | LoadUser

spec :: T.Spec (T.Action _ State) State Unit Action
spec = T.simpleSpec initialState performAction render
         # T.componentWillMount LoadUser

render :: T.Render State Unit Action
render ctx st _ = T.div' [ T.div' [ T.text "First name"
                                  , T.input [ A.value st.firstName, T.onChange ctx handleChangeEvent ] [] ]
                         , T.button [ T.onClick ctx (const SaveUser) ] [ T.text "Save User" ]
                         ]

performAction :: T.PerformAction Unit Action (T.Action _ State)
performAction _ LoadUser = T.modifyState \st -> { firstName: st.firstName }
performAction _ SaveUser = T.modifyState \st -> { firstName: st.firstName }
performAction _ (SetFirstName fn) = T.modifyState \st -> { firstName: fn }

foreign import getValue
  "function getValue(e) {\
  \  return e.target.value;\
  \}" :: forall event. event -> String

handleChangeEvent :: T.FormEvent -> Action
handleChangeEvent e = SetFirstName (getValue e)

initialState :: State
initialState = { firstName: "Blubb" }

main = do
  let cl = T.createClass spec
  T.render cl unit
  trace (getCall unit)
