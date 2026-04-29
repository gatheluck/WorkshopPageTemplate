import { Link } from "react-router";
import { Menu } from "lucide-react";

import whiteLimitLabLogoWide from "../../public/limitlab-logo-white-wide.png";
import blackLimitLabLogoWide from "../../public/limitlab-logo-black-wide.png";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Program", path: "/#program" },
  { name: "Speakers", path: "/#speakers" },
  { name: "Organizers", path: "/#organizers" },
  { name: "Contact", path: "/#contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-header-background/70 backdrop-blur-md flex justify-center">
      <div className="container flex h-16 items-center justify-between px-6 xl:w-6xl">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            {/* <span className="font-bold text-xl">VGI 2026</span> */}
            <img
              src={blackLimitLabLogoWide}
              alt="LIMIT Workshop logo"
              className="object-contain h-16 w-auto dark:hidden"
              loading="lazy"
            />
            <img
              src={whiteLimitLabLogoWide}
              alt="LIMIT Workshop logo"
              className="object-contain h-16 w-auto hidden dark:block"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <Link to={item.path}>
                      <NavigationMenuLink className="bg-transparent hover:bg-header-accent dark:hover:bg-header-accent/50">
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-header-background/80 backdrop-blur-md"
            >
              <div className="flex flex-col gap-4 py-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.path}>
                    <Link
                      to={item.path}
                      className="block px-2 py-1 text-lg font-medium hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
