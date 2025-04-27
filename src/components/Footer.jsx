import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 py-8 border-t border-white/10 text-center text-gray-400 text-sm">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/justindnguyen"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/justin-nguyen-35604b1b1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:justindnguyen03@gmail.com"
          className="hover:text-white transition"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaFileAlt className="w-6 h-6" />
        </a>
      </div>
      <p>© {currentYear} Justin Nguyen. All rights reserved.</p>
    </footer>
  );
};
