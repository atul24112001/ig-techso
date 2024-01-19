import Logo from "../../../../assets/icons/logo";
import Button from "../../../helper/Button";
import Menus from "./Menus";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <Menus />
      <Button onClick={() => {}}>Try For Free</Button>
    </div>
  );
}
