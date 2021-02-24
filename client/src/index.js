import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

const { REACT_APP_apiKey,REACT_APP_authDomain, REACT_APP_projectId, REACT_APP_storageBucket, REACT_APP_messagingSenderId, REACT_APP_appId, REACT_APP_databaseURL } = process.env

const firebaseConfig = {
    apiKey: REACT_APP_apiKey,
    authDomain: REACT_APP_authDomain,
    databaseURL: REACT_APP_databaseURL,
    projectId: REACT_APP_projectId,
    storageBucket: REACT_APP_storageBucket,
    messagingSenderId: REACT_APP_messagingSenderId,
    appId: REACT_APP_appId,
};





const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}> */}
                <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
                    <App />
                </FirebaseAuthProvider>
            {/* </FirebaseDatabaseProvider> */}
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
