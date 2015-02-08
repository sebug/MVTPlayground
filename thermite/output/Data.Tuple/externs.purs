-- Generated by psc-make version 0.6.2
module Data.Tuple where
import Prelude ()
import Data.Monoid ()
import Data.Tuple ()
import Control.Lazy ()
import Data.Array ()
import Prim ()
import Prelude ()
import Control.Comonad ()
import Control.Extend ()
import Control.Lazy ()
import Data.Array ()
import Data.Monoid ()
data Tuple (a :: *) (b :: *) = Tuple a b
foreign import swap :: forall a b. Data.Tuple.Tuple a b -> Data.Tuple.Tuple b a
foreign import unzip :: forall a b. [Data.Tuple.Tuple a b] -> Data.Tuple.Tuple [a] [b]
foreign import zip :: forall a b. [a] -> [b] -> [Data.Tuple.Tuple a b]
foreign import uncurry :: forall a b c. (a -> b -> c) -> Data.Tuple.Tuple a b -> c
foreign import curry :: forall a b c. (Data.Tuple.Tuple a b -> c) -> a -> b -> c
foreign import snd :: forall a b. Data.Tuple.Tuple a b -> b
foreign import fst :: forall a b. Data.Tuple.Tuple a b -> a
foreign import instance showTuple :: (Prelude.Show a, Prelude.Show b) => Prelude.Show (Data.Tuple.Tuple a b)
foreign import instance eqTuple :: (Prelude.Eq a, Prelude.Eq b) => Prelude.Eq (Data.Tuple.Tuple a b)
foreign import instance ordTuple :: (Prelude.Ord a, Prelude.Ord b) => Prelude.Ord (Data.Tuple.Tuple a b)
foreign import instance semigroupoidTuple :: Prelude.Semigroupoid Data.Tuple.Tuple
foreign import instance semigroupTuple :: (Prelude.Semigroup a, Prelude.Semigroup b) => Prelude.Semigroup (Data.Tuple.Tuple a b)
foreign import instance monoidTuple :: (Data.Monoid.Monoid a, Data.Monoid.Monoid b) => Data.Monoid.Monoid (Data.Tuple.Tuple a b)
foreign import instance functorTuple :: Prelude.Functor (Data.Tuple.Tuple a)
foreign import instance applyTuple :: (Prelude.Semigroup a) => Prelude.Apply (Data.Tuple.Tuple a)
foreign import instance applicativeTuple :: (Data.Monoid.Monoid a) => Prelude.Applicative (Data.Tuple.Tuple a)
foreign import instance bindTuple :: (Prelude.Semigroup a) => Prelude.Bind (Data.Tuple.Tuple a)
foreign import instance monadTuple :: (Data.Monoid.Monoid a) => Prelude.Monad (Data.Tuple.Tuple a)
foreign import instance extendTuple :: Control.Extend.Extend (Data.Tuple.Tuple a)
foreign import instance comonadTuple :: Control.Comonad.Comonad (Data.Tuple.Tuple a)
foreign import instance lazyTuple :: (Control.Lazy.Lazy a, Control.Lazy.Lazy b) => Control.Lazy.Lazy (Data.Tuple.Tuple a b)
foreign import instance lazyLazy1Tuple :: (Control.Lazy.Lazy1 l1, Control.Lazy.Lazy1 l2) => Control.Lazy.Lazy (Data.Tuple.Tuple (l1 a) (l2 b))
foreign import instance lazyLazy2Tuple :: (Control.Lazy.Lazy2 l1, Control.Lazy.Lazy2 l2) => Control.Lazy.Lazy (Data.Tuple.Tuple (l1 a b) (l2 c d))
