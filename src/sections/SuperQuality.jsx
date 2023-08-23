import Button from "../components/Button";
import { shoe8 } from "../assets/images"
import { naga4 } from "../assets/images";


const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-fuchsia-900'> Super </span>
          <span className='text-fuchsia-900'>Quality </span> Gear
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11 sm:mb-6 md:wb-4 '>
          <Button label='100% Unique' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={naga4}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain rounded-lg'
        />
      </div>
    </section>
  )
}

export default SuperQuality