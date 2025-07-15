
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Glows */}
      <div className="absolute top-[-10rem] right-[-10rem] h-[20rem] w-[20rem] bg-purple-600/30 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-5rem] left-[-5rem] h-[15rem] w-[25rem] bg-pink-500/20 rounded-full blur-[80px]"></div>
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white font-sans p-4">
        <div className="w-full max-w-2xl mx-auto p-8 sm:p-10 text-center bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl">
          <div className="mb-6">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
             </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Ready to Deploy
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md mx-auto">
            This simple, static React site is beautifully styled with Tailwind CSS and perfectly configured for a seamless deployment on Netlify.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.netlify.com/start/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Deploy to Netlify
            </a>
          </div>
        </div>
        <footer className="mt-8 text-center text-gray-500 text-sm">
            <p>Built with React &amp; Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
