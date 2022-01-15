import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
      'pk_test_51KEbkjLRY3ABWFkW2YRXuYcmBOX6KZOrPappmCN8NyGoLfhTttrGd2TvPmnYW8BhOg2Pw3GgRwt15g8TEDLKHqqW00d3hGKPyp';

    const  onToken = token => {
          console.log(token)
          alert('Payment Succesful')
      }
//intergrated stripe feature, below is the parameters for the fields for the strip popup
      return(
          <StripeCheckout 
            label= 'Pay Now'
            name= "Russ Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton