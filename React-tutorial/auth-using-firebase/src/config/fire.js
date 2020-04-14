import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDT90yRvwvcfqW5kkaHWXINVFiJApmSiIQ',
  authDomain: 'auth-using-firebase-a181b.firebaseapp.com',
  databaseURL: 'https://auth-using-firebase-a181b.firebaseio.com',
  projectId: 'auth-using-firebase-a181b',
  storageBucket: 'auth-using-firebase-a181b.appspot.com',
  messagingSenderId: '97601042959',
  appId: '1:97601042959:web:2ecc621d37af136f3dc17a',
  measurementId: 'G-642V48KKL1',
};

const fire = firebase.initializeApp(config);

export default fire;
