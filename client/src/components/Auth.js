import React from "react";
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import firebase from "firebase/app";

const Auth = () => {
    return (
        <div>
            <IfFirebaseAuthed>
                {() => (
                    <div>
                        <h2>You're signed in 🎉 </h2>
                        <button
                            onClick={() => {
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
                        <h2>You're not signed in </h2>
                        <button
                            onClick={() => {
                                firebase.app().auth().signInAnonymously();
                            }}
                        >
                            Sign in anonymously
                        </button>
                        <button
                            onClick={() => {
                                const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                firebase
                                    .auth()
                                    .signInWithPopup(googleAuthProvider);
                            }}
                        >
                            Sign in with Google
                        </button>
                    </div>
                )}
            </IfFirebaseUnAuthed>
        </div>
    );
};

export default Auth;
