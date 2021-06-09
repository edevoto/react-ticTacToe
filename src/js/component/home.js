import React, { useState } from "react";
//include images into your bundle

//create your first component
export function Formulario() {
	const [opened, setOpened] = useState(true);

	return opened ? (
		<div className="pickContainer">
			<form className="form-control bg-danger pickPlayer mt-4">
				<div className="row form-group">
					<div>
						<label className="label">X</label>
						<input
							type="text col-6"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="first Player"
						/>
					</div>
					<div>
						<label className="label">O</label>
						<input
							type="text col-6"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="first Player"
						/>
					</div>
				</div>
				<div className="row">
					<button
						type="button"
						className="btn btn-lg btn-light"
						onClick={() => setOpened(false)}>
						PLAY
					</button>
				</div>
			</form>
		</div>
	) : (
		<button type="button" onClick={() => setOpened(true)}>
			Open
		</button>
	);
}

export function TicTacToe() {
	return (
		<div>
			<div className="row bg-danger">
				<div className="col-4 "></div>
				<div className="col-4 "></div>
				<div className="col-4 "></div>
			</div>
			<div className="row bg-danger">
				<div className="col-4 "></div>
				<div className="col-4 "></div>
				<div className="col-4 "></div>
			</div>
			<div className="row bg-danger">
				<div className="col-4 "></div>
				<div className="col-4 "></div>
				<div className="col-4 "></div>
			</div>
		</div>
	);
}
