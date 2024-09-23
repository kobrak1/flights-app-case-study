import { useRef } from "react";
import "./InputGroup.scss";

const InputGroup = ({ type, htmlFor, label, placeholder, handleChange, value, disabled }) => {
  const inputRef = useRef(null);

  // this function makes the user focued on the input field when
  // the user clickd on any part of the div
  const handleFocus = () => {
    if (inputRef.current.type === "date") {
      inputRef.current.showPicker();
    }
    inputRef.current.focus();
  };

  return (
    <div className="input-group" onClick={handleFocus}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        ref={inputRef}
        id={htmlFor}
        type={type}
        onChange={handleChange}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGroup;
