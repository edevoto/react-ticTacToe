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
		<div className="row">
			<div className="col-4 bg-danger">
				<div className="row w-100 my-3 square">
					<div className="col-12 bg-info">asdasd</div>
				</div>
				<div className="row w-100 my-3 square">
					<div className="col-12 bg-info">asdasd</div>
				</div>
				<div className="row w-100 my-3 square">
					<div className="col-12 bg-info">asdasd</div>
				</div>
			</div>
			<div className="col-4 bg-danger">
				<div className="row w-100 my-3 square">
					<div className="col-12 bg-info">asdasd</div>
				</div>
				<div className="row w-100 my-3 square">
					<div className="col-12 bg-info">asdasd</div>
				</div>
				<div className="row w-100 my-3 square">
					<div className="col-12 bg-info">asdasd</div>
				</div>
			</div>
			<div className="col-4 bg-danger">
				<div className="row w-100 my-3 square">
					<div className="col-12 bg-info">asdasd</div>
				</div>
				<div className="row w-100 my-3 square">
					<div className="col-12 bg-info">asdasd</div>
				</div>
				<div className="row w-100 my-3 square">
					<div className="col-12 bg-info">asdasd</div>
				</div>
			</div>
		</div>
	);
}
