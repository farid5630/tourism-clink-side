import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
// import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../Pages/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .then((result) => {
            // const user = result.user;
            // saveUser(user.email, user.displayName, 'PUT')
            // setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        })
        .catch((error) => {
            // setAuthError(error.message);
        })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;