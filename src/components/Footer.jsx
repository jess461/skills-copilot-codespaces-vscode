export default function Footer() {
  return (
    <footer className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              className="h-8 w-auto"
              src="https://i.imgur.com/YxXxbOl.png"
              alt="NOVAWEAR"
            />
            <p className="text-gray-500 text-sm">© 2024 NOVAWEAR. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="mailto:hello@novawear.global" className="text-gray-400 hover:text-gray-500">
              Contact
            </a>
            <a href="https://instagram.com/novawear.global" className="text-gray-400 hover:text-gray-500">
              Instagram
            </a>
            <a href="https://tiktok.com/@novawear.global" className="text-gray-400 hover:text-gray-500">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}