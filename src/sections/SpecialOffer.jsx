import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import  Button  from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={273}
          height={287}
          className='object-contain w-full rounded-lg opacity-[80]'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-purple-950'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        Embark on a shopping journey that reshapes your experience 
        with unbeatable deals. From premier selections to incredible savings, 
        we provide unmatched value that distinguishes us.

        </p>
        <p className='mt-6 info-text'>
        Navigate a world of possibilities meticulously tailored to fulfill your unique desires, 
        exceeding even the loftiest expectations. 
        Your journey with us is nothing less than extraordinary.

        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Naga Apparel' iconURL={arrowRight} className="sm:mt-6 md:mt-4" />
          

          
          <Button
          
            label='100%Unique'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
            className="sm:mb-6 md:mb-6  "
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;