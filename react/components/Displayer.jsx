import * as React from "react";
import useAppStore from "../store/useAppStore";

function Displayer() {
  const displayerDate = useAppStore((state) => state.displayerDate);

  return (
    <div className="component-displayer">
      <h1>{displayerDate.toLocaleString()}</h1>
    </div>
  );
}

export default Displayer;
