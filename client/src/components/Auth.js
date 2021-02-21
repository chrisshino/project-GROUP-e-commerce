import React from "react";
import {
    IfFirebaseAuthed,
    IfFirebaseUnAuthed,
    FirebaseAuthConsumer,
} from "@react-firebase/auth";
import firebase from "firebase/app";
import { themeVars } from "./GlobalStyles";
import { FiChrome, FiMeh } from "react-icons/fi";
import { toggleAuthOn, toggleAuthOff, toggleAlert } from "../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const buttonWrapper = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
};

const headerWrapper = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
    color: `${themeVars.midnightGreen}`,
};

const headerWrapperLoggedIn = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
    color: `${themeVars.midnightGreen}`,
};

const button = {
    width: "50%",
    padding: "10px 30px",
    marginBottom: "10px",
    marginTop: "10px",
    border: "none",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const Auth = () => {
    const dispatch = useDispatch();
    const authAlertState = useSelector((state) => state.authReducer.authAlert);
    console.log(authAlertState);
    return (
        <div>
            <IfFirebaseAuthed>
                {() => (
                    <div style={headerWrapperLoggedIn}>
                        <h2 style={{ color: `${themeVars.midnightGreen}` }}>
                            You're signed in 🎉{" "}
                        </h2>
                        <button
                            style={button}
                            onClick={() => {
                                dispatch(toggleAuthOff());
                                firebase.app().auth().signOut();
                            }}
                        >
                            Sign out
                        </button>
                    </div>
                )}
            </IfFirebaseAuthed>
            <IfFirebaseUnAuthed>
                {({ firebase }) => (
                    <div>
                        <div style={headerWrapper}>
                            <h2
                                style={{
                                    border: `${
                                        authAlertState
                                            ? `3px solid red`
                                            : "none"
                                    }`,
                                    padding: `${
                                        authAlertState
                                            ? `1rem`
                                            : "none"
                                    }`,
                                }}
                            >
                                You're not signed in{" "}
                            </h2>
                        </div>
                        <div style={buttonWrapper}>
                            <button
                                style={button}
                                onClick={() => {
                                    firebase.app().auth().signInAnonymously();
                                    dispatch(toggleAuthOn());
                                }}
                            >
                                Sign in anonymously{" "}
                                <FiMeh
                                    style={{
                                        fontSize: "1.2rem",
                                        color: `${themeVars.midnightGreen}`,
                                        marginLeft: "5px",
                                    }}
                                />
                            </button>
                            <button
                                style={button}
                                onClick={() => {
                                    dispatch(toggleAuthOn());
                                    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                    firebase
                                        .auth()
                                        .signInWithPopup(googleAuthProvider);
                                }}
                            >
                                Sign in with Google{" "}
                                <FiChrome
                                    style={{
                                        fontSize: "1.2rem",
                                        color: `${themeVars.midnightGreen}`,
                                        marginLeft: "5px",
                                    }}
                                />
                            </button>
                        </div>
                    </div>
                )}
            </IfFirebaseUnAuthed>
        </div>
    );
};

export default Auth;
