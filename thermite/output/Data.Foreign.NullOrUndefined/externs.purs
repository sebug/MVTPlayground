-- Generated by psc-make version 0.6.2
module Data.Foreign.NullOrUndefined where
import Data.Foreign ()
import Prelude ()
import Prim ()
import Prelude ()
import Data.Maybe ()
import Data.Either ()
import Data.Foreign ()
newtype NullOrUndefined (a :: *) = NullOrUndefined (Data.Maybe.Maybe a)
foreign import readNullOrUndefined :: forall a. (Data.Foreign.Foreign -> Data.Foreign.F a) -> Data.Foreign.Foreign -> Data.Foreign.F (Data.Foreign.NullOrUndefined.NullOrUndefined a)
foreign import runNullOrUndefined :: forall a. Data.Foreign.NullOrUndefined.NullOrUndefined a -> Data.Maybe.Maybe a
