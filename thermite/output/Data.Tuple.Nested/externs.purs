-- Generated by psc-make version 0.6.2
module Data.Tuple.Nested where
import Prim ()
import Prelude ()
import Data.Tuple ()
infixr 6 /\
foreign import (/\) :: forall a b. a -> b -> Data.Tuple.Tuple a b
foreign import con10 :: forall a b c d e f g h i j z. (a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> z) -> Data.Tuple.Tuple a (Data.Tuple.Tuple b (Data.Tuple.Tuple c (Data.Tuple.Tuple d (Data.Tuple.Tuple e (Data.Tuple.Tuple f (Data.Tuple.Tuple g (Data.Tuple.Tuple h (Data.Tuple.Tuple i j)))))))) -> z
foreign import con9 :: forall a b c d e f g h i z. (a -> b -> c -> d -> e -> f -> g -> h -> i -> z) -> Data.Tuple.Tuple a (Data.Tuple.Tuple b (Data.Tuple.Tuple c (Data.Tuple.Tuple d (Data.Tuple.Tuple e (Data.Tuple.Tuple f (Data.Tuple.Tuple g (Data.Tuple.Tuple h i))))))) -> z
foreign import con8 :: forall a b c d e f g h z. (a -> b -> c -> d -> e -> f -> g -> h -> z) -> Data.Tuple.Tuple a (Data.Tuple.Tuple b (Data.Tuple.Tuple c (Data.Tuple.Tuple d (Data.Tuple.Tuple e (Data.Tuple.Tuple f (Data.Tuple.Tuple g h)))))) -> z
foreign import con7 :: forall a b c d e f g z. (a -> b -> c -> d -> e -> f -> g -> z) -> Data.Tuple.Tuple a (Data.Tuple.Tuple b (Data.Tuple.Tuple c (Data.Tuple.Tuple d (Data.Tuple.Tuple e (Data.Tuple.Tuple f g))))) -> z
foreign import con6 :: forall a b c d e f z. (a -> b -> c -> d -> e -> f -> z) -> Data.Tuple.Tuple a (Data.Tuple.Tuple b (Data.Tuple.Tuple c (Data.Tuple.Tuple d (Data.Tuple.Tuple e f)))) -> z
foreign import con5 :: forall a b c d e z. (a -> b -> c -> d -> e -> z) -> Data.Tuple.Tuple a (Data.Tuple.Tuple b (Data.Tuple.Tuple c (Data.Tuple.Tuple d e))) -> z
foreign import con4 :: forall a b c d z. (a -> b -> c -> d -> z) -> Data.Tuple.Tuple a (Data.Tuple.Tuple b (Data.Tuple.Tuple c d)) -> z
foreign import con3 :: forall a b c z. (a -> b -> c -> z) -> Data.Tuple.Tuple a (Data.Tuple.Tuple b c) -> z
foreign import con2 :: forall a b z. (a -> b -> z) -> Data.Tuple.Tuple a b -> z
