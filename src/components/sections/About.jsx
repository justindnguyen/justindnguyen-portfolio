import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

export const About = () => {
    const frontendSkills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Swift",
        "iOS (UIKit, CoreData)",
        "Git",
        "GitHub",
        "Vite"
    ];

    const backendSkills = [
        "Node.js/Npm",
        "Express.js",
        "PostgreSQL",
        "SQL",
        "MySQL",
        "Python",
        "Java",
        "C++",
        "EJS"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I'm Justin Nguyen, a recent computer science graduate from Cal State Fullerton with a strong interest in the IT industry. I'm passionate about solving technical problems, supporting users, and building tools that improve efficiency and user experience. Right now, I'm actively working on web development projects while studying for CompTIA certifications to deepen my knowledge in areas like system support and networking. I'm eager to apply my skills in a professional environment and continue growing as an IT professional.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.S. in Computer Science</strong> - California State University, Fullerton (2021-2025)
                                </li>
                                <li>
                                    Minor in Mathematics
                                </li>
                                <li>
                                    GPA: 3.82 | Magna Cum Laude | Dean’s List (All Semesters)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Algorithm Engineering, Operating System Concepts, Software Engineering, Cybersecurity Foundations, Artificial Intelligence, Data Science, Mobile Development, Database Systems, Senior Capstone Project
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Team Member at Tastea (2023 – 2024)</h4>
                                    <p>
                                        Worked as a Team Member at Tastea, providing efficient service in a fast-paced environment. Responsibilities included operating POS systems, managing transactions, resolving customer concerns, and supporting team coordination to maintain smooth operations.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Front Desk Attendant at Your Cleaners (2021 – Present)</h4>
                                    <p>
                                        Served as a Front Desk Attendant at Your Cleaners, handling customer inquiries, managing orders, tracking inventory, and maintaining daily front store operations. Demonstrated reliability and professionalism in a small business setting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6 justify-center">
                        <a
                            href="https://github.com/justindnguyen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                        >
                            <FaGithub className="w-5 h-5" />
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/justin-nguyen-35604b1b1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                        >
                            <FaLinkedin className="w-5 h-5" />
                            LinkedIn
                        </a>

                        <a
                            href="mailto:justindnguyen03@gmail.com"
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                        >
                            <FaEnvelope className="w-5 h-5" />
                            Email
                        </a>

                        <a
                            href={`${import.meta.env.BASE_URL}resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                        >
                            <FaFileAlt className="w-5 h-5" />
                            Resume
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};