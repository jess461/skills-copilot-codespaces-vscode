import { Link } from 'react-router-dom';
import Cart from './Cart';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-12 w-auto"
                src="https://i.imgur.com/YxXxbOl.png"
                alt="NOVAWEAR"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/products"
                className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Products
              </Link>
              <Link
                to="/auth"
                className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Sign In
              </Link>
            </div>
            <Cart />
          </div>
        </div>
      </div>
    </nav>
  );
}