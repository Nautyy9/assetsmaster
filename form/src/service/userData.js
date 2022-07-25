// import { db } from "../firebase";

// import {
//   collection,
//   getDocs,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";

// const usersCollectionRef = collection(db, "users");
// console.log(usersCollectionRef.id);

// class UserDataService {
//   createUser = (user) => {
//     return addDoc(usersCollectionRef, user);
//   };

//   updateUser = (id, updatedUser) => {
//     const userDoc = doc(db, "users", id);    
//     return updateDoc(userDoc, updatedUser);

//   };

//   getSerial = () => {
//     const userDoc = doc(db, "users");
//     return getDocs(userDoc)
//   }

//   deleteUser = (id) => {
//     const userDoc = doc(db, "users", id);
//     return deleteDoc(userDoc);
//   };

//   getAllUser = () => { 
//     console.log(getDocs);
//     return getDocs(usersCollectionRef);
   
    
//   };

//   getUser = (id) => {
//     const userDoc = doc(db, "users", id);
//     return getDoc(userDoc);
    
    
//   };
// }

// export default new UserDataService();