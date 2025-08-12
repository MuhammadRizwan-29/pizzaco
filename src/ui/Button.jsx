import { Link } from "react-router";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm cursor-pointer bg-yellow-400 hover:bg-yellow-300 text-stone-800 font-semibold uppercase tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2";

  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4",
    secondary:
      "inline-block text-sm cursor-pointer border-2 border-stone-300 hover:bg-stone-300 text-stone-400 hover:text-stone-800 font-semibold uppercase tracking-wide rounded-full transition-colors duration-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 py-3 px-4 sm:px-6 sm:py-3.5",
    small: base + " px-4 py-2.5 md:px-6 md:py-4 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
