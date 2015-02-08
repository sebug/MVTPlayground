-- Generated by psc-make version 0.6.2
module Thermite.Internal where
import Prim ()
import Prelude ()
import DOM ()
import Data.Maybe ()
import Control.Monad.Eff ()
import Thermite.Types ()
foreign import renderImpl :: forall props eff. Thermite.Types.ComponentClass props eff -> props -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prelude.Unit
foreign import createClassImpl :: forall eff m state props action. (Thermite.Types.Context state props action -> m Prelude.Unit -> Control.Monad.Eff.Eff eff Prelude.Unit) -> (forall a r. r -> (a -> r) -> Data.Maybe.Maybe a -> r) -> Thermite.Types.Spec m state props action -> Thermite.Types.ComponentClass props eff
foreign import event :: forall state props action event. Prim.String -> Thermite.Types.Context state props action -> (event -> action) -> Thermite.Types.Prop action
foreign import unsafeAttribute :: forall action attr. Prim.String -> attr -> Thermite.Types.Prop action
foreign import createElementImpl :: forall action. Prim.String -> Thermite.Types.Props action -> [Thermite.Types.Html action] -> Thermite.Types.Html action
foreign import textImpl :: forall action. Prim.String -> Thermite.Types.Html action
foreign import setStateImpl :: forall eff state props action. Thermite.Types.Context state props action -> state -> Control.Monad.Eff.Eff eff Prelude.Unit
foreign import getStateImpl :: forall eff state props action. Thermite.Types.Context state props action -> Control.Monad.Eff.Eff eff state