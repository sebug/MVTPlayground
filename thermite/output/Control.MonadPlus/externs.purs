-- Generated by psc-make version 0.6.2
module Control.MonadPlus where
import Prelude ()
import Control.Plus ()
import Prim ()
import Prelude ()
import Control.Alternative ()
import Control.Plus ()
class (Prelude.Monad m, Control.Alternative.Alternative m) <= MonadPlus m where
foreign import guard :: forall m. (Control.MonadPlus.MonadPlus m) => Prim.Boolean -> m Prelude.Unit
