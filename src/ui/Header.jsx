import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/">Pizza Co.</Link>
      <SearchOrder />
    </header>
  );
}
