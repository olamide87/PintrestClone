import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';

// const baseUrl = apiKeys.firebaseKeys.databaseUrl;

const boardBuilder = () => {
  let domString = '';
  domString += '<div class="row wrap col-12 boards-header"><h1>Boards:</h1>';
  domString += '<button class="btn btn-danger red-btn offset-1 align-self-center" id="add board"><i class "class= "fas fa-plus"></i></button></div>';
  const currentUserUid = firebase.auth().currentUser.uid;
  boardData.getUserBoards(currentUserUid)
    .then((boards) => {
      domString += '<div class="row wrap">';
      boards.forEach((b) => {
        domString += '<div class="col-4">';
        domString += `  <div class="card board-card" id="" label="${b.name}">`;
        domString += `    <h5 class="card-header">${b.name}</h5>`;
        domString += '    <div class="card-body">';
        domString += `    <img src="${b.imageUel}" class="card-img-bottom" alt="...">`;
        domString += `      <p class="card-text">${b.description}</>`;
        domString += '    </div>';
        domString += '   </div>';
        domString += '</div>';
      });
      domString += '</div>';
      domString += '<br>';
      utils.printToDom('boards', domString);
    })
    .catch((err) => console.error('problem with boardBuilder', err));
};

export default { boardBuilder };
