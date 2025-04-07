function Button(props) {
  return (
    <button
      {...props}
      className="bg-amber-300 text-amber-50 text-center m-2 p-5 rounded-md"
    >
      {props.children}
    </button>
  );
}

export default Button;
