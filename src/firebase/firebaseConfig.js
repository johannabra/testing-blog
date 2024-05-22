import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7RlRs5Kyvj-yVuARJ2gVNxDWsFRKgwtA",
  authDomain: "logauth-31190.firebaseapp.com",
  projectId: "logauth-31190",
  storageBucket: "logauth-31190.appspot.com",
  messagingSenderId: "717042219937",
  appId: "1:717042219937:web:561e2110823ec057e8e9e0",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
