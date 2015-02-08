-- Generated by psc-make version 0.6.2
module Control.Monad.Writer where
import Data.Identity ()
import Control.Monad.Writer.Trans ()
import Data.Tuple ()
import Control.Monad.Writer ()
import Prim ()
import Prelude ()
import Control.Monad.Writer.Trans ()
import Data.Identity ()
import Data.Monoid ()
import Data.Tuple ()
type Writer (w :: *) = Control.Monad.Writer.Trans.WriterT w Data.Identity.Identity
foreign import mapWriter :: forall w1 w2 a b. (Data.Tuple.Tuple a w1 -> Data.Tuple.Tuple b w2) -> Control.Monad.Writer.Writer w1 a -> Control.Monad.Writer.Writer w2 b
foreign import execWriter :: forall w a. Control.Monad.Writer.Writer w a -> w
foreign import runWriter :: forall w a. Control.Monad.Writer.Writer w a -> Data.Tuple.Tuple a w
