-- Generated by psc-make version 0.6.2
module Control.Monad.Maybe.Trans where
import Prelude ()
import Control.Monad.Maybe.Trans ()
import Prim ()
import Prelude ()
import Control.Monad ()
import Control.Monad.Trans ()
import Data.Either ()
import Data.Maybe ()
import Data.Tuple ()
newtype MaybeT (m :: * -> *) (a :: *) = MaybeT (m (Data.Maybe.Maybe a))
foreign import liftCallCCMaybe :: forall m a b. (((Data.Maybe.Maybe a -> m (Data.Maybe.Maybe b)) -> m (Data.Maybe.Maybe a)) -> m (Data.Maybe.Maybe a)) -> ((a -> Control.Monad.Maybe.Trans.MaybeT m b) -> Control.Monad.Maybe.Trans.MaybeT m a) -> Control.Monad.Maybe.Trans.MaybeT m a
foreign import liftPassMaybe :: forall m a w. (Prelude.Monad m) => (m (Data.Tuple.Tuple (Data.Maybe.Maybe a) (w -> w)) -> m (Data.Maybe.Maybe a)) -> Control.Monad.Maybe.Trans.MaybeT m (Data.Tuple.Tuple a (w -> w)) -> Control.Monad.Maybe.Trans.MaybeT m a
foreign import liftListenMaybe :: forall m a w. (Prelude.Monad m) => (m (Data.Maybe.Maybe a) -> m (Data.Tuple.Tuple (Data.Maybe.Maybe a) w)) -> Control.Monad.Maybe.Trans.MaybeT m a -> Control.Monad.Maybe.Trans.MaybeT m (Data.Tuple.Tuple a w)
foreign import liftCatchMaybe :: forall m e a. (m (Data.Maybe.Maybe a) -> (e -> m (Data.Maybe.Maybe a)) -> m (Data.Maybe.Maybe a)) -> Control.Monad.Maybe.Trans.MaybeT m a -> (e -> Control.Monad.Maybe.Trans.MaybeT m a) -> Control.Monad.Maybe.Trans.MaybeT m a
foreign import mapMaybeT :: forall m1 m2 a b. (m1 (Data.Maybe.Maybe a) -> m2 (Data.Maybe.Maybe b)) -> Control.Monad.Maybe.Trans.MaybeT m1 a -> Control.Monad.Maybe.Trans.MaybeT m2 b
foreign import runMaybeT :: forall m a. Control.Monad.Maybe.Trans.MaybeT m a -> m (Data.Maybe.Maybe a)
foreign import instance functorMaybeT :: (Prelude.Monad m) => Prelude.Functor (Control.Monad.Maybe.Trans.MaybeT m)
foreign import instance applyMaybeT :: (Prelude.Monad m) => Prelude.Apply (Control.Monad.Maybe.Trans.MaybeT m)
foreign import instance applicativeMaybeT :: (Prelude.Monad m) => Prelude.Applicative (Control.Monad.Maybe.Trans.MaybeT m)
foreign import instance bindMaybeT :: (Prelude.Monad m) => Prelude.Bind (Control.Monad.Maybe.Trans.MaybeT m)
foreign import instance monadMaybeT :: (Prelude.Monad m) => Prelude.Monad (Control.Monad.Maybe.Trans.MaybeT m)
foreign import instance monadTransMaybeT :: Control.Monad.Trans.MonadTrans Control.Monad.Maybe.Trans.MaybeT