import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-padel-darkBlue mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link 
          to="/" 
          className="inline-block bg-padel-blue hover:bg-padel-darkBlue text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
