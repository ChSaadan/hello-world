import React, { useState, useEffect } from "react";

// function getSavedValue(key, initialValue) {
//   const savedValue = JSON.parse(localStorage.getItem(key));
//   if (savedValue) {
//     return savedValue;
//   } else {
//     return initialValue;
//   }
// }

// function LocalStorage(key, initialValue) {
//   let [value, setValue] = useState(() => {
//     return getSavedValue(key, initialValue);
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [value, key]);

//   return [value, setValue];
// }
function LocalStorage() {
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("userName");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
}

export default LocalStorage;
