import React from 'react';
import CustomButton from '../custom-button/custom-button.components';
import './cart-dropdown.style.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
      <div className='cart-items'/>
      <CustomButton>Go to Checkout</CustomButton>      
  </div>
)

export default CartDropdown;