// import { createContext, useContext, useState } from "react";
// import useFirebase from "../Firebase/useFirebase";

// const authContext = createContext();

// export default function useAuth() {
// 	return useContext(authContext);
// }

// export function AuthProvider(props) {
// 	const [user, setUser] = useState(null);
// 	const [error, setError] = useState("");

// 	const loginWithGoogle = async () => {
// 		const { error, user } = await useFirebase.signInWithGoogle();
// 		setUser(user ?? null);
// 		setError(error ?? "");
		
// 	};

// 	const logout = async () => {
// 		await useFirebase.logout();
// 		setUser(null);
// 	};
	

// 	return <authContext.Provider  {...props} />;
// }

const useAuth = () => {
	return (
		<div>
			<h1>useAuth</h1>
		</div>
	);
}

export default useAuth;