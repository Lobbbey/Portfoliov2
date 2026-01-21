import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const navItems = [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (href == "#") {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
        else {
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth"});
        }
        setIsMobileMenuOpen(false);
    };

    return(
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : ""
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                

            </motion.nav>
        </>
    );
}