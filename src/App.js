import React from 'react';
import Homepage from './views/homepage/homepage.component.jsx'
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import ShopPage from './views/shop/shop.component.jsx';
import Header from './components/header/header.component'
import SignInandSignUpPage from './views/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser} from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import  CheckoutPage  from './views/checkout/checkout.component.jsx';




class App extends React.Component {
  

  unsubscribeFromAuth = null;
//Declaring the property to log out, then beinning the code to log in
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            }
          });
        })
        
      }
      setCurrentUser( userAuth );
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  //logging the user out
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path="/signin" 
            render={() =>
              this.props.currentUser ? (
              <Redirect to='/' />
              ) : (
                <SignInandSignUpPage/>
              )  
            }          
           />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  setCurrentUser: selectCurrentUser,
 
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
