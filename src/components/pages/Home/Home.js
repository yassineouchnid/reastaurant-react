import './Home.css'
import { Slider, Maincontent, SliderShow, Product, Quote, Contact } from '../../sections/index'

const home = (props) => {
  return (
    <>
        <Slider title={props.title} />
        <Maincontent />
        <SliderShow />
        <Product />
        <Quote quote='The aroma of freshly brewed coffee and the ambiance of a cozy café creates an experience that soothes the soul and inspires the mind.' />
        <Contact />
    </>
  )
}

export default home