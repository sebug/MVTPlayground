-- Generated by psc-make version 0.6.2
module Control.Monad.Error.Trans where
import Control.Monad.Error.Trans ()
import Prelude ()
import Control.Apply ()
import Control.Monad.Error ()
import Prim ()
import Prelude ()
import Control.Apply ()
import Control.Alt ()
import Control.Alternative ()
import Control.Plus ()
import Control.Monad.Error ()
import Control.Monad.Trans ()
import Control.MonadPlus ()
import Data.Either ()
import Data.Monoid ()
import Data.Tuple ()
newtype ErrorT (e :: *) (m :: * -> *) (a :: *) = ErrorT (m (Data.Either.Either e a))
foreign import liftCallCCError :: forall e m a b. (((Data.Either.Either e a -> m (Data.Either.Either e b)) -> m (Data.Either.Either e a)) -> m (Data.Either.Either e a)) -> ((a -> Control.Monad.Error.Trans.ErrorT e m b) -> Control.Monad.Error.Trans.ErrorT e m a) -> Control.Monad.Error.Trans.ErrorT e m a
foreign import liftPassError :: forall e m a w. (Prelude.Monad m) => (m (Data.Tuple.Tuple (Data.Either.Either e a) (w -> w)) -> m (Data.Either.Either e a)) -> Control.Monad.Error.Trans.ErrorT e m (Data.Tuple.Tuple a (w -> w)) -> Control.Monad.Error.Trans.ErrorT e m a
foreign import liftListenError :: forall e m a w. (Prelude.Monad m) => (m (Data.Either.Either e a) -> m (Data.Tuple.Tuple (Data.Either.Either e a) w)) -> Control.Monad.Error.Trans.ErrorT e m a -> Control.Monad.Error.Trans.ErrorT e m (Data.Tuple.Tuple a w)
foreign import mapErrorT :: forall e1 e2 m1 m2 a b. (m1 (Data.Either.Either e1 a) -> m2 (Data.Either.Either e2 b)) -> Control.Monad.Error.Trans.ErrorT e1 m1 a -> Control.Monad.Error.Trans.ErrorT e2 m2 b
foreign import runErrorT :: forall e m a. Control.Monad.Error.Trans.ErrorT e m a -> m (Data.Either.Either e a)
foreign import instance functorErrorT :: (Prelude.Functor m) => Prelude.Functor (Control.Monad.Error.Trans.ErrorT e m)
foreign import instance applyErrorT :: (Prelude.Apply m) => Prelude.Apply (Control.Monad.Error.Trans.ErrorT e m)
foreign import instance applicativeErrorT :: (Prelude.Applicative m) => Prelude.Applicative (Control.Monad.Error.Trans.ErrorT e m)
foreign import instance altErrorT :: (Prelude.Monad m, Control.Monad.Error.Error e) => Control.Alt.Alt (Control.Monad.Error.Trans.ErrorT e m)
foreign import instance plusErrorT :: (Prelude.Monad m, Control.Monad.Error.Error e) => Control.Plus.Plus (Control.Monad.Error.Trans.ErrorT e m)
foreign import instance alternativeErrorT :: (Prelude.Monad m, Control.Monad.Error.Error e) => Control.Alternative.Alternative (Control.Monad.Error.Trans.ErrorT e m)
foreign import instance bindErrorT :: (Prelude.Monad m, Control.Monad.Error.Error e) => Prelude.Bind (Control.Monad.Error.Trans.ErrorT e m)
foreign import instance monadErrorT :: (Prelude.Monad m, Control.Monad.Error.Error e) => Prelude.Monad (Control.Monad.Error.Trans.ErrorT e m)
foreign import instance monadPlusErrorT :: (Prelude.Monad m, Control.Monad.Error.Error e) => Control.MonadPlus.MonadPlus (Control.Monad.Error.Trans.ErrorT e m)
foreign import instance monadTransErrorT :: (Control.Monad.Error.Error e) => Control.Monad.Trans.MonadTrans (Control.Monad.Error.Trans.ErrorT e)
