import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Logo Image" />
      <h1>Investment Calculator</h1>
      <h2>
        Calculate yields, see profits and optimize your investment strategy.
      </h2>
    </header>
  );
};
