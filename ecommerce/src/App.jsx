import { Navigation } from "./Navigation";
import { useState } from "react";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); 
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [finalQuantity, setFinalQuantity] = useState(0);
  const price = 125.00;
  const slides = [
    {
      id: 0,
      src: "images/image-product-1.jpg",
    },
    {
        id: 1,
        src: "images/image-product-2.jpg",
    },
    {
        id: 2,
        src: "images/image-product-3.jpg",
    },
    {
        id: 3,
        src: "images/image-product-4.jpg",
    }
  ]
  const thumbnails = [
      {
          id: 0,
          src: "images/image-product-1-thumbnail.jpg",
      },
      {
          id: 1,
          src: "images/image-product-2-thumbnail.jpg",
      },
      {
          id: 2,
          src: "images/image-product-3-thumbnail.jpg",
      },
      {
          id: 3,
          src: "images/image-product-4-thumbnail.jpg",
      }
  ]
  function prevSlide(){
      if(slideIndex === 0){
          setSlideIndex(slides.length - 1)
          setActiveIndex(slides.length - 1)
      }else {
          setSlideIndex(slideIndex - 1)
          setActiveIndex(slideIndex-1)
      }
  }
  function nextSlide(){
      if(slideIndex === 3){
          setSlideIndex(0)
          setActiveIndex(0);
      }else {
          setSlideIndex(slideIndex + 1)
          setActiveIndex(slideIndex + 1)
      }
  }
  function addQuantity(){
      setQuantity(quantity + 1)
  }
  function substractQuantity(){
      if(quantity <= 0){
          setQuantity(quantity)
      } else {
          setQuantity(quantity - 1)
      }
  }
  function displaySlide(buttonEl){
      setSlideIndex(buttonEl.id);
      setActiveIndex(buttonEl.id);
  }
  function displayLightBox(){
      setIsLightBoxOpen(true);
  }
  function closeLightBox(){
      setIsLightBoxOpen(false)
  }
  function addToCart(){
      if(quantity === 0){
      alert("Increase the quantity of your product");
      setIsCartEmpty(true)
      } else {
      setIsCartEmpty(false)
      }
      getFinalQuantity()
  }
  function deleteFromCart() {
      setIsCartEmpty(true);
      setQuantity(0);
      getFinalQuantity();
  }
  function toggleCart(){
      setIsCartOpen(!isCartOpen);
  }
  function getFinalQuantity(){
    setFinalQuantity(quantity);
  }
  return (
    <div>
      <Navigation toggleCart={toggleCart} quantity={finalQuantity}/>
      <div className="container">
            <div className="cart-details" style={{display: isCartOpen ? "flex" : "none"}}>
                <div className="cart-header">
                    <p>Cart</p>
                </div>
                <div className="cart-info">
                    {
                        isCartEmpty ? <p>Your cart is empty. </p> : 
                                    <div className="product-list">
                                        <div className="product">
                                            <div className="image"><img src="images/image-product-1-thumbnail.jpg"/></div>
                                            <div className="cart-product-details">
                                                <p>Fall Limited Edition Sneakers</p>
                                                <p>${price} x {quantity} <b>${price * quantity}</b></p>
                                            </div>
                                            <div className="delete-btn">
                                                <button onClick={deleteFromCart}><img src="images/icon-delete.svg" /></button>
                                            </div>
                                        </div>
                                        <button>Checkout</button>
                                    </div>}
                </div>
            </div>
            <div className="product-img">
                <div className="image-slider">
                    <div className="slides">
                        <img className="slide" onClick={displayLightBox} src={slides.length > 0 ? slides[slideIndex].src : ""}/>
                    </div>
                    <button className="arrow" id="prev" onClick={prevSlide}>
                        <img src="images/icon-previous.svg" />
                    </button>
                    <button  className="arrow" id="next" onClick={nextSlide}>
                        <img src="images/icon-next.svg" />
                    </button>
                </div>
                <div className="thumbnails">
                    {thumbnails.map(thumbnail => 
                        <button className="thumbnail" key={thumbnail.id} style={{border: activeIndex === thumbnail.id ? "3px solid hsl(26, 100%, 55%)" : "none"}} id={thumbnail.id} onClick={() => displaySlide(thumbnail)}>
                            <img src={thumbnail.src} style={{opacity: activeIndex === thumbnail.id ? 0.5 : 1}}/>
                        </button>
                    )}
                </div>
            </div>
            <div className="lightbox-product-img" style={{display: isLightBoxOpen ? "flex" : "none"}}>
                <div className="lightbox-image-slider">
                    <div className="lightbox-close" onClick={closeLightBox}>&times;</div>
                    <div className="lightbox-slides">
                        <img className="lightbox-slide" src={slides.length > 0 ? slides[slideIndex].src : ""}/>
                    </div>
                    <button className="lightbox-prev" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button  className="lightbox-next"  onClick={nextSlide}>
                        &#10095;
                    </button>
                </div>
                <div className="lightbox-thumbnails">
                    {thumbnails.map(thumbnail => 
                        <button className="lightbox-thumbnail" key={thumbnail.id} style={{border: activeIndex === thumbnail.id ? "3px solid hsl(26, 100%, 55%)" : "none"}} id={thumbnail.id} onClick={() => displaySlide(thumbnail)}>
                            <img src={thumbnail.src} style={{opacity: activeIndex === thumbnail.id ? 0.5 : 1}}/>
                        </button>
                    )}
                </div>
            </div>
            <div className="info">
                <p className="company-name">SNEAKER COMPANY</p>
                <p className="product-name">Fall Limited Edition Sneakers</p>
                <p className="product-description">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div className="price-details">
                    <div>
                        <p className="product-price">$125.00</p>
                        <p className="discount">50%</p>
                    </div>
                    <p className="discounted-price">$250.00</p>
                </div>
                <div className="cart-info">
                    <div className="product-quantity">
                        <button className="subtract" onClick={substractQuantity}><img src="images/icon-minus.svg" /></button>
                        <div className="quantity">{quantity}</div>
                        <button className="add" onClick={addQuantity}><img src="images/icon-plus.svg" /></button>
                    </div>
                    <button className="add-to-cart-btn" onClick={addToCart}><img src="images/icon-cart.svg" />Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  );
}