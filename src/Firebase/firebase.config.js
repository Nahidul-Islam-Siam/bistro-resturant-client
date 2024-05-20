// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAygkt0JXy3lR6jtElI9lHqlPRO3D0RE8k",
  authDomain: "bistro-boss-resturant-dbfcb.firebaseapp.com",
  projectId: "bistro-boss-resturant-dbfcb",
  storageBucket: "bistro-boss-resturant-dbfcb.appspot.com",
  messagingSenderId: "287063657820",
  appId: "1:287063657820:web:43bd7c34b924edd6810599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth