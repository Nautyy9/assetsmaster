// import React,{createContext, useContext, useState, useEffect} from 'react'
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut, sendPasswordResetEmail, updateEmail, updatePassword} from "firebase/auth"
// import {auth} from '../firebase'


// const AuthContext = createContext()
// const user = auth.currentUser;
// console.log(user);

// export function useAuth() {
//     return useContext(AuthContext)
// }


// export function AuthContextProvider({children}) 
// {
//     const [currentUser, setUser] = useState();

//     useEffect(() => {
//       const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
//         setUser(currentuser)
//       })
    
//       return () =>{
//         unsubscribe();
//       };

//     }, [])
    

//     function signUp(email, password) {
//         return createUserWithEmailAndPassword(auth,email, password);
//     }

//     function logIn(email, password) {
//         return signInWithEmailAndPassword(auth, email, password);
//     }
//     function logout() {
//         return signOut(auth)
//       }
    
//       function resetPassword(email) {
//         return sendPasswordResetEmail(auth, email)
//       }
    
//       function emailUpdate(email) {
//         return updateEmail(user, email)
//       }
    
//       function passwordUpdate(password) {
//         return updatePassword(user, password)
//       }

//     const value= {
//         currentUser,
//         signUp,
//         logIn,
//         logout,
//         emailUpdate,
//         passwordUpdate,
//         resetPassword,

//     }
// return (  
//         <AuthContext.Provider value={value}>
//             { children}
//         </AuthContext.Provider>
// )
// }

// export default AuthContext