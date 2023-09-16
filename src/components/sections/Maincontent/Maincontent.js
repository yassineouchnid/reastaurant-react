import './Maincontent.css'
import img_1 from '../../../assets/imags/img_1.jpg'
import img_2 from '../../../assets/imags/img_2.jpg'

const Maincontent = () => {
  const features_top = [
    {
      quote: 'A cafe is a sanctuary to relax and escape',
      img: img_1,
      detail: "I had a great time at a cafe recently. Cozy atmosphere and friendly staff. They had a good variety of menu options, and the food and drinks were delicious. I highly recommend it.",
    },
    {
      quote: 'A cafe is a place where you pay to be reminded of the world outside',
      img: img_2,
      detail: "I recently visited a small independent cafe in the city center and was impressed by the unique atmosphere and delicious food. The staff were friendly and the latte was unique and delicious. The quiche was also homemade and delicious. I recommend it.",
    },
  ]
  const items = features_top.map((info, index) => {
    if (index % 2 === 0) {
       return <section key={index} className='features'>
        <div className='feature_quote'>
          <p>{info.quote}</p>
        </div>
        <div className='feature_img'>
          <img src={info.img} alt="" />
          <span></span>
        </div>
        <div className='feature_detail'>
          <h4>Great Experience</h4>
          <p>{info.detail}</p>
        </div>
      </section>
    } else {
      return  <section key={index} className='features'>
        <div className='feature_detail'>
          <h4>Great Experience1</h4>
          <p>{info.detail}</p>
        </div>
        <div className='feature_quote individual'>
          <p>{info.quote}</p>
        </div>
        <div className='feature_img'>
          <img src={info.img} alt="" />
          <span></span>
        </div>
      </section>
    }
  });

  
  return (
    <div className='features container'>
      {items}
    </div>
  )
}

export default Maincontent