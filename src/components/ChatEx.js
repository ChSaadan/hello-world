import React, { useState } from "react";

const ChatEx = () => {
  const [formValues, setFormValues] = useState([
    {
      name: "John",
      email: "john@example.com",
      phone: "1234567890",
      gender: "Male",
    },
    {
      name: "Jane",
      email: "jane@example.com",
      phone: "9876543210",
      gender: "Female",
    },
    {
      name: "Bob",
      email: "bob@example.com",
      phone: "5678901234",
      gender: "Male",
    },
  ]);

  const handleDelete = (index) => {
    const updatedFormValues = [...formValues];
    updatedFormValues.splice(index, 1);
    setFormValues(updatedFormValues);
  };

  return (
    <table border="1px">
      <thead>
        <tr>
          <th align="left">Name</th>
          <th align="center">Email</th>
          <th align="center">Phone</th>
          <th align="center">Gender</th>
          <th align="right">Delete Entry</th>
        </tr>
      </thead>
      <tbody>
        {formValues &&
          formValues.map((formVal, index) => (
            <tr key={index}>
              <td>
                <p align="left">{formVal.name}</p>
              </td>
              <td>
                <p align="center">{formVal.email}</p>
              </td>
              <td>
                <p align="center">{formVal.phone}</p>
              </td>
              <td>
                <p align="center">{formVal.gender}</p>
              </td>
              <td align="right">
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ChatEx;
