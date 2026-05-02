import Link from "next/link";

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    description,
    image,
    category,
    price,
    currency,
    dimensions,
    material,
    inStock,
  } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-5 space-y-2">
        {/* Title + Category */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-[#63483a]">{title}</h2>

          <span className="text-xs bg-[#edd0b9] text-[#63483a] px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">{description}</p>

        {/* Details */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>📏 {dimensions}</p>
          <p>🧱 {material}</p>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center pt-2">
          {/* Price */}
          <h3 className="text-xl font-bold text-[#63483a]">
            {currency} {price}
          </h3>

          {/* Stock */}
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              inStock
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
          <Link href={`/tilesdetails/${id}`}>
            <button className="text-[#63483a] bg-[#edd0b9] py-2.5 px-1.5 rounded-2xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
