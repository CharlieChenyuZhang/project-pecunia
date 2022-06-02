import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ESSENTIAL_CATEGORIES } from "./constants";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Rent", "2022-06-02", 6.0, ESSENTIAL_CATEGORIES[1]),
  createData("Electricity & Water", "2022-06-02", 9.0, ESSENTIAL_CATEGORIES[4]),
  createData("Phone", "2022-06-02", 16.0, ESSENTIAL_CATEGORIES[4]),
  createData("Internet", "2022-06-02", 3.7, ESSENTIAL_CATEGORIES[4]),
  createData("Transportation", "2022-06-02", 16.0, ESSENTIAL_CATEGORIES[2]),
];

export default function Expenses() {
  return (
    <div className="expenses-container">
      <h1>Expenses Breakdown</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Expenses</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Amount&nbsp;(CAD)</TableCell>
              <TableCell align="right">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
