import { useEffect } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  deleteUser,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {
  ADD_ERROR,
  ADD_USER,
  REMOVE_USER,
  SET_STATUS,
  REMOVE_DATA,
} from '../Redux/Slices/userSlice'
import initializeAuthentication from './firebase.init'

// firebase initialization function called here
initializeAuthentication()

const useFirebase = () => {
  // redux hooks here
  const dispatch = useDispatch()

  // auth and providers here
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()

  // create a new user using  email and password
  const createUser = (email, password, name, router) => {
    dispatch(SET_STATUS(true))
    updateUserProfile(name)
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateUserProfile(name)
        dispatch(ADD_USER(result.user))
        saveUserDB(
          email,
          name,
          'https://i.ibb.co/DMYmT3x/Generic-Profile.jpg',
          'POST'
        )
        router.replace('/')
      })
      .catch((error) => dispatch(ADD_ERROR(error.message)))
      .finally(() => dispatch(SET_STATUS(false)))
  }

  // sign in existing user here
  const signIn = (email, password, router) => {
    dispatch(SET_STATUS(true))
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        dispatch(ADD_USER(result.user))
        router.replace('/')
      })
      .catch((error) => dispatch(ADD_ERROR(error.message)))
      .finally(() => dispatch(SET_STATUS(false)))
  }

  // getting the current user here
  useEffect(() => {
    dispatch(SET_STATUS(true))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(ADD_USER(user))
        // dispatch(ADD_ERROR(''))
      } else {
        dispatch(REMOVE_USER({}))
      }
      dispatch(SET_STATUS(false))
    })
  }, [auth, dispatch])

  // update user profile || name here
  const updateUserProfile = (name) => {
    dispatch(SET_STATUS(true))
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => dispatch(ADD_ERROR(error.message)))
      .finally(() => dispatch(SET_STATUS(false)))
  }

  // verify email here
  //   const verifyEmail = () => {
  //     sendEmailVerification(auth.currentUser)
  //       .then(() => console.log('sendddd'))
  //       .catch((error) => setError(error.message))
  //   }

  // delete user here
  //   const userDelete = () => {
  //     deleteUser(auth.currentUser)
  //       .then(() => {})
  //       .catch((error) => setError(error.message))
  //   }

  // google sign in here
  const signInWithGoogle = (router) => {
    dispatch(SET_STATUS(true))
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        saveUserDB(
          result?.user?.email,
          result?.user?.displayName,
          result?.user?.photoURL,
          'PUT'
        )
        dispatch(ADD_USER(result.user))
        router.replace('/')
      })
      .catch((error) => dispatch(ADD_ERROR(error.message)))
      .finally(() => dispatch(SET_STATUS(false)))
  }

  // save user to the DB
  const saveUserDB = async (email, displayName, image, method) => {
    const payload = {
      email,
      displayName,
      image,
      role: 'user',
      followers: [],
      following: [],
    }

    SET_STATUS(true)
    fetch('https://polar-hamlet-38117.herokuapp.com/users/', {
      method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .catch((error) => dispatch(ADD_ERROR(error.message)))
      .finally(() => dispatch(SET_STATUS(false)))
  }

  // log out user here
  const logoutUser = () => {
    signOut(auth)
      .then(() => dispatch(REMOVE_USER({})))
      .catch((error) => dispatch(ADD_ERROR(error.message)))
  }

  // returning here all the necessary things
  return {
    createUser,
    signIn,
    logoutUser,
    signInWithGoogle,
  }
}

export default useFirebase
