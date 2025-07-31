"use client";

import { NavMenu } from "@/components/magicui/nav-menu";
import AuthAvatar from "@/components/shared/AuthAvatar";
import { siteConfig } from "@/config/config";
import Logo from "@/layouts/user/components/Header/components/Logo";
import { cn } from "@/utils/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const INITIAL_WIDTH = "70rem";
const MAX_WIDTH = "800px";

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 200,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1 },
  },
};

const drawerMenuContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on homepage
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const handleScroll = () => {
      // Only track active section if we're on homepage
      if (!isHomePage) return;

      const sections = siteConfig.nav.links.map((item) => item.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10);
    });
    return unsubscribe;
  }, [scrollY]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const handleOverlayClick = () => setIsDrawerOpen(false);

  // Handle navigation to sections
  const handleSectionNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = href.substring(1);

    if (isHomePage) {
      // If on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on other page, navigate to homepage with section info
      navigate("/home", {
        replace: false,
        state: { scrollToSection: sectionId },
      });
    }

    setIsDrawerOpen(false);
  };

  return (
    <header className={cn("sticky z-50 mx-4 flex justify-center transition-all duration-300 md:mx-0", hasScrolled ? "top-6" : "top-0 mx-0")}>
      <motion.div
        initial={{ width: INITIAL_WIDTH }}
        animate={{ width: hasScrolled ? MAX_WIDTH : INITIAL_WIDTH }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-2xl transition-all duration-300 xl:px-0",
            hasScrolled ? "border-border bg-background/75 border px-2 backdrop-blur-lg" : "px-7 shadow-none",
          )}
        >
          <div className="flex h-[56px] items-center justify-between p-4">
            <Link to="/" className="flex items-center gap-3">
              <Logo />
            </Link>

            <NavMenu />

            <div className="flex shrink-0 flex-row items-center gap-1 md:gap-3">
              <div className="flex items-center space-x-6">
                <AuthAvatar />
              </div>
              <button
                className="border-border flex size-8 cursor-pointer items-center justify-center rounded-md border md:hidden"
                onClick={toggleDrawer}
              >
                {isDrawerOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              onClick={handleOverlayClick}
            />

            <motion.div
              className="bg-background border-border fixed inset-x-0 bottom-3 mx-auto w-[95%] rounded-xl border p-4 shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              {/* Mobile menu content */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-3">
                    <Logo />
                  </Link>
                  <button onClick={toggleDrawer} className="border-border cursor-pointer rounded-md border p-1">
                    <X className="size-5" />
                  </button>
                </div>

                <motion.ul className="border-border mb-4 flex flex-col rounded-md border text-sm" variants={drawerMenuContainerVariants}>
                  <AnimatePresence>
                    {siteConfig.nav.links.map((item) => (
                      <motion.li key={item.id} className="border-border border-b p-2.5 last:border-b-0" variants={drawerMenuVariants}>
                        <Link
                          to={item.href}
                          onClick={(e) => handleSectionNavigation(item.href, e)}
                          className={`hover:text-primary/80 underline-offset-4 transition-colors ${
                            isHomePage && activeSection === item.href.substring(1) ? "text-primary font-medium" : "text-primary/60"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>

                <div className="flex flex-col gap-2">
                  <AuthAvatar />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
