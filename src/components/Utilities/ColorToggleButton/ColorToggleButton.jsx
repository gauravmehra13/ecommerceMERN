import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="White">White</ToggleButton>
      <ToggleButton value="Black">Black</ToggleButton>
      <ToggleButton value="Grey">Grey</ToggleButton>
    </ToggleButtonGroup>
  );
}
