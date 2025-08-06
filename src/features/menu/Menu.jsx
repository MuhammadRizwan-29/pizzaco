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
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
