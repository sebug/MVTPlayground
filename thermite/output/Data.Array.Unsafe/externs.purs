-- Generated by psc-make version 0.6.2
module Data.Array.Unsafe where
import Prelude.Unsafe ()
import Data.Array ()
import Data.Maybe.Unsafe ()
import Prim ()
import Prelude ()
import Prelude.Unsafe ()
import Data.Maybe.Unsafe ()
import Data.Array ()
foreign import init :: forall a. [a] -> [a]
foreign import last :: forall a. [a] -> a
foreign import tail :: forall a. [a] -> [a]
foreign import head :: forall a. [a] -> a