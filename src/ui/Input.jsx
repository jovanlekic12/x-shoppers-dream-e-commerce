function Input(props) {
  const { type, value, className, placeholder, onChange } = props;
  return (
    <input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
