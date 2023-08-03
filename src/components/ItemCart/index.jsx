import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;
  var amountcookies = 0;

  if(item.name === "coffe small"){
    amountcookies = amountcookies + 0;
  }else if(item.name === "coffe medium"){
      amountcookies = amountcookies + 3;
  }
  else if(item.name === "coffe large"){
    amountcookies = amountcookies + 6;
  }
  else if(item.name === "coffe jumbo"){
    amountcookies = amountcookies + 1;
  }

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => editItemToCart(item._id, "add", amount)}>
              AGREGAR
            </button>
            <button onClick={() => editItemToCart(item._id, "remove", amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
          <p>Galletas: {item.amount * amountcookies}</p>
        </div>
      </div>
    </div>
  );
};
