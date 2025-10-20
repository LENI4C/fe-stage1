import React from "react";

const AboutMe = () => {
    return (
        <main className="max-w-4xl mx-auto" data-testid="test-about-page">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                    About Me
                </h1>

                {/* Bio Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Bio
                    </h2>
                    <div
                        className="prose prose-lg text-gray-600 leading-relaxed"
                        data-testid="test-about-bio"
                    >
                        <p>
                            Hello! I'm Leni4c, a passionate Frontend Engineer
                            with over 3 years of experience in building modern,
                            accessible, and responsive web applications. My
                            journey in technology started with curiosity and has
                            evolved into a deep love for creating user-friendly
                            interfaces that make a real difference in people's
                            lives.
                        </p>
                        <p>
                            I specialize in React, JavaScript, TypeScript, and
                            modern CSS frameworks. I'm constantly learning and
                            exploring new technologies to stay at the forefront
                            of web development. My approach combines technical
                            excellence with a strong focus on user experience
                            and accessibility.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new
                            technologies, contributing to open-source projects,
                            or sharing knowledge with the developer community. I
                            believe in the power of technology to solve
                            real-world problems and make the web a better place
                            for everyone.
                        </p>
                    </div>
                </section>

                {/* Goals Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Goals in This Program
                    </h2>
                    <div
                        className="prose prose-lg text-gray-600 leading-relaxed"
                        data-testid="test-about-goals"
                    >
                        <p>
                            My primary goal in this HNG internship program is to
                            enhance my skills and knowledge in modern frontend
                            development practices. I'm particularly excited
                            about:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>
                                Mastering advanced React patterns and best
                                practices
                            </li>
                            <li>
                                Improving my understanding of performance
                                optimization techniques
                            </li>
                            <li>
                                Learning more about accessibility standards and
                                implementation
                            </li>
                            <li>
                                Collaborating with other talented developers and
                                learning from their experiences
                            </li>
                            <li>
                                Building scalable, maintainable applications
                                that follow industry standards
                            </li>
                            <li>
                                Contributing to meaningful projects that have
                                real-world impact
                            </li>
                        </ul>
                        <p className="mt-4">
                            I'm also looking forward to networking with industry
                            professionals and potentially contributing to
                            open-source projects that align with my interests
                            and values.
                        </p>
                    </div>
                </section>

                {/* Areas of Low Confidence Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Areas of Low Confidence
                    </h2>
                    <div
                        className="prose prose-lg text-gray-600 leading-relaxed"
                        data-testid="test-about-confidence"
                    >
                        <p>
                            While I'm confident in my core frontend skills,
                            there are several areas where I'd like to improve
                            and gain more confidence:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>
                                <strong>Advanced State Management:</strong>{" "}
                                While I'm comfortable with React's built-in
                                state management, I'd like to deepen my
                                understanding of complex state management
                                patterns and libraries like Redux Toolkit and
                                Zustand.
                            </li>
                            <li>
                                <strong>Testing Strategies:</strong> I have
                                basic testing knowledge but want to become more
                                proficient in comprehensive testing strategies,
                                including unit, integration, and end-to-end
                                testing.
                            </li>
                            <li>
                                <strong>Performance Optimization:</strong> I
                                understand the basics but want to master
                                advanced techniques like code splitting, lazy
                                loading, and performance monitoring.
                            </li>
                            <li>
                                <strong>Backend Integration:</strong> While I'm
                                comfortable with API consumption, I'd like to
                                better understand backend architecture and
                                database design principles.
                            </li>
                            <li>
                                <strong>DevOps and Deployment:</strong> I want
                                to improve my knowledge of CI/CD pipelines,
                                containerization, and cloud deployment
                                strategies.
                            </li>
                        </ul>
                        <p className="mt-4">
                            I see these areas not as weaknesses, but as
                            opportunities for growth and learning. I'm committed
                            to addressing these gaps through hands-on practice
                            and continuous learning.
                        </p>
                    </div>
                </section>

                {/* Note to Future Self Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Note to Future Self
                    </h2>
                    <div
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-500"
                        data-testid="test-about-future-note"
                    >
                        <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                            "Dear Future Leni4c,
                            <br />
                            <br />
                            Remember why you started this journey - your passion
                            for creating meaningful digital experiences. As you
                            grow and evolve, don't lose sight of the
                            fundamentals: write clean, accessible code that
                            serves real users.
                            <br />
                            <br />
                            Keep learning, stay curious, and never stop asking
                            'why'. The technology landscape will change, but
                            your ability to adapt and learn will always be your
                            greatest asset.
                            <br />
                            <br />
                            Remember to give back to the community that helped
                            you grow. Share your knowledge, mentor others, and
                            contribute to open-source projects.
                            <br />
                            <br />
                            Most importantly, maintain the balance between
                            technical excellence and human connection.
                            Technology is a tool to solve problems and improve
                            lives - never lose sight of the human element.
                            <br />
                            <br />
                            Keep building, keep learning, and keep making a
                            difference.
                            <br />
                            <br />
                            With love and determination,
                            <br />
                            Present Leni4c"
                        </blockquote>
                    </div>
                </section>

                {/* Extra Thoughts Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Extra Thoughts
                    </h2>
                    <div
                        className="prose prose-lg text-gray-600 leading-relaxed"
                        data-testid="test-about-extra"
                    >
                        <p>
                            As I reflect on my journey so far, I'm grateful for
                            the opportunities I've had to work on diverse
                            projects and collaborate with talented individuals.
                            Each project has taught me something new and helped
                            me grow as a developer.
                        </p>
                        <p>
                            I'm particularly passionate about accessibility in
                            web development. I believe that the web should be
                            inclusive and accessible to everyone, regardless of
                            their abilities or circumstances. This commitment
                            drives me to always consider accessibility in my
                            development process.
                        </p>
                        <p>
                            Looking ahead, I'm excited about the future of web
                            development. With emerging technologies like
                            WebAssembly, Progressive Web Apps, and advanced CSS
                            features, there's so much potential to create even
                            more powerful and engaging user experiences.
                        </p>
                        <p>
                            I'm also interested in exploring the intersection of
                            frontend development with other fields like design,
                            user research, and product management. Understanding
                            these areas helps me build better products and
                            communicate more effectively with cross-functional
                            teams.
                        </p>
                        <p className="mt-6 text-center">
                            <em className="text-gray-500">
                                "The best way to predict the future is to create
                                it." - Peter Drucker
                            </em>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AboutMe;
