import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import LocalStorage from "./LocalStorage";

function FormTask() {
  let [value, setValue] = LocalStorage("");
  let [value2, setValue2] = LocalStorage("");

  function clickHandler() {
    console.log("Button clicked");
  }

  return (
    <div class="form-part">
      <div>
        <h2>Please fill in the form</h2>
        <form>
          <label>
            Enter your name:
            <input
              type="text"
              onChange={(event) => setValue(event.target.value)}
              value={value}
            />
          </label>

          <label>
            Enter your Gender:
            <input type="text" />
          </label>
          <label>
            Enter your DOB:
            <input type="number" />
          </label>
        </form>
        <button onClick={clickHandler}>Submit</button>
      </div>
    </div>
  );
}

export default FormTask;
