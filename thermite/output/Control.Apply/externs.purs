-- Generated by psc-make version 0.6.2
module Control.Apply where
import Prelude ()
import Control.Apply ()
import Prim ()
import Prelude ()
infixl 4 <*
infixl 4 *>
foreign import forever :: forall a b f. (Prelude.Apply f) => f a -> f b
foreign import lift5 :: forall a b c d e f g. (Prelude.Apply f) => (a -> b -> c -> d -> e -> g) -> f a -> f b -> f c -> f d -> f e -> f g
foreign import lift4 :: forall a b c d e f. (Prelude.Apply f) => (a -> b -> c -> d -> e) -> f a -> f b -> f c -> f d -> f e
foreign import lift3 :: forall a b c d f. (Prelude.Apply f) => (a -> b -> c -> d) -> f a -> f b -> f c -> f d
foreign import lift2 :: forall a b c f. (Prelude.Apply f) => (a -> b -> c) -> f a -> f b -> f c
foreign import (*>) :: forall a b f. (Prelude.Apply f) => f a -> f b -> f b
foreign import (<*) :: forall a b f. (Prelude.Apply f) => f a -> f b -> f a
