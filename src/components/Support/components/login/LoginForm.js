import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = ({
	handleOnChange,
	handleOnSubmit,
	email,
	password,
	switchForm,
}) => {
	return (
		<Container className="container-short form-login-container">
			<Row>
				<Col>
					<h2>Client Login</h2>
					<hr />
					<Form
						className="login-form"
						autoComplete="off"
						onSubmit={handleOnSubmit}
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
						<Form.Group>
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={password}
								onChange={handleOnChange}
								placeholder="Contraseña"
								required
							/>
						</Form.Group>
						<Button type="submit">Login</Button>
					</Form>
				</Col>
			</Row>
			<Row>
				<Col>
					<a href="#!" onClick={(e) => {
						e.preventDefault();
						switchForm('reset');
					}}>
						¿Olvidaste tu contraseña?
					</a>
				</Col>
			</Row>
		</Container>
	);
};

LoginForm.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
	switchForm: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
};
