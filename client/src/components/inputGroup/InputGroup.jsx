import "./InputGroup.scss"

const InputGroup = ({ type, htmlFor, label, placeholder }) => {
  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={htmlFor} placeholder={placeholder} />
    </div>
  )
}

export default InputGroup
