import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const currencies = [
  {
    value: "USD",
    label: "Housing",
  },
  {
    value: "EUR",
    label: "Transportation",
  },
  {
    value: "BTC",
    label: "Food",
  },
  {
    value: "JPY",
    label: "Utilities",
  },
];

export default function Input() {
  const [currency, setCurrency] = React.useState("EUR");
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="input-container">
      <h1>Input</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Expenses"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Time"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Amount"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="select a category"
            value={currency}
            onChange={handleChange}
            // helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
      <Button variant="contained" href="#contained-buttons">
        Submit
      </Button>
    </div>
  );
}
