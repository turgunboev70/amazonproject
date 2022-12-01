import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAa9APT5z-hcmoOQq475hkssxCMkKQIruA",
    authDomain: "fir-efffc.firebaseapp.com",
    projectId: "fir-efffc",
    storageBucket: "fir-efffc.appspot.com",
    messagingSenderId: "401469920095",
    appId: "1:401469920095:web:2cd771f54b8a450e689cea",
    measurementId: "G-MV0ZHW6G9G"
};


const backend = firebase.initializeApp(firebaseConfig) // firebase initializeApp config bo'yicha
const auth = backend.auth() // usha initializeApp dan olingan auth obj
const provider = new firebase.auth.GoogleAuthProvider() // Google Popup ishlashi uchun shu narsa kerak


export { backend, auth, provider }
