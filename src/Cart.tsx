import { BsFillTrashFill } from 'react-icons/bs';

const Cart = () => {
  return (
    <>
      <div className="cart-wrapper">
        <h4>Cart</h4>
        <hr />
        <div className="cart-items">
          <div className="product-review">
            <img src="" alt="" />
            <div className="product-cart-desc">
              <h4></h4>
              <p></p>
            </div>
            <BsFillTrashFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
