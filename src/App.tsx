import Info from '../data/Info.json';
import Navbar from './Navbar';
import { TfiShoppingCart } from 'react-icons/tfi';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const App = () => {
  // !! Use state to send data to navbar
  return (
    <>
      <div className="productInfo-page">
        <Navbar />
        <div>
          <div className="productInfo">
            {Info.map((product) => (
              <>
                <div className="productPage-wrapper">
                  <div className="productImages-wrapper">
                    <button className="left-arrow">
                      <IoIosArrowBack />
                    </button>
                    <button className="right-arrow">
                      <IoIosArrowForward />
                    </button>
                    <img
                      src={product.mainImages[0].image}
                      alt=""
                      className="product-image"
                    />
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
                        <button>
                          <FaMinus />
                        </button>
                        <p>0</p>
                        <button>
                          <FaPlus />
                        </button>
                      </div>
                      <div className="add-to-cart">
                        <p>
                          <TfiShoppingCart />
                        </p>
                        <p>{product.btnText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
