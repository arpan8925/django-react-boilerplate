
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle, useLanguage } from "./language-toggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar({ isLanding = false }: { isLanding?: boolean }) {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
              {t("app.title")}
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {isLanding && (
            <Button asChild variant="default">
              <Link to="/dashboard">{t("app.get_started")}</Link>
            </Button>
          )}
          <ModeToggle />
          <LanguageToggle />
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile navigation */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-50 bg-background md:hidden transition-all duration-200 ease-in-out",
            mobileMenuOpen 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 -translate-x-full pointer-events-none"
          )}
        >
          <nav className="flex flex-col space-y-4 p-4">
            {isLanding && (
              <Button asChild variant="default" className="w-full">
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  {t("app.get_started")}
                </Link>
              </Button>
            )}
            <div className="flex justify-between">
              <ModeToggle />
              <LanguageToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
