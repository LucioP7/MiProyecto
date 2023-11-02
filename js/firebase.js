// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
       apiKey: "AIzaSyA4K0tq2WB5trRNaEdcm_jndfTE54OuBKE",
       authDomain: "redsocialluciop7.firebaseapp.com",
       projectId: "redsocialluciop7",
       storageBucket: "redsocialluciop7.appspot.com",
       messagingSenderId: "596746966387",
       appId: "1:596746966387:web:294aaf6d805a91a083a106",
       measurementId: "G-2LDPXQD0ST"
    };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
