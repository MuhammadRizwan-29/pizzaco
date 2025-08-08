import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiResturants";
import MenuItem from "./MenuItem";

export async function Loader() {
  const menu = await getMenu();
  return menu;
}
export default function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
