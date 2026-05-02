import bannerBg from "@/assets/morcco.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="relative h-[70vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bannerBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center max-w-2xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide">
          Tile
        </h2>

        <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-200">
          Gallery
        </h3>

        <p className="text-gray-300 mb-6">
          The leading supplier of quality flooring, home and commercial fixtures
          in Barbados.
        </p>

        <Link className="cursor-pointer" href={'/products'}>
          <button className="cursor-pointer px-6 py-3 bg-white text-black rounded-2xl font-medium hover:bg-gray-200 transition">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
