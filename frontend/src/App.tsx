
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Simple components
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">Django + React + Tailwind</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/features" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/features" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="/about" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-800">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="mt-8 md:mt-0">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Django + React + Tailwind. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

// Pages
const Home = () => (
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Modern Web Development</span>
          <span className="block text-blue-600">Django + React + Tailwind</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          A clean, modern demonstration of using Tailwind CSS with React and Django.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a href="/features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
              Get Started
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Features = () => (
  <div className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to build modern web apps
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          This template includes all the tools you need to create beautiful, responsive web applications.
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Django Backend</h3>
              <div className="mt-2">
                <p className="text-base text-gray-500">
                  A powerful Python web framework that encourages rapid development and clean, pragmatic design.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">React Frontend</h3>
              <div className="mt-2">
                <p className="text-base text-gray-500">
                  A JavaScript library for building user interfaces with a component-based architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Tailwind CSS</h3>
              <div className="mt-2">
                <p className="text-base text-gray-500">
                  A utility-first CSS framework for rapidly building custom user interfaces without writing custom CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          About This Project
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          This is a demonstration of using Tailwind CSS with React and Django. The styling is done using Tailwind's utility classes.
        </p>
      </div>
    </div>
  </div>
);

const NotFound = () => (
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="mt-2 text-lg text-gray-600">Page not found</p>
      <div className="mt-6">
        <a href="/" className="text-blue-600 hover:text-blue-800">
          Go back home
        </a>
      </div>
    </div>
  </div>
);

// Main App
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
