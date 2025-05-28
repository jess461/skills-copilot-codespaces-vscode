import useCartStore from '../store/cartStore';

const products = [
  {
    id: 1,
    name: 'NOVA Essentials T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg',
    collection: 'NOVA Essentials'
  },
  {
    id: 2,
    name: 'NOVA Urban Hoodie',
    price: 59.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
    collection: 'NOVA Urban'
  },
  {
    id: 3,
    name: 'NOVA Luxe Blazer',
    price: 199.99,
    image: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg',
    collection: 'NOVA Luxe'
  },
  {
    id: 4,
    name: 'NOVA Futurewear Jacket',
    price: 149.99,
    image: 'https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg',
    collection: 'NOVA Futurewear'
  }
];

export default function Products() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Collections</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              <button
                onClick={() => addItem({ ...product, quantity: 1 })}
                className="mt-2 w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}