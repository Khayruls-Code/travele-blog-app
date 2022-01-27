import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication()

const googleProvider = new GoogleAuthProvider()
const auth = getAuth()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setisLoading] = useState(true)
  const [admin, setAdmin] = useState(null)

  //sing in using google
  const singInUsingGoogle = (location, navigate) => {
    setisLoading(true)
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user)
        setSuccess(true)
        navigate(location.state?.from || '/')
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(setisLoading(false))
  }

  const saveUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
  }
  //create user by email & password
  const createUser = (email, password, name, navigate) => {
    setisLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        saveUserName(name)
        setUser(result.user)
        addUser(name, email)
        sendEmailVerification(auth.currentUser)
          .then(() => { })
          .catch(error => console.log(error.message))
        setError('')
        setSuccess(true)
        navigate('/')
      })
      .catch(error => {
        setError(error.message)
        setSuccess(false)
      })
      .finally(setisLoading(false))
  }

  //sing in using email & password
  const signInUser = (email, password, location, navigate) => {
    setisLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        setError('')
        setSuccess(true)
        navigate(location.state?.from || '/')
      })
      .catch(error => {
        setError(error.message)
        setSuccess(false)
      })
      .finally(setisLoading(false))
  }

  //get current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        checkAdmin(user.email)
      } else {
        setUser({})
      }
      setisLoading(false)
    })
    return () => unSubscribe;
  }, [])

  //sing out user
  const singOutUser = () => {
    setisLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
        setError('')
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(setisLoading(false))
  }

  //post user
  const addUser = (name, email) => {
    const data = { name, email }
    fetch('https://powerful-coast-12866.herokuapp.com/users', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
  }

  //set admin
  const checkAdmin = (email) => {
    fetch(`https://powerful-coast-12866.herokuapp.com/users/${email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin)
      })
  }


  return {
    singInUsingGoogle,
    user,
    error,
    success,
    createUser,
    signInUser,
    singOutUser,
    isLoading,
    admin
  }

}


export default useFirebase;