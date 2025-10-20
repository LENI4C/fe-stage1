import React, { useState, useEffect } from "react";

const ProfileCard = () => {
    const [currentTime, setCurrentTime] = useState(Date.now());

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(Date.now());
        };

        // Update time immediately
        updateTime();

        // Update time every second
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <article
            className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
            data-testid="test-profile-card"
        >
            <header className="flex flex-col md:flex-row items-center md:items-start p-4 sm:p-6 md:p-8 lg:p-10 gap-4 sm:gap-6">
                <figure className="flex flex-col items-center text-center md:flex-shrink-0 md:mr-8">
                    <img
                        src="/images/lenny.jpg"
                        alt="Profile picture of Leni4c"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
                        data-testid="test-user-avatar"
                    />
                    <figcaption className="mt-2 text-sm text-gray-600 italic">
                        Profile Picture
                    </figcaption>
                </figure>

                <div className="text-center md:text-left flex-1">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-tight"
                        data-testid="test-user-name"
                    >
                        Leni4c
                    </h2>
                    <p
                        className="text-lg text-gray-600 mb-4 leading-relaxed"
                        data-testid="test-user-bio"
                    >
                        Frontend Engineer (Web) with 3+ years of experience
                        building accessible and responsive web applications. I
                        love creating user-friendly interfaces and exploring
                        technologies.
                    </p>
                    <div
                        className="text-sm text-gray-500 font-mono bg-gray-50 px-3 py-2 rounded-md inline-block border border-gray-200"
                        data-testid="test-user-time"
                    >
                        Current time (since Jan 1 1970): {currentTime} ms
                    </div>
                </div>
            </header>

            <nav
                className="bg-gray-50 px-8 md:px-10 py-5 border-t border-gray-200"
                data-testid="test-user-social-links"
                aria-label="Social media links"
            >
                <ul className="flex justify-center md:justify-start flex-wrap gap-5">
                    <li>
                        <a
                            href="https://x.com/leni4c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-white hover:bg-indigo-600 font-medium px-4 py-2 rounded-lg transition-all duration-200 border-2 border-transparent hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            data-testid="test-user-social-twitter"
                            aria-label="Follow Leni4c on Twitter"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/leni4c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-white hover:bg-indigo-600 font-medium px-4 py-2 rounded-lg transition-all duration-200 border-2 border-transparent hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            data-testid="test-user-social-linkedin"
                            aria-label="Connect with Leni4c on LinkedIn"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/leni4c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-white hover:bg-indigo-600 font-medium px-4 py-2 rounded-lg transition-all duration-200 border-2 border-transparent hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            data-testid="test-user-social-github"
                            aria-label="View Leni4c's GitHub profile"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </nav>

            <section className="p-8 md:p-10 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Hobbies
                </h3>
                <ul
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
                    data-testid="test-user-hobbies"
                >
                    {[
                        "Coding",
                        "Learning",
                        "Gaming",
                        "Reading",
                        "Exploring",
                    ].map((hobby) => (
                        <li
                            key={hobby}
                            className="bg-gray-50 px-3 py-2 rounded-md text-sm text-gray-600 border-l-4 border-indigo-500"
                        >
                            {hobby}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="p-8 md:p-10 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Dislikes
                </h3>
                <ul
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
                    data-testid="test-user-dislikes"
                >
                    {["... Processing", "... Processing", "... Processing"].map(
                        (dislike, index) => (
                            <li
                                key={index}
                                className="bg-gray-50 px-3 py-2 rounded-md text-sm text-gray-600 border-l-4 border-red-500"
                            >
                                {dislike}
                            </li>
                        )
                    )}
                </ul>
            </section>
        </article>
    );
};

export default ProfileCard;
