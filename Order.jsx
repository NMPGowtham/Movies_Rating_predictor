import React, { useState } from 'react';
import Summary from './Summary';
import './Order.css';

const Order = () => {
  const starters = [
    { id: 1, name: 'Paneer Tikka', price: 200, image: 'https://imgs.search.brave.com/Pl5xv70FoRk78ihn2nD6su8X2nGugwDKYG9eXHMG70k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVncmVjaXBlc29m/aW5kaWEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDEzLzA5/L3BhbmVlci10aWtr/YS1tYXNhbGExMC0x/LmpwZw' },
    { id: 2, name: 'Vegetable Samosa', price: 150, image: 'https://imgs.search.brave.com/A9lj795d_G81Pn8xzR-mPk2Nv9jOP0D4xvHqD_QUyuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzY1LzQ5LzY5/LzM2MF9GXzEwNjU0/OTY5MTNfb1JyeE5O/aEhGekFoQTNWQ3Ns/eGpWTnZVdFFTbm9w/NXMuanBn' },
    { id: 3, name: 'Chicken Tikka', price: 250, image: 'https://imgs.search.brave.com/nZOcFDi1b8u0EfcuU1CWfK5viqzok7BBXp-0_Xrne1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk3LzU1LzQz/LzM2MF9GXzQ5NzU1/NDM4N19VUTZYbW9t/VkdFQ1o1Ym05NkVY/WG1QZTZnVkgxR3Nt/NS5qcGc' },
    // Add other starter dishes here...
  ];

  const mainCourse = [
    { id: 11, name: 'Butter Chicken', price: 250, image: 'https://imgs.search.brave.com/V_AK5ar0B0j6mJ_uJDd0RD-xyvALPNcFSd0TMMwQlwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEy/NjUyOTI1Mi9waG90/by9idXR0ZXItY2hp/Y2tlbi1ieS10dWxz/aS1pbmRpYW4tcmVz/dGF1cmFudC1pbi1x/dWFycnktYmF5LTI0/b2N0MTQtMDZub3Zl/bWJlcjIwMTQtbGVh/ZC1mZWF0dXJlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz00/b19nTFZ1SVRqbXo1/cmREX2k1ZWdPWC02/cEJ2M2NPY3FHM3o2/aGVCSG93PQ'},
    { id: 12, name: 'Hyderabadi Biryani', price: 300, image: 'https://imgs.search.brave.com/fu7CoEhFUpF5ndF0RuSjARoFSjkRmC1De-hCsInrdbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzUxLzA3LzI1/LzM2MF9GXzU1MTA3/MjU1OF9yRU51eDlm/cWxlYzVHUEJKU2FU/b1Q2OXhqY1lpR3hq/ZS5qcGc' },
    { id: 13, name: 'Paneer Butter Masala', price: 240, image: 'https://imgs.search.brave.com/zokFzOhSiCrW4U9-fYm4dNn-q3dopKq9rigZf63SGOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzY0Lzc3Lzgw/LzM2MF9GXzc2NDc3/ODA3M19TVzNtM1Q3/OTQ0WUtySmtTOVFW/TkxPTmYxUWxzc2Jp/Mi5qcGc' },
    // Add other main course dishes here...
  ];

  const desserts = [
    { id: 21, name: 'Gulab Jamun', price: 100, image: 'https://imgs.search.brave.com/6C0tKFjUeAfCUpDgtI7MzzC4JHqdzVbrt0rBxEqkyEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/NDUwOTk3My9waG90/by9ndWxhYi1qYW11/bi1hbi1pbmRpYW4t/ZGVzc2VydC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bk5Y/WUdJTVk3ejRiQnE2/c1JCbGdvSGJBSk41/cDc1R2hXMGhWWjh1/V2hBTT0' },
    { id: 22, name: 'Rasgulla', price: 120, image: 'https://recipes.timesofindia.com/photo/52743612.cms?imgsize=700158' },
    { id: 23, name: 'Jalebi', price: 80, image: 'https://imgs.search.brave.com/oCyOPxjeNrMQ9ejkCDPloJYz1kzrG0W-1eQsuG4Yor0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/Mjk5ODEyNi9waG90/by9qYWxlYmkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU16/SFZXcXd4WE43NlJB/ak04a3Z5TlBwdXFX/MTRhc0ZScFJIX0tU/VmNialk9' },
    // Add other dessert dishes here...
  ];

  const [cart, setCart] = useState([]);

  const order = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <div className="order-page">
      <h1 className="website-title">Welcome to Indian Delights!</h1>
      <div className="menu-container">
        <Category title="Starters" items={starters} order={order} />
        <Category title="Main Course" items={mainCourse} order={order} />
        <Category title="Desserts" items={desserts} order={order} />
      </div>
      <Summary cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

const Category = ({ title, items, order }) => (
  <div className="category">
    <h2>{title}</h2>
    <div className="dishes">
      {items.map((item) => (
        <div key={item.id} className="dish-card">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>₹{item.price}</p>
          <button onClick={() => order(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);

export default Order;