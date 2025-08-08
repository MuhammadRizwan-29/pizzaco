import { Link } from "react-router";

function CartOverview() {
  return (
    <div className="bg-stone-800 px-4 sm:px-6 py-4 uppercase text-stone-200 text-sm md:text-base flex justify-between items-center">
      <p className="font-semibold text-stone-300 space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
