// React <--> Firebase connection for state
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCAxlyQMcAhNdMX2YsX1N8DzIxtZ45tL-s",
  authDomain: "dci-todolist.firebaseapp.com",
  databaseURL: "https://dci-todolist.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { baseApp };

// this is default export
export default base;
