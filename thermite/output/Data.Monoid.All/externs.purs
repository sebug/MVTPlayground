-- Generated by psc-make version 0.6.2
module Data.Monoid.All where
import Prelude ()
import Prim ()
import Prelude ()
import Data.Monoid ()
newtype All = All Prim.Boolean
foreign import runAll :: Data.Monoid.All.All -> Prim.Boolean
foreign import instance eqAll :: Prelude.Eq Data.Monoid.All.All
foreign import instance showAll :: Prelude.Show Data.Monoid.All.All
foreign import instance semigroupAll :: Prelude.Semigroup Data.Monoid.All.All
foreign import instance monoidAll :: Data.Monoid.Monoid Data.Monoid.All.All
