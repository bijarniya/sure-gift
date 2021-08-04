import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  login,
  register,
  logout,
  updateProfile,
  resetPassword,
  updateProfileImage
} from 'src/redux/slices/authJwt';
import {
  isEmpty,
  isLoaded,
  useFirebase,
  useFirestore
} from 'react-redux-firebase';

// ----------------------------------------------------------------------

useAuth.propTypes = {
  method: PropTypes.oneOf(['jwt', 'firebase'])
};

export default function useAuth(method = 'jwt') {
  // Firebase Auth
  const firebase = useFirebase();
  const firestore = useFirestore();
  const { auth, profile } = useSelector((state) => state.firebase);

  // JWT Auth
  const dispatch = useDispatch();
  const { user, isLoading, isAuthenticated, accessToken } = useSelector(
    (state) => state.authJwt
  );

  // JWT Auth
  if (method === 'jwt') {
    return {
      method: 'jwt',
      user: user,
      isLoading: isLoading,
      isAuthenticated: isAuthenticated,
      accessToken: accessToken,
      login: ({ email, password }) =>
        dispatch(
          login({
            email: email,
            password: password
          })
        ),

      register: ({
        email,
        password,
        firstName,
        lastName,
        referrerCode,
        receiveLetters
      }) =>
        dispatch(
          register({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            referrerCode: referrerCode,
            receiveLetters: receiveLetters
          })
        ),

      logout: () => dispatch(logout()),

      resetPassword: (data) => dispatch(resetPassword(data)),

      updateProfile: (data) => dispatch(updateProfile(data)),
      updateProfileImage: (data) => dispatch(updateProfileImage(data))
    };
  }

  // Firebase Auth
  return {
    method: 'firebase',
    user: {
      displayName: auth.displayName || profile.displayName || '',
      email: auth.email || '',
      photoURL: auth.photoURL || profile.photoURL || '',
      phoneNumber: auth.phoneNumber || profile.phoneNumber || '',
      country: profile.country || '',
      address: profile.address || '',
      state: profile.state || '',
      city: profile.city || '',
      zipCode: profile.zipCode || '',
      about: profile.about || '',
      role: profile.role || '',
      isPublic: profile.isPublic || false
    },
    isLoading: !isLoaded(auth),
    isAuthenticated: !isEmpty(auth),

    login: ({ email, password }) =>
      firebase.login({
        email: email,
        password: password
      }),
    loginWithGoogle: () =>
      firebase.login({ provider: 'google', type: 'popup' }),

    loginWithFaceBook: () =>
      firebase.login({ provider: 'facebook', type: 'popup' }),

    loginWithTwitter: () =>
      firebase.login({ provider: 'twitter', type: 'popup' }),

    register: ({ email, password, firstName, lastName }) =>
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          firestore
            .collection('users')
            .doc(res.user.uid)
            .set({
              uid: res.user.uid,
              email: email,
              displayName: firstName + ' ' + lastName
            });
        }),

    logout: () => firebase.logout(),

    resetPassword: (email) => firebase.resetPassword(email),

    updateProfile: ({
      displayName,
      photoURL,
      phoneNumber,
      country,
      state,
      city,
      address,
      zipCode,
      about,
      isPublic
    }) =>
      firebase.updateProfile({}).then((res) => {
        firestore.collection('users').doc(res.id).set(
          {
            displayName: displayName,
            photoURL: photoURL,
            phoneNumber: phoneNumber,
            country: country,
            state: state,
            city: city,
            address: address,
            zipCode: zipCode,
            about: about,
            isPublic: isPublic
          },
          { merge: true }
        );
      })
  };
}
