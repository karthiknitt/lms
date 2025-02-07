import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
function Header() {
  return (
    <p className="text-blue-700">
      Header <Button>Click Me</Button>
      <DarkModeToggle />
    </p>
  );
}

export default Header;
