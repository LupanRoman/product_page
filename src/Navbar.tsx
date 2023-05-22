import { TfiShoppingCart } from 'react-icons/tfi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';

const Navbar = ({ counter, openCart, itemInCart }) => {
  const openMenu = () => {
    const menuBtn = document.getElementById('nav-links');
    menuBtn?.classList.toggle('active');
  };
  return (
    // TODO Add transition to the mobile menu
    <>
      <div className="nav-container">
        <div className="left-side">
          <GiHamburgerMenu className="open-menu" onClick={openMenu} />
          <h2>sneakers</h2>
        </div>
        <div className="nav-links" id="nav-links">
          <GrFormClose className="close-menu" onClick={openMenu} />
          <a href="">Collections</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div className="profile">
          <div className="cart-container" onClick={openCart}>
            <TfiShoppingCart className="cart" />
            {itemInCart == false ? (
              <span className="qty">0</span>
            ) : (
              <span className="qty">{counter}</span>
            )}
          </div>
          <img
            src="image-avatar.png"
            alt="A profile image"
            width={20}
            className="profile-pic"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
