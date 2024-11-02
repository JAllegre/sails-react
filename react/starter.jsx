import * as React from "react";
import { createRoot } from "react-dom/client";
import Displayer from "./components/Displayer";
import TopNavbar from "./components/TopNavbar";

const navRoot = createRoot(document.getElementById("navbar-root"));
navRoot.render(<TopNavbar />);

const displayerRoot = createRoot(document.getElementById("displayer-root"));

displayerRoot.render(<Displayer />);
