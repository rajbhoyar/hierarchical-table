import React, { useState } from "react";
import Row from "./Row";
import { rowsData } from "../data";

const Table = () => {
  const [rows, setRows] = useState(rowsData);

  const updateRowValue = (id, newValue, type) => {
    const updateRecursive = (data) => {
      return data.map((row) => {
        if (row.id === id) {
          const variance = ((newValue - row.value) / row.value) * 100;
          row.value =
            type === "percentage"
              ? row.value + (row.value * newValue) / 100
              : newValue;
          row.variance = variance.toFixed(2);
        }
        if (row.children) {
          row.children = updateRecursive(row.children);
        }
        return row;
      });
    };

    const updatedRows = updateRecursive(rows);
    setRows(updatedRows);
  };

  const calculateGrandTotal = (rows) =>
    rows.reduce(
      (acc, row) =>
        acc +
        row.value +
        (row.children ? calculateGrandTotal(row.children) : 0),
      0
    );

  return (
    <table className="hierarchical-table">
      <thead>
        <tr>
          <th>Label</th>
          <th>Value</th>
          <th>Variance</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <Row key={row.id} row={row} updateRowValue={updateRowValue} />
        ))}
        <tr>
          <td>Grand Total</td>
          <td>{calculateGrandTotal(rows)}</td>
          <td colSpan="2"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
