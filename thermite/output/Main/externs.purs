-- Generated by psc-make version 0.6.2
module Main where
import Thermite ()
import Main ()
import Thermite.Html.Elements ()
import Thermite.Html ()
import Prelude ()
import Thermite.Events ()
import Thermite.Action ()
import Debug.Trace ()
import Prim ()
import Prelude ()
import Debug.Trace ()
import Thermite ()
import Thermite.Html ()
import Thermite.Html.Elements ()
import Thermite.Html.Attributes ()
import Thermite.Action ()
import Thermite.Events ()
import Thermite.Types ()
data Action = Increment  | Decrement 
type State = { counter :: Prim.Number }
foreign import main :: forall t67. Control.Monad.Eff.Eff (trace :: Debug.Trace.Trace, dom :: DOM.DOM | t67) Prelude.Unit
foreign import initialState :: Main.State
foreign import performAction :: forall t26. Thermite.Types.PerformAction Prelude.Unit Main.Action (Thermite.Action.Action t26 Main.State)
foreign import render :: Thermite.Types.Render Main.State Prelude.Unit Main.Action
foreign import spec :: forall t37. Thermite.Types.Spec (Thermite.Action.Action t37 Main.State) Main.State Prelude.Unit Main.Action