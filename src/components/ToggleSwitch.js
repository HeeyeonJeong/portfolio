import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from "../context/ThemeContext";

const OrangeSwitch = withStyles({
  root: {
    width: "60px",
    height: "40px",
  },
  switchBase: {
    color: "#F54404",
    "&$checked": {
      color: "#F54404",
    },
    "&$checked + $track": {
      backgroundColor: "#F54404",
    },

    "&$focusVisible $thumb": {
      border: "6px solid #F54404",
    },
  },
  track: {
    border: `1px solid black`,
    backgroundColor: "white",
  },
  checked: {},
})(Switch);

function ToggleSwitch() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <FormControlLabel
        control={
          <OrangeSwitch onChange={toggleTheme} name="checkedA" mode={mode} />
        }
        label={
          mode.textColor === "white"
            ? "Switch to Light mode"
            : "Switch to Dark mode"
        }
      />
    </div>
  );
}

export default ToggleSwitch;
