-- Generated by psc-make version 0.6.2
module Control.Monad where
import Prelude ()
import Control.Monad ()
import Prim ()
import Prelude ()
foreign import unless :: forall m. (Prelude.Monad m) => Prim.Boolean -> m Prelude.Unit -> m Prelude.Unit
foreign import when :: forall m. (Prelude.Monad m) => Prim.Boolean -> m Prelude.Unit -> m Prelude.Unit
foreign import foldM :: forall m a b. (Prelude.Monad m) => (a -> b -> m a) -> a -> [b] -> m a
foreign import replicateM :: forall m a. (Prelude.Monad m) => Prim.Number -> m a -> m [a]
