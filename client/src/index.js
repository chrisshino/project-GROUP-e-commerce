import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCxvjHoiMEFLL0yJ_o6XQSG5kdzNVn8W6w",
    authDomain: "wearlab-1fa50.firebaseapp.com",
    databaseURL: "https://wearlab-1fa50-default-rtdb.firebaseio.com/",
    projectId: "wearlab-1fa50",
    storageBucket: "wearlab-1fa50.appspot.com",
    messagingSenderId: "1061793664801",
    appId: "1:1061793664801:web:4c02efd00082eec7e3f860",
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
