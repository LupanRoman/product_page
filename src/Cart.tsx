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
            <h5 className='empty-cart'>Your cart is empty.</h5>
          ) : (
            <div className="product-review">
              {Info?.map((product) => (
                <>
                  <div className='cart-divider'>
                    <div className='contents'>
                      <img src={product.thumbnailImages[0].image} alt="" width={40}/>
                      <div className="product-cart-desc">
                        <h4>{product.title}</h4>
                        <div className="total-wrapper">
                          <p className='calculation'>{`$${product.newPrice}.00 x ${counter}`}</p>
                          <div className='total-price'>
                            {counter == 0 ? (
                              <p>{`$${product.newPrice}.00`}</p>
                            ) : (
                              <p>{`$${product.newPrice * counter}.00`}</p>
                            )}
                          </div>
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
