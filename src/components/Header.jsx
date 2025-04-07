function Header(props) {
  return (
    <h1 className="text-3xl text-amber-100 text-center font-bold">
      {props.children}
    </h1>
  );
}

export default Header;
