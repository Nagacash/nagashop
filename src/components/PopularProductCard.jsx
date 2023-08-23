import { star } from '../assets/icons/'


const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="text-black">
        <a href="https://www.amazon.de/s?rh=n%3A77028031%2Cp_4%3ANaga+Apparel&ref=bl_sl_s_ap_web_77028031"
             class="link-with-preview">
        
       
        <img 
        src={imgURL} alt={name}
        className="w-[280px] h-[280px]" 
        />
        <div className="mt-8 flex 
        justify-start gap-2.5" >
            <img 
        src={star} alt="rating"
        className="w-[24px] h-[24px]" 
        />
        <p className="font-montserrat text-xl leading-normal
        text-violet-900">(4.5)</p>
        </div>
        <h3 className="leading-normal mt-3 
        text-2xl font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold 
        font-montserrat text-coral-red 
        text-21x leading-normal">{price}</p>
        </a>
    </div>
  )
}

export default PopularProductCard