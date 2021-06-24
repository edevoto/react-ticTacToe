import React, { useState } from "react";
//include images into your bundle

//create your first component
export function Formulario() {
	const [opened, setOpened] = useState(true);

	const cuadradoUno = () => {
		let btn = document.getElementById("boton1");
		if (btn.hasChildNodes()) {
			console.log(btn);
		} else {
			let x = document.createElement("h1");
			x.textContent = "X";
			btn.appendChild(x);
		}
		console.log(btn);
	};
	const cuadradoDos = () => {
		let btn = document.getElementById("boton2");
		if (btn.hasChildNodes()) {
			console.log(btn);
		} else {
			let x = document.createElement("h1");
			x.textContent = "X";
			btn.appendChild(x);
		}
		console.log(btn);
	};
	const cuadradoTres = () => {
		let btn = document.getElementById("boton3");
		if (btn.hasChildNodes()) {
			console.log(btn);
		} else {
			let x = document.createElement("h1");
			x.textContent = "X";
			btn.appendChild(x);
		}
		console.log(btn);
	};
	const cuadradoCuatro = () => {
		let btn = document.getElementById("boton4");
		if (btn.hasChildNodes()) {
			console.log(btn);
		} else {
			let x = document.createElement("h1");
			x.textContent = "X";
			btn.appendChild(x);
		}
		console.log(btn);
	};
	const cuadradoCinco = () => {
		let btn = document.getElementById("boton5");
		if (btn.hasChildNodes()) {
			console.log(btn);
		} else {
			let x = document.createElement("h1");
			x.textContent = "X";
			btn.appendChild(x);
		}
		console.log(btn);
	};
	const cuadradoSeis = () => {
		let btn = document.getElementById("boton6");
		if (btn.hasChildNodes()) {
			console.log(btn);
		} else {
			let x = document.createElement("h1");
			x.textContent = "X";
			btn.appendChild(x);
		}
		console.log(btn);
	};
	const cuadradoSiete = () => {
		let btn = document.getElementById("boton7");
		if (btn.hasChildNodes()) {
			console.log(btn);
		} else {
			let x = document.createElement("h1");
			x.textContent = "X";
			btn.appendChild(x);
		}
		console.log(btn);
	};
	const cuadradoOcho = () => {
		let btn = document.getElementById("boton8");
		if (btn.hasChildNodes()) {
			console.log(btn);
		} else {
			let x = document.createElement("h1");
			x.textContent = "X";
			btn.appendChild(x);
		}
		console.log(btn);
	};
	const cuadradoNueve = () => {
		let btn = document.getElementById("boton9");
		if (btn.hasChildNodes()) {
			console.log(btn);
		} else {
			let x = document.createElement("h1");
			x.textContent = "X";
			btn.appendChild(x);
		}
		console.log(btn);
	};

	return opened ? (
		<div className="pickContainer">
			<form className="form-control bg-danger pickPlayer mt-4">
				<div className="row form-group">
					<div>
						<label className="label">X</label>
						<input
							type="text col-6"
							className="form-control"
							id="firstPLayer"
							aria-describedby="emailHelp"
							placeholder="first Player"
						/>
					</div>
					<div>
						<label className="label">O</label>
						<input
							type="text col-6"
							className="form-control"
							id="secondPlayer"
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
		<div className="container caja  text-center d-flex justify-content-center align-items-center p-5">
			<div className="col-4 ">
				<div className="row w-100 my-4 square">
					<div
						onClick={cuadradoUno}
						id="boton1"
						className="col-12 bg-danger"></div>
				</div>
				<div className="row w-100 my-4 square">
					<div
						onClick={cuadradoDos}
						id="boton2"
						className="col-12 bg-danger"></div>
				</div>
				<div className="row w-100 my-4 square">
					<div
						onClick={cuadradoTres}
						id="boton3"
						className="col-12 bg-danger"></div>
				</div>
			</div>
			<div className="col-4 ">
				<div className="row w-100 my-4 square">
					<div
						onClick={cuadradoCuatro}
						id="boton4"
						className="col-12 bg-danger"></div>
				</div>
				<div className="row w-100 my-4 square">
					<div
						onClick={cuadradoCinco}
						id="boton5"
						className="col-12 bg-danger"></div>
				</div>
				<div className="row w-100 my-4 square">
					<div
						onClick={cuadradoSeis}
						id="boton6"
						className="col-12 bg-danger"></div>
				</div>
			</div>
			<div className="col-4 ">
				<div className="row w-100 my-4 square">
					<div
						onClick={cuadradoSiete}
						id="boton7"
						className="col-12 bg-danger"></div>
				</div>
				<div className="row w-100 my-4 square">
					<div
						onClick={cuadradoOcho}
						id="boton8"
						className="col-12 bg-danger"></div>
				</div>
				<div className="row w-100 my-4 square">
					<div
						onClick={cuadradoNueve}
						id="boton9"
						className="col-12 bg-danger"></div>
				</div>
			</div>
		</div>
	);
}

//
