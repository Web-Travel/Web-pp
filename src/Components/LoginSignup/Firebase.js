// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2V0Hiahd8vD57w5gn3dRSs_jbW2wqbsk",
  authDomain: "pp-project-f6ba2.firebaseapp.com",
  projectId: "pp-project-f6ba2",
  storageBucket: "pp-project-f6ba2.appspot.com",
  messagingSenderId: "196142491394",
  appId: "1:196142491394:web:f151198702ace0f026041b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const usenavigate = useNavigate();

const provider = new GoogleAuthProvider()


export const signInWithGoogle = () => {
    signInWithPopup(auth, provider) 
    .then((result) => {
        // toast.success('Register Succcessfully.')
        // usenavigate('/photos');

        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    }).catch((error) => {
        console.log((error));
    })
};