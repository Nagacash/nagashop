import { products, products2 } from "../constants";
import  PopularProductCard  from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-fuchsia-900'> Popular Amazon</span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Indulge in the pinnacle of quality and style with our 
        highly sought-after selections. Uncover a realm of comfort, exquisite design, and unmatched value.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products2.map((products2) => (
          <PopularProductCard key={products2.name} {...products2} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;