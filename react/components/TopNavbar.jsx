import * as React from "react";
import Button from "./Button";

function TopNavbar() {
  return (
    <div className="component-top-navbar">
      <Button>Utilisateurs</Button>
      <Button>Parc</Button>
      <Button>Paramètres</Button>
    </div>
  );
}

export default TopNavbar;
