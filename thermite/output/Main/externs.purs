-- Generated by psc-make version 0.6.2
module Main where
import Thermite ()
import Main ()
import Thermite.Html.Elements ()
import Thermite.Html ()
import Thermite.Html.Attributes ()
import Thermite.Events ()
import Prelude ()
import Thermite.Action ()
import Debug.Trace ()
import API.User ()
import Prim ()
import Prelude ()
import Debug.Trace ()
import API.User ()
import Thermite ()
import Thermite.Html ()
import Thermite.Html.Elements ()
import Thermite.Html.Attributes ()
import Thermite.Action ()
import Thermite.Events ()
import Thermite.Types ()
data Action = SetFirstName Prim.String | SaveUser  | LoadUser 
type State = { firstName :: Prim.String }
foreign import main :: forall t101. Control.Monad.Eff.Eff (trace :: Debug.Trace.Trace, dom :: DOM.DOM | t101) Prelude.Unit
foreign import initialState :: Main.State
foreign import handleChangeEvent :: Thermite.Events.FormEvent -> Main.Action
foreign import getValue :: forall event. event -> Prim.String
foreign import performAction :: forall t7. Thermite.Types.PerformAction Prelude.Unit Main.Action (Thermite.Action.Action t7 Main.State)
foreign import render :: Thermite.Types.Render Main.State Prelude.Unit Main.Action
foreign import spec :: forall t57. Thermite.Types.Spec (Thermite.Action.Action t57 Main.State) Main.State Prelude.Unit Main.Action
