import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBWqHqt-rcFJmquIrXrga9dqZgXyrcs2gQ",
  authDomain: "netflix-clone-b3c08.firebaseapp.com",
  projectId: "netflix-clone-b3c08",
  storageBucket: "netflix-clone-b3c08.firebasestorage.app",
  messagingSenderId: "861572680670",
  appId: "1:861572680670:web:b4e33fb2b8a2ca0bb7ab4f",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name,email,password)=>{
    try {
       const res=  await createUserWithEmailAndPassword(auth,email,password)
       console.log(res);
       
       const user = res.user
       console.log(user);
       

       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email
       })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split("-").join(" "))
    }
}

const login = async (email,password) =>{
    try {
       const res = await signInWithEmailAndPassword(auth,email,password)
       console.log(res);
       
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split("-").join(" "))
        
    }
}

const logout = () =>{
    toast.success("successfully signed out")
     signOut(auth)
}

export {auth,db,login,signup,logout}