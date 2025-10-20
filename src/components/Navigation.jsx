import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Profile", testId: "nav-profile" },
        { path: "/contact", label: "Contact Us", testId: "nav-contact" },
        { path: "/about", label: "About Me", testId: "nav-about" },
    ];

    return (
        <nav
            className="bg-white/10 backdrop-blur-md border-b border-white/20"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-4">
                <ul className="flex justify-center space-x-8 py-4">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                data-testid={item.testId}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    location.pathname === item.path
                                        ? "bg-white/20 text-white font-semibold"
                                        : "text-white/80 hover:text-white hover:bg-white/10"
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
