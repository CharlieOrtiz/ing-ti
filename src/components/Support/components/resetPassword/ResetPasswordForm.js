import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPasswordForm = ({
	handleOnChange,
	handleOnResetSubmit,
	email,
	switchForm,
}) => {
	return (
		<Container className="container-short form-login-container">
			<Row>
				<Col>
					<h2>Recuperar contraseña</h2>
					<hr />
					<Form
						className="login-form"
						autoComplete="off"
						onSubmit={handleOnResetSubmit}
					>
						<Form.Group>
							<Form.Label>Correo electrónico</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								placeholder="Ingresar Correo"
								required
							/>
						</Form.Group>
						<Button type="submit">Enviar</Button>
					</Form>
				</Col>
			</Row>
			<Row>
				<Col>
					<a href="#!" onClick={(e) => {
						e.preventDefault();
						switchForm('login');
					}}>Iniciar Sesión</a>
				</Col>
			</Row>
		</Container>
	);
};

ResetPasswordForm.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnResetSubmit: PropTypes.func.isRequired,
	switchForm: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
};
