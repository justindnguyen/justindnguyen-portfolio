import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

export const About = () => {
    const languagesTools = ["Python", "C++", "SQL", "Git/GitHub", "Linux", "Windows OS", "VS Code"];
    const frontendSkills = ["JavaScript", "HTML5", "CSS3", "React", "Tailwind CSS", "Vite"];
    const backendSkills = ["Node.js", "Express.js", "PostgreSQL", "EJS"];
    const supportSkills = [
        "Troubleshooting",
        "Customer Service",
        "POS Systems",
        "Team Collaboration",
        "Problem-Solving",
        "Inventory Management",
        "Fast-Paced Multitasking",
    ];
    const certifications = ["CompTIA A+", "CompTIA Network+", "CompTIA Security+"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Hi, I’m Justin Nguyen — a recent computer science graduate from Cal State Fullerton. I’ve always been curious about how things work, especially when it comes to technology. That curiosity led me to study computer science, where I developed a strong interest in solving problems and building things that are useful.
                        </p>
                        <p className="text-gray-300 mb-6">
                            I enjoy learning new tools and technologies that help me improve and adapt. Right now, I’m working on personal projects to grow my technical skills and studying for CompTIA certifications to strengthen my knowledge of system support and networking. Outside of tech, I enjoy playing video games, reading manga, and spending time with my family.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Languages & Tools */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Languages & Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languagesTools.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Support Skills */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Support Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {supportSkills.map((tech, key) => (
                                        <span key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Frontend */}
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
                            {/* Backend */}
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

                    <div className="mt-8 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all flex flex-col items-center">
                        <h3 className="text-xl font-bold mb-4 text-center">Certifications (In Progress)</h3>
                        <div className="flex flex-wrap gap-2 justify-center text-center">
                            {certifications.map((cert, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                {cert}
                            </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                            <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                                <li>
                                    <span className="text-white font-semibold">B.S. in Computer Science</span> – California State University, Fullerton (2021–2025)
                                </li>
                                <li>
                                    Minor in Mathematics
                                </li>
                                <li>
                                    GPA: 3.82 | Magna Cum Laude | Dean’s List (All Semesters)
                                </li>
                                <li>
                                    <span className="text-white font-medium">Relevant Coursework:</span> Data Structures, Algorithm Engineering, Operating System Concepts, Software Engineering, Cybersecurity Foundations, Artificial Intelligence, Data Science, Mobile Development, Database Systems, Senior Capstone Project
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Team Member at Tastea (Jun. 2023 – Sep. 2024)</h4>
                                    <p>
                                        Worked as a Team Member at Tastea, providing efficient service in a fast-paced environment. Responsibilities included operating POS systems, managing transactions, resolving customer concerns, and supporting team coordination to maintain smooth operations.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-white font-semibold mb-1">Front Desk Attendant at Your Cleaners (Aug. 2021 – Present)</h4>
                                    <p>
                                        Served as a Front Desk Attendant at Your Cleaners, handling customer inquiries, managing orders, tracking inventory, and maintaining daily front store operations. Demonstrated reliability and professionalism in a small business setting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-center">Research & Volunteer Experience</h3>
                        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                            <div>
                            <h4 className="text-white font-semibold mb-1">Data Science Research Intern – Cal State Fullerton</h4>
                            <p>
                                Participated in a research project focused on analyzing a lung cancer dataset using Python, Pandas, and Matplotlib. Built data visualizations and explored patterns in the dataset to gain insights. Strengthened my data analysis, problem-solving, and collaboration skills through this hands-on experience.
                            </p>
                            </div>
                            <div>
                            <h4 className="text-white font-semibold mb-1">Volunteer – Vietnamese Student Association (VSA)</h4>
                            <p>
                                Volunteered with VSA throughout high school and college, helping at cultural and community service events in my local area. Assisted with setup, outreach, and event support, while gaining experience in teamwork, responsibility, and community engagement.
                            </p>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};