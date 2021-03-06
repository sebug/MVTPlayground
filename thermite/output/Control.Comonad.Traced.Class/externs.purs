-- Generated by psc-make version 0.6.2
module Control.Comonad.Traced.Class where
import Control.Comonad ()
import Control.Comonad.Traced.Trans ()
import Control.Comonad.Traced.Class ()
import Prelude ()
import Prim ()
import Prelude ()
import Control.Comonad ()
import Control.Comonad.Traced.Trans ()
import Data.Monoid ()
import Data.Tuple ()
class (Control.Comonad.Comonad w) <= ComonadTraced t w where
  track :: forall a. t -> w a -> a
foreign import censor :: forall w a t b. (Prelude.Functor w) => (t -> t) -> Control.Comonad.Traced.Trans.TracedT t w a -> Control.Comonad.Traced.Trans.TracedT t w a
foreign import listens :: forall w a t b. (Prelude.Functor w) => (t -> b) -> Control.Comonad.Traced.Trans.TracedT t w a -> Control.Comonad.Traced.Trans.TracedT t w (Data.Tuple.Tuple a b)
foreign import listen :: forall w a t. (Prelude.Functor w) => Control.Comonad.Traced.Trans.TracedT t w a -> Control.Comonad.Traced.Trans.TracedT t w (Data.Tuple.Tuple a t)
foreign import tracks :: forall w a t. (Control.Comonad.Comonad w, Control.Comonad.Traced.Class.ComonadTraced t w) => (a -> t) -> w a -> a
foreign import instance comonadTracedTracedT :: (Control.Comonad.Comonad w, Data.Monoid.Monoid t) => Control.Comonad.Traced.Class.ComonadTraced t (Control.Comonad.Traced.Trans.TracedT t w)
