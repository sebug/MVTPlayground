-- Generated by psc-make version 0.6.2
module Data.Traversable where
import Prelude ()
import Data.Traversable ()
import Data.Array ()
import Data.Tuple ()
import Prim ()
import Prelude ()
import Data.Array ()
import Data.Either ()
import Data.Foldable ()
import Data.Maybe ()
import Data.Tuple ()
class (Prelude.Functor t, Data.Foldable.Foldable t) <= Traversable t where
  traverse :: forall a b m. (Prelude.Applicative m) => (a -> m b) -> t a -> m (t b)
  sequence :: forall a m. (Prelude.Applicative m) => t (m a) -> m (t a)
foreign import mapAccumR :: forall a b s f. (Data.Traversable.Traversable f) => (s -> a -> Data.Tuple.Tuple s b) -> s -> f a -> Data.Tuple.Tuple s (f b)
foreign import mapAccumL :: forall a b s f. (Data.Traversable.Traversable f) => (s -> a -> Data.Tuple.Tuple s b) -> s -> f a -> Data.Tuple.Tuple s (f b)
foreign import scanr :: forall a b f. (Data.Traversable.Traversable f) => (a -> b -> b) -> b -> f a -> f b
foreign import scanl :: forall a b f. (Data.Traversable.Traversable f) => (b -> a -> b) -> b -> f a -> f b
foreign import zipWithA :: forall m a b c. (Prelude.Applicative m) => (a -> b -> m c) -> [a] -> [b] -> m [c]
foreign import for :: forall a b m t. (Prelude.Applicative m, Data.Traversable.Traversable t) => t a -> (a -> m b) -> m (t b)
foreign import instance traversableArray :: Data.Traversable.Traversable Prim.Array
foreign import instance traversableEither :: Data.Traversable.Traversable (Data.Either.Either a)
foreign import instance traversableMaybe :: Data.Traversable.Traversable Data.Maybe.Maybe
foreign import instance traversableTuple :: Data.Traversable.Traversable (Data.Tuple.Tuple a)