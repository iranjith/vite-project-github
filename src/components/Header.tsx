const Header = () => {
  console.log(import.meta.env); // fetch environment variables
  return <div>{import.meta.env.VITE_API_URL}</div>;
};

export default Header;
