import initializeAuthentication from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';


//firebase initialization

initializeAuthentication();

const useFirebase = () => {

	//declare all states
	const [user, setUser] = useState({});

	const [email, setEmail] = useState('');

	const [name, setName] = useState('');

	const [isLoading, setIsLoading] = useState(true);

	const [password, setPassword] = useState('');

	//get auth
	const auth = getAuth();

	const googleProvider = new GoogleAuthProvider();

	//google authentication

	const signInUsingGoogle = () => {
	return	signInWithPopup(auth, googleProvider)

	}

	//observe whether user auth state changed or not

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if(user) {
				setUser(user);
			}
			else {
				setUser({});
			}
			setIsLoading(false)
		})
	},[auth])

	//get display name input in Register
	const handleDisplayName = e => {
		setName(e.target.value);
	}

	//get display Email input in Register
	const handleCreateEmail = e => {
		setEmail(e.target.value);
	}

	//get display name password in Register
	const handleCreatePassword = e => {
		setPassword(e.target.value);
	}

	//set user name
	const setUserName = () => {
		updateProfile(auth.currentUser, {
			displayName: name,
		})
		.then(() => {
		} )
	}

	//handle register button
	const handleRegister = e => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth,email,password)
		.then(result=> {
			setUserName();
		});
	}

	//get login input
	const handleEmailLogin = e => {
		setEmail(e.target.value);
	}
	const handlePasswordLogin = e => {
		setPassword(e.target.value);
	}

	//handle login

	const handleLogin = () => {

	return     signInWithEmailAndPassword(auth, email, password)

	}

	//handle logout
	const logout = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.finally(() => setIsLoading(false));
	}

	return {
		user,
		signInUsingGoogle,
		logout,
		handleCreateEmail,
		handleDisplayName,
		handleCreatePassword,
		handleRegister,
		handleEmailLogin,
		handlePasswordLogin,
		handleLogin,
		isLoading,
		setIsLoading
	}

}

export default useFirebase;