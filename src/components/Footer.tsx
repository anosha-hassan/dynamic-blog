import { FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h1 className="text-3xl font-bold">Anosha Hassan AI-Tech Blog</h1>
            <p className="text-sm text-teal-300 mt-2">
            Advancing your AI technology experience with every insight shared.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            
            <a
              href="https://github.com/anosha-hassan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:anosha.hasan1999@gmail.com"
              className="text-blue-500 hover:text-yellow-400 transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <div className="text-teal-400">
            <p className="text-sm">
              © {new Date().getFullYear()} ❣Created by Anosha Hassan AI-Tech Blog❣. <br />
              
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-cyan-400 pt-4 text-center">
          <p className="text-sm text-red-200">
       
          </p>
        </div>
      </div>
    </footer>
  );
}