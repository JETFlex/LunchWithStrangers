import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/session/LoginFormContainer';
import SignUpForm from './components/session/SignUpFormContainer';
import CategoriesIndex from './components/categories/categories_container';
import Splash from './components/splash/splash';

const Routes = () => (
  <Router sceneStyle={{ backgroundColor: 'white' }}>
    <Scene
      key='splash'
      component={ Splash }
      title="Welcome"
      hideNavBar={true}
      initial
    />

    <Scene
      key='loginForm'
      component={ LoginForm }
      title='Login'
      hideNavBar={false}
    />

    <Scene
      key='signupForm'
      component={ SignUpForm }
      title='Sign Up'
      hideNavBar={false}
    />

    <Scene
      key='categoriesIndex'
      component={ CategoriesIndex }
      title='Categories Index'
      hideNavBar={true}
    />
  </Router>
);

export default Routes;