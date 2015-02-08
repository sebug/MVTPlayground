-- Generated by psc-make version 0.6.2
module Control.Monad.Reader.Class where
import Control.Monad.Reader.Class ()
import Prelude ()
import Control.Monad.Reader.Trans ()
import Control.Monad.Trans ()
import Control.Monad.Error.Trans ()
import Control.Monad.Maybe.Trans ()
import Control.Monad.Writer.Trans ()
import Control.Monad.State.Trans ()
import Control.Monad.RWS ()
import Prim ()
import Prelude ()
import Control.Monad.Trans ()
import Control.Monad.Reader.Trans ()
import Control.Monad.Error ()
import Control.Monad.Error.Trans ()
import Control.Monad.Maybe.Trans ()
import Control.Monad.RWS.Trans ()
import Control.Monad.State.Trans ()
import Control.Monad.Writer.Trans ()
import Data.Monoid ()
import Control.Monad.RWS ()
class MonadReader r m where
  ask :: m r
  local :: forall a. (r -> r) -> m a -> m a
foreign import reader :: forall r m a. (Prelude.Monad m, Control.Monad.Reader.Class.MonadReader r m) => (r -> a) -> m a
foreign import instance monadReaderFun :: Control.Monad.Reader.Class.MonadReader r (Prim.Function r)
foreign import instance monadReaderReaderT :: (Prelude.Monad m) => Control.Monad.Reader.Class.MonadReader r (Control.Monad.Reader.Trans.ReaderT r m)
foreign import instance monadReaderErrorT :: (Prelude.Monad m, Control.Monad.Error.Error e, Control.Monad.Reader.Class.MonadReader r m) => Control.Monad.Reader.Class.MonadReader r (Control.Monad.Error.Trans.ErrorT e m)
foreign import instance monadReaderMaybeT :: (Prelude.Monad m, Control.Monad.Reader.Class.MonadReader r m) => Control.Monad.Reader.Class.MonadReader r (Control.Monad.Maybe.Trans.MaybeT m)
foreign import instance monadReaderWriterT :: (Prelude.Monad m, Data.Monoid.Monoid w, Control.Monad.Reader.Class.MonadReader r m) => Control.Monad.Reader.Class.MonadReader r (Control.Monad.Writer.Trans.WriterT w m)
foreign import instance monadReaderStateT :: (Prelude.Monad m, Control.Monad.Reader.Class.MonadReader r m) => Control.Monad.Reader.Class.MonadReader r (Control.Monad.State.Trans.StateT s m)
foreign import instance monadReaderRWST :: (Prelude.Monad m, Data.Monoid.Monoid w) => Control.Monad.Reader.Class.MonadReader r (Control.Monad.RWS.Trans.RWST r w s m)
