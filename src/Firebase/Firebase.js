import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
    
    {
        apiKey: "AIzaSyBwe0-IJwoff9ZEjIINSD01a_I8Zlvb7RQ",
        authDomain: "reactcodergarcia.firebaseapp.com",
        projectId: "reactcodergarcia",
        storageBucket: "reactcodergarcia.appspot.com",
        messagingSenderId: "682900231398",
        appId: "1:682900231398:web:46e7a360e35e215d1f1727"
      }
);

export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}