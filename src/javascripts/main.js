import '../styles/main.scss';

import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys.json';

import authData from './helpers/data/authData';
import myNavbar from './components/myNavbar/myNavbar';
import auth from './components/auth/auth';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');
const loginButton = $('#google-auth');

const showLoggedInView = () => {
  authDiv.addClass('hide');
  logoutButton.removeClass('hide');
  loginButton.addClass('hide');
};

const showLoggedOutView = () => {
  authDiv.removeClass('hide');
  logoutButton.addClass('hide');
  loginButton.removeClass('hide');
};

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus(showLoggedInView, showLoggedOutView);
  auth.loginButton();
  myNavbar.logoutEvent();
};

init();
