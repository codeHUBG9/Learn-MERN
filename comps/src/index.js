import React, { StrictMode } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
