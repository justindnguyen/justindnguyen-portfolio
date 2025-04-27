import { RevealOnScroll } from "../RevealOnScroll";


export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-center">
                        Projects
                    </h2>
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Note Keeper App</h3>
                            <p className="text-gray-400 mb-4">
                                A simple note-taking application built with React. Users can add new notes with a title and content and delete individual notes.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Vite", "JavaScript", "HTML", "CSS"].map((tech, key) => (
                                    <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/justindnguyen/note-keeper-app" target="_blank"
                                rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">QR Code Generator</h3>
                            <p className="text-gray-400 mb-4">
                                A simple web app that generates QR codes from text or links instantly. Users can download the QR code as an image.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                    <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/justindnguyen/qr-code-generator" target="_blank"
                                rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
                            <p className="text-gray-400 mb-4">
                                A responsive portfolio built with React and Tailwind CSS to showcase my background, skills, and projects.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Tailwind CSS", "Vite", "Javascript"].map((tech, key) => (
                                    <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/justindnguyen/justindnguyen-portfolio" target="_blank"
                                rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>
                        
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Flashcardio</h3>
                            <p className="text-gray-400 mb-4">
                                An iOS flashcard app for creating and studying custom flashcards with offline data storage using CoreData.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Swift", "UIKit", "CoreData"].map((tech, key) => (
                                    <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Tepah/Flashcardio" target="_blank"
                                rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Connect 4 AI Bot</h3>
                            <p className="text-gray-400 mb-4">
                                A terminal-based AI that plays Connect 4 using Minimax with alpha-beta pruning and custom evaluation functions.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "NumPy", "Math"].map((tech, key) => (
                                    <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/aseng2/Connect-4-Minimax" target="_blank"
                                rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};