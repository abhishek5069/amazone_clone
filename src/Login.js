import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				navigate("/");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					navigate("/");
				}
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<Link style={{ textdecoration: "none" }} to="/">
				<img
					className="login_logo"
					src="https://imgs.search.brave.com/25E7_7DDHMGvEDl5GqL610zpf7Z_G7QP15ijorSszLQ/rs:fit:1200:1016:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGdtc2l0ZXMu/bmV0L2h1Zy9hbWF6/b24tbG9nb18xMDA2/MDk3MDVfaC5qcGc"
				/>
			</Link>

			<div className="login_container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) =>
							setPassword(e.target.value)
						}
					/>

					<button
						type="submit"
						onClick={signIn}
						className="login_signInButton"
					>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you are agree to the AMAZON FAKE
					CLONE conditions of use & sale. Please see our
					Privacy Notice, our Cookies Notices and our
					Interest-Based Ads Notice.
				</p>

				<button
					onClick={register}
					className="login_registerButton"
				>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
