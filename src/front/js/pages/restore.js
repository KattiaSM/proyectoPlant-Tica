import React from "react";

export const Restore = props => {
	return (
		<div className="container text-center m-auto">
			<div className="row">
				<div className="col-sm-12 offset-md-3 col-md-6">
					<h1 className="h1">Recuperar Contraseña</h1>
					<hr />
					<p className="muted">
						Ingresa el correo electronico asociado a tu cuenta para recuperar la contraseña.
					</p>
					<form className="text-left">
						<div className="form-group mb-4">
							<label htmlFor="exampleInputEmail1">Correo</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Ingresa el correo"
							/>
							<small id="emailHelp" className="form-text text-muted">
								Correo asociado a tu cuenta
							</small>
						</div>

						<button type="submit" className="btn btn-info btn-block">
							Recuperar Contraseña
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
