
const ProductCard = ({ name, id, image, price, discountPercent, availableQuantity }) =>{
    const calculateDiscountPrice = (price, discountPercent) => {
        return (price * (100 - discountPercent)) / 100;
    }
  return (
    <div className="border rounded-lg p-4 shadow-md min-w-[200px] flex flex-col justify-between min-h-[300px]">
                  <div>
                    <img src={image} alt={name} className="w-full h-32 object-cover rounded-md md:object-contain"  />
                    <h4 className="text-sm font-bold mt-2 truncate">{name}</h4>
                    <p className="text-orange-400 font-light text-sm">{`Còn ${availableQuantity} sản phẩm`}</p>
                    
                    {
                      !discountPercent && (
                        <p className="text-red-500 font-bold">
                          {price.toLocaleString()}đ
                        </p>
                      )
                    }
                    
                    {discountPercent && (  
                      <div>
                        <p className="text-red-500 font-bold">
                          {calculateDiscountPrice(price, discountPercent).toLocaleString()}đ
                        </p>
                        <span className='text-gray-400 line-through'>{price.toLocaleString()}đ</span>
                        <span className="text-gray-500">{` -${discountPercent}%`}</span>
                      </div>  
                    )}
                  </div>
                  <button className="mt-2 w-full bg-red-500 text-white py-1 rounded-md">Thêm vào giỏ</button>
                </div>
  );
}

export default ProductCard;
