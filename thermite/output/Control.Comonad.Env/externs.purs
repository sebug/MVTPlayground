-- Generated by psc-make version 0.6.2
module Control.Comonad.Env where
import Data.Identity ()
import Control.Comonad.Env.Trans ()
import Prelude ()
import Prim ()
import Prelude ()
import Control.Comonad.Env.Trans ()
import Data.Identity ()
import Data.Tuple ()
type Env (e :: *) = Control.Comonad.Env.Trans.EnvT e Data.Identity.Identity
foreign import env :: forall e a. e -> a -> Control.Comonad.Env.Env e a
foreign import mapEnv :: forall e a b. (a -> b) -> Control.Comonad.Env.Env e a -> Control.Comonad.Env.Env e b
foreign import withEnv :: forall e1 e2 a. (e1 -> e2) -> Control.Comonad.Env.Env e1 a -> Control.Comonad.Env.Env e2 a
foreign import runEnv :: forall e a. Control.Comonad.Env.Env e a -> Data.Tuple.Tuple e a
