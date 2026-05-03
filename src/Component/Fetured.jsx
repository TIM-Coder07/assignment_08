import Image from "next/image";
import "animate.css";

const Fetured = async () => {
  const res = await fetch(
    "https://assignment-08-fake-server.onrender.com/products",
  );

  const data = await res.json();
  const featuredData = data.slice(0, 4);

  return (
    <div className="bg-amber-400 p-6 md:p-20 ">
      <h2 className="text-2xl font-bold mb-6">Featured Tiles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate__animated animate__backInLeft">
        {featuredData.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow text-black">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="font-semibold">{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetured;
