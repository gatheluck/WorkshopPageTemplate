import { Link } from "react-router";
// import { X } from "lucide-react";
// import { SiGithub, SiSlack, SiYoutube } from "react-icons/si";

// import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t bg-footer-background/70 py-6 md:py-10 flex flex-col items-center">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6 xl:w-6xl">
        {/* Logo and Workshop Name */}
        {/* <div className="flex flex-col gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">LIMIT Workshop</span>
          </Link>
          <p className="text-sm text-muted-foreground">ICCV 2025</p>
        </div> */}

        {/* Past BigMAC Workshop */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Past BigMAC Workshops</h3>
          <Link
            to="https://bigmac-vision.github.io/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ICCV 2023 BigMAC
          </Link>
        </div>

        {/* Related Workshop */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Related Workshops</h3>
          <Link
            to="https://cvpr2026-vgi-workshop.limitlab.xyz/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            CVPR 2026 VGI
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Links</h3>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="/#program"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Program
          </Link>
          <Link
            to="/#speakers"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Speakers
          </Link>
          <Link
            to="/#organizers"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Organizers
          </Link>
          <Link
            to="/#contact"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        {/* Social Links
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Connect</h3>
          <div className="flex gap-2">
            <Button
              className="hover:bg-footer-accent dark:hover:bg-footer-accent/50"
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="#" target="_blank" rel="noreferrer">
                <X className="h-4 w-4" />
                <span className="sr-only">X</span>
              </a>
            </Button>
            <Button
              className="hover:bg-footer-accent dark:hover:bg-footer-accent/50"
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="#" target="_blank" rel="noreferrer">
                <SiGithub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              className="hover:bg-footer-accent dark:hover:bg-footer-accent/50"
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="#" target="_blank" rel="noreferrer">
                <SiYoutube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </a>
            </Button>
            <Button
              className="hover:bg-footer-accent dark:hover:bg-footer-accent/50"
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="#" target="_blank" rel="noreferrer">
                <SiSlack className="h-4 w-4" />
                <span className="sr-only">Slack</span>
              </a>
            </Button>
          </div>
        </div> */}
      </div>

      {/* Credits */}
      <div className="container mt-8 border-t pt-4 px-6 xl:w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">BigMAC Workshop</span>
            {/* <img
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
            /> */}
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} BigMAC Workshop. All rights
            reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            Website built by cvpaper.challenge Dev Team
          </p>
        </div>
      </div>
    </footer>
  );
}
