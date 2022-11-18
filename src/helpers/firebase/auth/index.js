import { app } from "services/firebase"
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth";
import { setNewDataUser } from "../db";

export const auth = getAuth(app);

export const signUp = (userInfo) => {
	createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
		.then((userCredential) => {
			const user = userCredential.user;
			setNewDataUser(user.uid, userInfo);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
}

export const signIn = async (data) => {
	const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password).catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		return null;
	});
	const user = userCredential.user;
	return user;
}

export const logOut = () => {
	signOut(auth).then(() => {
	}).catch((error) => {
	});
}

export const getCurrentUser = () => {
	return auth.currentUser;
}