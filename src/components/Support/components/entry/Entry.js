import React, { useState } from "react";
import { LoginForm } from "../login/LoginForm";
import { ResetPasswordForm } from "../resetPassword/ResetPasswordForm";
import "./entry.style.css";

export const Entry = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayForm, setDisplayForm] = useState("login");

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				setEmail(value);
				break;
			case "password":
				setPassword(value);
				break;
			default:
				break;
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (!email || !password)
			return alert("Por favor completa todos los campos");
		//TODO call api to submit the form
		console.log(email);
		console.log(password);
	};

	const handleOnResetSubmit = (e) => {
		e.preventDefault();
		if (!email)
			return alert("Por favor completa todos los campos");
		//TODO call api to submit the form
		console.log(email);
	};

	const frmSwitcher = (frmSelected) => {
		setDisplayForm(frmSelected);
	};

	return (
		<div className="entry-page">
			<div className="login-container">
				{displayForm === "login" && (
					<LoginForm
						handleOnChange={handleOnChange}
						email={email}
						password={password}
						handleOnSubmit={handleOnSubmit}
						switchForm={frmSwitcher}
					/>
				)}
				{displayForm === "reset" && (
					<ResetPasswordForm
						handleOnChange={handleOnChange}
						email={email}
						handleOnResetSubmit={handleOnResetSubmit}
						switchForm={frmSwitcher}
					/>
				)}
			</div>
		</div>
	);
};
