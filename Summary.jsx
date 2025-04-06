import React from 'react';
import './Summary.css';

const Summary = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            {item.name} - ₹{item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
};

export default Summary;