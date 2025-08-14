import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-12 pb-20 px-4">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl" />
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            React Zustand Query
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Server state management made simple with Zustand
          </p>

          <div className="prose prose-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            <p className="mb-4">
              Zustand Query is a lightweight and powerful data-fetching solution
              that combines the simplicity of Zustand with robust server-state
              management capabilities.
            </p>
            <p className="mb-8">
              Explore our demos to see how easy it is to handle server state,
              mutations, and infinite queries in your React applications.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <Link
              to="/query"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              View Demos
            </Link>
            <Link
              to="/query"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
            ></Link>
            <Link
              to="/docs"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              Read Docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
