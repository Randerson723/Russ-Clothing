import React from 'react';
import CustomButton from '../custom-button/custom-button.components';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors.js'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
      <div className='cart-items'>
          {
              cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
          }
      </div>
      <CustomButton>Go to Checkout</CustomButton>      
  </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);