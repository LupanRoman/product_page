import Info from '../data/Info.json';
import Navbar from './Navbar';
import { TfiShoppingCart } from 'react-icons/tfi';

const App = () => {
  // !! Use state to send data to navbar
  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className="productImages"></div>
          <div className="productInfo">
            {Info.map((product) => (
              <>
                <div>
                  <div className="heading">
                    <p>{product.manufacturer}</p>
                    <h1>{product.title}</h1>
                  </div>
                  <p>{product.desc}</p>
                  <div className="price-discount">
                    <h2>{`$${product.newPrice}`}</h2>
                    <p>{`${product.discountAmount}%`}</p>
                  </div>
                  <p>{product.oldPrice}</p>
                  <div className="add-to-cart-container">
                    <div className="qty-controller">
                      <button>-</button>
                      <p>0</p>
                      <button>+</button>
                    </div>
                    <div className="add-to-cart">
                      <TfiShoppingCart />
                      <p>{product.btnText}</p>
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
