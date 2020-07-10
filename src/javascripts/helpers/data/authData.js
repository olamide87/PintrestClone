import firebase from 'firebase/app';
import 'firebase/auth';
import boardsComp from '../../components/boards/boards';

const boardsDiv = $('#boards');

const checkLoginStatus = (showLoggedInView, showLoggedOutView) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      showLoggedInView();
      boardsDiv.removeClass('hide');
      boardsComp.boardBuilder();
    } else {
      showLoggedOutView();
      boardsDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
