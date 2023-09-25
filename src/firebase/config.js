import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBXIYz6YrBqorWtT02iN1SS63ePig6imWA",
  authDomain: "miniblog-70151.firebaseapp.com",
  projectId: "miniblog-70151",
  storageBucket: "miniblog-70151.appspot.com",
  messagingSenderId: "859354587504",
  appId: "1:859354587504:web:dfd4237f5d6efc5e1fafb5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };