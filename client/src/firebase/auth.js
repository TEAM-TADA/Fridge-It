import {auth, googleProvider} from "./config";


export function loginWithGoogle() {

    console.log('auth sign in with redirect')
    return auth().signInWithRedirect(googleProvider);
    //return authenticate(loginWithFirebase(googleProvider));
}

export function logout() {
    console.log('signout')
    return auth().signOut();
}

