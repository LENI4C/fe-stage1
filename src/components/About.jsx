import React from "react";

const About = () => {
    return (
        <main
            className="max-w-4xl mx-auto px-2 sm:px-4"
            data-testid="test-about-page"
        >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
                    About Me
                </h1>

                {/* Bio Section */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                        Bio
                    </h2>
                    <div
                        className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 leading-relaxed"
                        data-testid="test-about-bio"
                    >
                        <p className="mb-2">
                            Hello! I'm Leni4c (pronounced Leniac), a passionate
                            Frontend Engineer with over 3 years of experience in
                            building modern, accessible, and responsive web
                            applications. My journey in technology started with
                            curiosity and has evolved into a deep love for
                            creating user-friendly interfaces that make a real
                            difference in people's lives.
                        </p>
                        <p>
                            I specialize in React, JavaScript and modern CSS
                            frameworks. I'm constantly learning and exploring
                            new technologies to stay at the forefront of web
                            development. My approach combines technical
                            excellence with a strong focus on user experience
                            and accessibility.
                        </p>
                    </div>
                </section>

                {/* Goals Section */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                        Goals in This Program
                    </h2>
                    <div
                        className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 leading-relaxed"
                        data-testid="test-about-goals"
                    >
                        <p>
                            My primary goal in this HNG internship program is to
                            have an amazing experience, learn new things, and
                            most importantly - have fun! I'm particularly
                            excited about:
                        </p>
                        <ul className="list-disc pl-4 sm:pl-6 mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                            <li>
                                Having fun while coding and building cool
                                projects
                            </li>
                            <li>
                                Meeting and networking with awesome developers
                            </li>
                            <li>
                                Experiencing the collaborative spirit of the
                                program
                            </li>
                            <li>
                                Learning through hands-on projects and
                                challenges
                            </li>
                            <li>
                                Growing my skills in a supportive environment
                            </li>
                            <li>
                                Making meaningful connections in the tech
                                community
                            </li>
                        </ul>
                        <p className="mt-3 sm:mt-4">
                            I believe that learning is most effective when
                            you're having fun and enjoying the process. I'm
                            excited to dive into this journey with enthusiasm
                            and see where it takes me!
                        </p>
                    </div>
                </section>

                {/* Areas of Low Confidence Section */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                        Areas of Low Confidence
                    </h2>
                    <div
                        className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 leading-relaxed"
                        data-testid="test-about-confidence"
                    >
                        <p>
                            While I'm confident in my core frontend skills,
                            there are areas where I'd like to grow:
                        </p>
                        <ul className="list-disc pl-4 sm:pl-6 mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                            <li>
                                <strong>Advanced State Management:</strong>{" "}
                                Redux Toolkit, Zustand, and complex patterns
                            </li>
                            <li>
                                <strong>Testing:</strong> Unit, integration, and
                                end-to-end testing strategies
                            </li>
                            <li>
                                <strong>Performance:</strong> Code splitting,
                                lazy loading, and optimization
                            </li>
                            <li>
                                <strong>Backend Integration:</strong>{" "}
                                Architecture and database design principles
                            </li>
                            <li>
                                <strong>DevOps:</strong> CI/CD pipelines,
                                containerization, and deployment
                            </li>
                        </ul>
                        <p className="mt-3 sm:mt-4">
                            I see these as exciting opportunities to learn and
                            grow!
                        </p>
                    </div>
                </section>

                {/* Note to Future Self Section */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                        Note to Future Self
                    </h2>
                    <div
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-500"
                        data-testid="test-about-future-note"
                    >
                        <blockquote className="text-base sm:text-lg text-gray-700 italic leading-relaxed space-y-4">
                            <p>"Dear Future Leni4c,</p>

                            <p>
                                Remember why you started this journey - your
                                passion for creating meaningful digital
                                experiences. As you grow and evolve, don't lose
                                sight of the fundamentals: write clean,
                                accessible code that serves real users.
                            </p>

                            <p>
                                Keep learning, stay curious, and never stop
                                asking 'why'. The technology landscape will
                                change, but your ability to adapt and learn will
                                always be your greatest asset.
                            </p>

                            <p>
                                Remember to give back to the community that
                                helped you grow. Share your knowledge, mentor
                                others, and contribute to open-source projects.
                            </p>

                            <p>
                                Most importantly, maintain the balance between
                                technical excellence and human connection.
                                Technology is a tool to solve problems and
                                improve lives - never lose sight of the human
                                element.
                            </p>

                            <p>
                                Keep building, keep learning, and keep making a
                                difference.
                            </p>

                            <p>
                                With love and determination,
                                <br />
                                Present Leni4c"
                            </p>
                        </blockquote>
                    </div>
                </section>

                {/* Extra Thoughts Section */}
                <section>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                        Extra Thoughts
                    </h2>
                    <div
                        className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 leading-relaxed"
                        data-testid="test-about-extra"
                    >
                        <div className="space-y-4">
                            <p>
                                I'm grateful for the diverse projects and
                                talented people I've worked with. Each
                                experience has helped me grow as a developer.
                            </p>

                            <p>
                                I'm passionate about accessibility - the web
                                should be inclusive for everyone. This drives me
                                to always consider accessibility in my work.
                            </p>

                            <p>
                                I'm excited about technologies like WebAssembly,
                                PWAs, and advanced CSS features. There's so much
                                potential for better user experiences.
                            </p>

                            <p>
                                I love exploring the intersection of frontend
                                development with design, user research, and
                                product management. Understanding these areas
                                helps me build better products.
                            </p>

                            <p className="text-center">
                                <em className="text-gray-500">
                                    "Find what you love and let it kill you." - Charles Bukowski
                                </em>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
