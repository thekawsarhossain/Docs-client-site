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
  const createUser = (email, password, name, navigate) => {
    updateUserProfile(name)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // sign in existing user here
  const signIn = (email, password, navigate) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        dispatch(ADD_USER(result.user))
        dispatch(ADD_ERROR(''))
        // navigate('/home')
      })
      .catch((error) => dispatch(ADD_ERROR(error.message)))
      .finally(() => dispatch(SET_STATUS(false)))
  }

  // getting the current user here
  //   useEffect(() => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         dispatch(ADD_USER(user))
  //         dispatch(ADD_ERROR(''))
  //       } else {
  //         dispatch(REMOVE_USER({}))
  //       }
  //       dispatch(SET_STATUS(false))
  //     })
  //   }, [auth])

  // update user profile || name here
  const updateUserProfile = (name) => {
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
  //   const signInWithGoogle = (navigate) => {
  //     setLoading(true)
  //     signInWithPopup(auth, googleProvider)
  //       .then((result) => {
  //         setUser(result.user)
  //         setError('')
  //         navigate('/home')
  //       })
  //       .catch((error) => setError(error.message))
  //       .finally(() => setLoading(false))
  //   }

  // facebook sign in here
  //   const signInWithFacebook = (navigate) => {
  //     setLoading(true)
  //     signInWithPopup(auth, facebookProvider)
  //       .then((result) => {
  //         setUser(result.user)
  //         setError('')
  //         navigate('/home')
  //       })
  //       .catch((error) => setError(error.message))
  //       .finally(() => setLoading(false))
  //   }

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
  }
}

export default useFirebase
