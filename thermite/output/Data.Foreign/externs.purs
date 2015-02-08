-- Generated by psc-make version 0.6.2
module Data.Foreign where
import Prelude ()
import Data.Function ()
import Data.Foreign ()
import Prim ()
import Prelude ()
import Data.Array ()
import Data.Either ()
import Data.Function ()
type F = Data.Either.Either Data.Foreign.ForeignError
data ForeignError = TypeMismatch Prim.String Prim.String | ErrorAtIndex Prim.Number Data.Foreign.ForeignError | ErrorAtProperty Prim.String Data.Foreign.ForeignError | JSONError Prim.String
foreign import data Foreign :: *
foreign import readArray :: Data.Foreign.Foreign -> Data.Foreign.F [Data.Foreign.Foreign]
foreign import readNumber :: Data.Foreign.Foreign -> Data.Foreign.F Prim.Number
foreign import readBoolean :: Data.Foreign.Foreign -> Data.Foreign.F Prim.Boolean
foreign import readString :: Data.Foreign.Foreign -> Data.Foreign.F Prim.String
foreign import isArray :: Data.Foreign.Foreign -> Prim.Boolean
foreign import isUndefined :: Data.Foreign.Foreign -> Prim.Boolean
foreign import isNull :: Data.Foreign.Foreign -> Prim.Boolean
foreign import tagOf :: Data.Foreign.Foreign -> Prim.String
foreign import typeOf :: Data.Foreign.Foreign -> Prim.String
foreign import unsafeFromForeign :: forall a. Data.Foreign.Foreign -> a
foreign import toForeign :: forall a. a -> Data.Foreign.Foreign
foreign import parseJSON :: Prim.String -> Data.Foreign.F Data.Foreign.Foreign
foreign import instance showForeignError :: Prelude.Show Data.Foreign.ForeignError
foreign import instance eqForeignError :: Prelude.Eq Data.Foreign.ForeignError
