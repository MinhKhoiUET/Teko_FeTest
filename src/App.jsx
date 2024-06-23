import productData from './Data/data.json';
import ProductCard from './components/ProductCard';

const App = () => {
  const { name, image, price, discountPercent, seller, relatedProducts } = productData;

  const discountedPrice = (price * (100 - discountPercent)) / 100;


  return (
    <div className=" max-w-4xl max-h-screen m-auto">
      <div className="p-4 ">
        <img src={image} alt={name} className="w-full h-64 object-cover rounded-md md:object-contain" />
        <div className="mt-4">
          <div>
            <p className="text-xl text-red-500 font-bold">{discountedPrice.toLocaleString()}đ</p>
            <div>
              <span className='text-gray-400 line-through'>{price.toLocaleString()}đ</span>
              <span className='text-red-500'>{` -${discountPercent}%`}</span>
            </div>
          </div>     
        </div>
        <h2 className="text-lg font-bold mt-2">{name}</h2>
        <p className="">By <a href="#"className='text-blue-500'>{seller}</a></p>
      </div>

      <div className=" p-4">
        <h3 className="text-lg font-bold">Sản phẩm liên quan</h3>
          <div className="flex overflow-x-scroll space-x-4 mt-4 overflow-y-scroll">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} name ={product.name} image={product.image} price = {product.price} discountPercent={product.discountPercent} availableQuantity={product.availableQuantity} />
              ))}
          </div>
      </div>
    </div>
  );
};

export default App;
