import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { path: "/", label: "Profile", testId: "nav-profile" },
        { path: "/contact", label: "Contact", testId: "nav-contact" },
        { path: "/about", label: "About", testId: "nav-about" },
    ];

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-slate-900/20 backdrop-blur-lg border-b border-white/40 shadow-xl"
                    : "bg-slate-900/10 backdrop-blur-md border-b border-white/20"
            }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-2 sm:px-4">
                <ul className="flex justify-between sm:justify-center space-x-1 sm:space-x-4 md:space-x-8 py-2 sm:py-3 md:py-4">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                data-testid={item.testId}
                                className={`px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-md sm:rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                                    location.pathname === item.path
                                        ? isScrolled
                                            ? "bg-white/40 text-white font-semibold shadow-lg"
                                            : "bg-white/25 text-white font-semibold"
                                        : isScrolled
                                        ? "text-white hover:text-white hover:bg-white/20"
                                        : "text-white/95 hover:text-white hover:bg-white/15"
                                }`}
                                aria-current={
                                    location.pathname === item.path
                                        ? "page"
                                        : undefined
                                }
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
