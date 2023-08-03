import React from "react";
import Cart from "../Cart";
import Products from "../Products";
import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <nav className={styles.navbar}>
        <h1 className={styles.title}>Cielo Rojo</h1>
      </nav>
      <Cart />
      
      <Products />
    </div>
  );
};

export default Home;
