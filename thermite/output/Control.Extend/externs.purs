-- Generated by psc-make version 0.6.2
module Control.Extend where
import Prelude ()
import Prim ()
import Prelude ()
infixl 1 =>>
infixr 1 <<=
infixr 1 =>=
infixr 1 =<=
class (Prelude.Functor w) <= Extend w where
  (<<=) :: forall b a. (w a -> b) -> w a -> w b
foreign import duplicate :: forall a w. (Control.Extend.Extend w) => w a -> w (w a)
foreign import (=<=) :: forall b a w c. (Control.Extend.Extend w) => (w b -> c) -> (w a -> b) -> w a -> c
foreign import (=>=) :: forall b a w c. (Control.Extend.Extend w) => (w a -> b) -> (w b -> c) -> w a -> c
foreign import (=>>) :: forall b a w. (Control.Extend.Extend w) => w a -> (w a -> b) -> w b
foreign import instance extendArr :: (Prelude.Semigroup w) => Control.Extend.Extend (Prim.Function w)
