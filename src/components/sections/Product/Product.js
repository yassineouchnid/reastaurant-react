import React, { useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { infoProduct, beakfastProducts, lunchProducts, dinnerProducts } from './infoProducts'
import "./Product.css"

function Product() {
  const [infoProducts, setInfoProducts] = useState(infoProduct);
  const Active = (index) => {
    const updatedInfoProducts = [...infoProducts];
    for(let i=0; i< updatedInfoProducts.length; i++) {
      updatedInfoProducts[i].active = false;
    }
    updatedInfoProducts[index].active = !updatedInfoProducts[index].active;
    setInfoProducts(updatedInfoProducts);
  }
  return (
    <div id="products" className="container">
        <div className="bld">
            {infoProducts.map((service, index) => (
              <span 
                key={index} 
                className={service.active? 'active' : 'inactive'} 
                onClick={() => Active(index)}>
                  {service.name}
              </span>
            ))}
        </div>
        <div className="product container">
          <div className={infoProduct[0].active? 'foodProducts showProducts' : 'foodProducts noShowProducts'}>
            {beakfastProducts.map((product, index)=>(
              <div key={index} className="Breakfast">
                <div className="foodImg">
                  <img src={product.img_product} alt="Breakfast" />
                </div>
                <div className="title_description">
                  <h1>{product.title}</h1>
                  <p><span className="ingBold">Ingrédients · </span>{product.description}</p>
                </div>
                <div className="price_rate">
                  <p>{product.price}<span>$</span></p>
                  <span>{product.rating} <RiStarFill /></span>
                </div>
              </div>
            ))}
          </div>
          <div className={infoProduct[1].active? 'foodProducts showProducts' : 'foodProducts noShowProducts'}>
            {lunchProducts.map((product, index)=>(
              <a href={product.link} key={index} target="_blanck"><div className="Breakfast">
                <div className="foodImg">
                  <img src={product.img_product} alt="Breakfast" />
                </div>
                <div className="title_description">
                  <h1>{product.title}</h1>
                  <p><span className="ingBold">Ingrédients · </span>{product.description}</p>
                </div>
                <div className="price_rate">
                  <p>{product.price}<span>$</span></p>
                  <span>{product.rating} <RiStarFill /></span>
                </div>
              </div></a>
            ))}
          </div>
          <div className={infoProduct[2].active? 'foodProducts showProducts' : 'foodProducts noShowProducts'}>
            {dinnerProducts.map((product, index)=>(
              <div key={index} className="Breakfast">
                <div className="foodImg">
                  <img src={product.img_product} alt="Breakfast" />
                </div>
                <div className="title_description">
                  <h1>{product.title}</h1>
                  <p><span className="ingBold">Ingrédients · </span>{product.description}</p>
                </div>
                <div className="price_rate">
                  <p>{product.price}<span>$</span></p>
                  <span>{product.rating} <RiStarFill /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default Product;
