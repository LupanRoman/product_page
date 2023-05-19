import Info from '../data/Info.json';
import Navbar from './Navbar';
import { TfiShoppingCart } from 'react-icons/tfi';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import Cart from './Cart';

const App = () => {
  // !! Use state to send data to navbar
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [itemInCart, setItemInCart] = useState(false);

  const increaseIndex = () => {
    setIndex(index + 1);
  };

  const decreaseIndex = () => {
    setIndex(index - 1);
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const openCart = () => {
    const cartHolder = document.getElementById('cart-holder');
    cartHolder?.classList.toggle('active');
  };

  const deleteItem = () => {
    setItemInCart(false);
  };

  return (
    <>
      <div className="productInfo-page">
        <Navbar counter={counter} openCart={openCart} />
        <div>
          <div className="productInfo">
            {Info.map((product) => (
              <>
                <div className="productPage-wrapper">
                  <div className="productImages-wrapper">
                    {index >= 1 ? (
                      <button className="left-arrow" onClick={decreaseIndex}>
                        <IoIosArrowBack />
                      </button>
                    ) : null}
                    {index <= 2 ? (
                      <button className="right-arrow" onClick={increaseIndex}>
                        <IoIosArrowForward />
                      </button>
                    ) : null}
                    <img
                      src={
                        product.mainImages[0].image &&
                        product.mainImages[index]?.image
                      }
                      alt=""
                      className="product-image"
                    />
                  </div>
                  <div id="cart-holder" className="cart-holder">
                    <Cart itemInCart={itemInCart} deleteItem={deleteItem} counter={counter} />
                  </div>
                  <div className="productInfo-wrapper">
                    <div className="heading">
                      <p className="manufacturer">
                        {product.manufacturer.toUpperCase()}
                      </p>
                      <h1>{product.title}</h1>
                      <p className="product-desc">{product.desc}</p>
                    </div>
                    <div className="price-discount">
                      <div>
                        <h2>{`$${product.newPrice}`}</h2>
                        <p>{`${product.discountAmount}%`}</p>
                      </div>
                      <s>{`$${product.oldPrice}`}</s>
                    </div>
                    <div className="add-to-cart-container">
                      <div className="qty-controller">
                        <button onClick={decreaseCounter}>
                          <FaMinus />
                        </button>
                        <p>{counter}</p>
                        <button onClick={increaseCounter}>
                          <FaPlus />
                        </button>
                      </div>
                      <div
                        className="add-to-cart"
                        onClick={() => setItemInCart(true)}
                      >
                        <p>
                          <TfiShoppingCart />
                        </p>
                        <p>{product.btnText}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {console.log(itemInCart)} */}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
