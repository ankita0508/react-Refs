import React, { useRef } from "react";
import "./style.css";

export default function App() {
  let firstName = useRef();
  let lastName = useRef();
  let age = useRef();
  let btnSubmit = useRef();

  const focusNextItemHandler = (e, target) => {
    if (e.keyCode === 13) {
      switch (target) {
        case "firstName":
          lastName.focus();
          break;
        case "lastName":
          age.focus();
          break;
        case "age":
          btnSubmit.focus();
          break;
        case "submit":
          console.log("form submitted");
          break;
        default:
          firstName.focus();
      }
    }
  };

  const submitFormHandler = e => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <form onSubmit={submitFormHandler}>
      First Name:
      <input
        type="text"
        ref={input => {
          firstName = input;
        }}
        onKeyUp={e => focusNextItemHandler(e, "firstName")}
      />
      <br />
      Last Name:
      <input
        type="text"
        ref={input => (lastName = input)}
        onKeyUp={e => focusNextItemHandler(e, "lastName")}
      />
      <br />
      Age:
      <input
        type="number"
        ref={input => (age = input)}
        onKeyUp={e => focusNextItemHandler(e, "age")}
      />
      <br />
      <input
        type="submit"
        value="submit"
        ref={input => (btnSubmit = input)}
        onKeyUp={e => focusNextItemHandler(e, "submit")}
      />
      <br />
    </form>
  );
}
