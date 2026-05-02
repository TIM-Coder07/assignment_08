import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#edd0b9] px-4 py-10 flex items-center justify-center">

      <div className="max-w-5xl w-full bg-[#63483a] text-[#edd0b9] rounded-2xl shadow-lg p-8 md:p-12">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-center text-[#edd0b9]/80 mb-8 leading-relaxed">
          We are a leading tile and flooring provider dedicated to delivering
          high-quality materials for homes and commercial spaces. Our goal is
          to combine durability, elegance, and modern design in every product.
        </p>

        {/* Extra Info Section */}
        <div className="mb-10 text-sm text-[#edd0b9]/80 space-y-4 leading-relaxed">
          <p>
            Founded with a passion for interior design and construction excellence,
            Tile Gallery has grown into a trusted name in the industry. We believe
            that every space deserves a unique identity, and our products are crafted
            to bring that vision to life.
          </p>

          <p>
            From modern apartments to luxury commercial projects, we supply a wide
            range of tiles, flooring solutions, and decorative materials that meet
            international quality standards.
          </p>

          <p>
            Our team works closely with architects, builders, and homeowners to
            ensure the perfect balance between aesthetics and durability.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Mission */}
          <div className="bg-[#edd0b9] text-[#63483a] p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-2">Our Mission</h2>
            <p className="text-sm">
              To provide premium quality tiles that enhance the beauty and
              durability of every space while ensuring customer satisfaction.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#edd0b9] text-[#63483a] p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-2">Our Vision</h2>
            <p className="text-sm">
              To become a globally trusted brand in interior and exterior
              design solutions with innovative and sustainable products.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-10">

          <div className="bg-[#edd0b9] text-[#63483a] p-4 rounded-xl">
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-sm">Years Experience</p>
          </div>

          <div className="bg-[#edd0b9] text-[#63483a] p-4 rounded-xl">
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-sm">Projects</p>
          </div>

          <div className="bg-[#edd0b9] text-[#63483a] p-4 rounded-xl">
            <h3 className="text-2xl font-bold">1000+</h3>
            <p className="text-sm">Happy Clients</p>
          </div>

          <div className="bg-[#edd0b9] text-[#63483a] p-4 rounded-xl">
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-sm">Team Members</p>
          </div>

        </div>

        {/* Footer Text */}
        <div className="text-center text-sm text-[#edd0b9]/70">
          Building better spaces with style, trust, and quality ✨
        </div>

      </div>
    </div>
  );
};

export default AboutPage;