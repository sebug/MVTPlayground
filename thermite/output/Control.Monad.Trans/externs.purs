-- Generated by psc-make version 0.6.2
module Control.Monad.Trans where
import Prim ()
import Prelude ()
class MonadTrans t where
  lift :: forall m a. (Prelude.Monad m) => m a -> t m a
