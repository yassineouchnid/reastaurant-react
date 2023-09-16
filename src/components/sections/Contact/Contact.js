import './Contact.css'
import { RiPhoneFill, RiMailFill, RiMapPin2Fill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="Contact" className='contactInfs'>
      <div className='contact container'>
        <div className='infoRestaurant'>
          <p><RiPhoneFill /> +212-666 666666</p>
          <p><RiMailFill /> restaurant@yassine.ma</p>
          <p><RiMapPin2Fill />  Morocco, Agadir</p>
        </div>
        <div className='locationRestaurant'>
          <iframe title="map_restaurant" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6949755.431893671!2d-11.642370988646402!3d31.731318096972668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sMaroc!5e0!3m2!1sfr!2sma!4v1675094863390!5m2!1sfr!2sma" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact