import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBee_Yom1sczM7RZfiOn8UGJDx_0l8puRA",
  authDomain: "ecommerce-react-b3673.firebaseapp.com",
  projectId: "ecommerce-react-b3673",
  storageBucket: "ecommerce-react-b3673.firebasestorage.app",
  messagingSenderId: "239774145991",
  appId: "1:239774145991:web:c6660000fb1d5dbdb44de2",
  measurementId: "G-4HD2MPWX9R"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);