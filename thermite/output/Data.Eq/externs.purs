-- Generated by psc-make version 0.6.2
module Data.Eq where
import Data.Eq ()
import Prelude ()
import Prim ()
import Prelude ()
newtype Ref (a :: *) = Ref a
foreign import liftRef :: forall a b. (a -> a -> b) -> Data.Eq.Ref a -> Data.Eq.Ref a -> b
foreign import instance eqRef :: Prelude.Eq (Data.Eq.Ref a)
foreign import instance functorRef :: Prelude.Functor Data.Eq.Ref