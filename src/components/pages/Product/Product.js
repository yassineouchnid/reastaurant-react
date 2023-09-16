import './Product.css'
import Tagin from '../../../assets/imags/Tagine1.jpg'
const Product = () => {
  return (
    <div className='productpag container'>
      <div className="product_content_top">
            <div className="img-product">
                <div className="img_order">
                    <img src={Tagin} alt="" />
                    <span className='price'>19.99<small>$</small></span>
                    <a className="order" href="#">
                        <button type="submit">Order Now</button>
                    </a>
                </div>
            </div>
            <div className="product_detail">
                <h2 className="title">Tagine Marocain Avec Poulet, Taille Grand</h2>
            </div>
        </div>
    </div>
  )
}

export default Product