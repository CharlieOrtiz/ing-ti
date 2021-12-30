import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = () => {
	return (
		<Container className="container-short form-login-container">
			<Row>
				<Col>
					<h2>Client Login</h2>
					<hr />
					<Form className="login-form">
						<Form.Group>
							<Form.Label>Correo electrónico</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="Ingresar Correo"
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								name="password"
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
					<a href="#!">¿Olvidaste tu contraseña?</a>
				</Col>
			</Row>
		</Container>
	);
};
