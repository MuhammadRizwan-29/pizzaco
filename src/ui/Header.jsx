import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="bg-yellow-400 uppercase px-4 sm:px-6 py-3 border-b border-stone-200 flex justify-between items-center text-stone-800 font-roboto-mono">
      <Link to="/" className="tracking-widest">
        Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
