-- Generated by psc-make version 0.6.2
module Data.Monoid.Sum where
import Prelude ()
import Prim ()
import Prelude ()
import Data.Monoid ()
newtype Sum = Sum Prim.Number
foreign import runSum :: Data.Monoid.Sum.Sum -> Prim.Number
foreign import instance eqSum :: Prelude.Eq Data.Monoid.Sum.Sum
foreign import instance ordSum :: Prelude.Ord Data.Monoid.Sum.Sum
foreign import instance showSum :: Prelude.Show Data.Monoid.Sum.Sum
foreign import instance semigroupSum :: Prelude.Semigroup Data.Monoid.Sum.Sum
foreign import instance monoidSum :: Data.Monoid.Monoid Data.Monoid.Sum.Sum