import React, { useState } from "react";
//include images into your bundle

//create your first component
export function Formulario() {
	const [opened, setOpened] = useState(true);

	return opened ? (
		<div className="pickContainer">
			<form className="form-control bg-danger pickPlayer mt-4">
				<label className="label"></label>
				<div className="row form-group">
					<input
						type="text"
						className="form-control col-6"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="first Player"
					/>
					<input
						type="text"
						className="form-control col-6"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="first Player"
					/>
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
