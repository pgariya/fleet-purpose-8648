import React from "react";
import styles from "../src/Offers.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Offer = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.offers_main}>
        <h1 className={styles.All_offers}>All Offers</h1>
        <br />
        <br />
        <br />
        <div className={styles.currents_offers}>
          <div className={styles.padding_values}>
            <h2 className={styles.current_offers_h1_value}>Current Offers</h2>
            <ul>
              <li className={styles.li_colors}>
                Get 10% cashback* on a minimum transcation of Rs10000 with citi
                credit and debit <br />
                cards.
              </li>
              <li className={styles.li_colors}>
                Get 20% off on delivery charges till 31st jan
              </li>
            </ul>
          </div>
        </div>
        <hr className={styles.divider_value} />
        <img
          src="https://www.ikea.com/images/4e/c8/4ec8337e9084fa59cada03f6e6e19efc.jpg?f=sg"
          alt="republic_value"
        />
        <br />
        <hr className={styles.divider_value} />
        <br />
        <h2 className={styles.lowest_price}>Our Lowest Price</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Offer;
