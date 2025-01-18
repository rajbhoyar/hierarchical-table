import React from "react";
import InputControl from "./InputControl";

const Row = ({ row, updateRowValue }) => {
  const handleUpdate = (type, value) => {
    updateRowValue(row.id, value, type);
  };

  return (
    <>
      <tr>
        <td>{row.label}</td>
        <td>{row.value}</td>
        <td>{row.variance ? `${row.variance}%` : "-"}</td>
        <td>
          <InputControl onUpdate={handleUpdate} />
        </td>
      </tr>
      {row.children &&
        row.children.map((child) => (
          <Row key={child.id} row={child} updateRowValue={updateRowValue} />
        ))}
    </>
  );
};

export default Row;
