import { BsFillTrashFill } from 'react-icons/bs';
import Info from '../data/Info.json';

const Cart = ({ itemInCart, deleteItem, counter }) => {
  return (
    <>
      <div className="cart-wrapper">
        <h4>Cart</h4>
        <hr />
        <div className="cart-items">
          {itemInCart == false ? (
            <h5>Your cart is empty</h5>
          ) : (
            <div className="product-review">
              {Info?.map((product) => (
                <>
                  <div>
                    <div>
                      <img src="" alt="" />
                      <div className="product-cart-desc">
                        <h4>{product.title}</h4>
                        <div className="total">
                          <p>{`$${product.newPrice} x ${counter}`}</p>
                          <p>
                            {counter == 0 ? (
                              <p>{`$${product.newPrice}`}</p>
                            ) : (
                              <p>{`$${product.newPrice * counter}`}</p>
                            )}
                          </p>
                        </div>
                      </div>
                      <BsFillTrashFill onClick={deleteItem} className='delete' />
                    </div>
                    <button className='checkout'>Checkout</button>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
