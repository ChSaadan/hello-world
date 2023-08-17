import React, { useState, useEffect } from "react";
function ToDo() {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });
  const [formValues, setFormValues] = useState([]);

  const submitForm = () => {
    setFormValues((prevFormValues) => {
      let updatedstate = [...prevFormValues, initialValues];
      setLocalStorage("formValues", updatedstate);
      return updatedstate;
    });
  };

  useEffect(() => {
    let data = getLocalStorage("formValues");
    setFormValues(JSON.parse(data));
  }, []);

  const getLocalStorage = (key) => {
    return localStorage.getItem(key);
  };

  const setLocalStorage = (key, data) => {
    let formatedData = typeof data === "string" ? data : JSON.stringify(data);
    localStorage.setItem(key, formatedData);
  };

  const handleDelete = (index) => {
    const updatedFormValues = formValues.filter((_, i) => i !== index);
    setLocalStorage("formValues", updatedFormValues);
    setFormValues(updatedFormValues);
  };

  return (
    <>
      <div className="App">
        <h2>Please fill in the Form</h2>
        <div>
          Name:
          <input
            value={initialValues.name}
            onChange={(e) =>
              setInitialValues({ ...initialValues, name: e.target.value })
            }
          />
        </div>
        <div>
          Email:
          <input
            value={initialValues.email}
            onChange={(e) =>
              setInitialValues({ ...initialValues, email: e.target.value })
            }
          />
        </div>
        <div>
          Phone:
          <input
            value={initialValues.phone}
            onChange={(e) =>
              setInitialValues({ ...initialValues, phone: e.target.value })
            }
          />
        </div>
        <div>
          Gender
          <select
            value={initialValues.gender}
            onChange={(e) =>
              setInitialValues({ ...initialValues, gender: e.target.value })
            }
          >
            <option>Female</option>
            <option>Male</option>
          </select>
        </div>
        <button onClick={submitForm}>Submit </button>
      </div>
      <table border="1px">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th align="center">Email</th>
            <th align="center">Phone</th>
            <th align="center">Gender</th>
            <th align="right">Delete Entry</th>
          </tr>
        </thead>
        <tbody>
          {formValues &&
            formValues.map((formVal, index) => (
              <tr>
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
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default ToDo;
