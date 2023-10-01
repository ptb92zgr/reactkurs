import React, { Component } from "react";
import Hotel from "./Hotel/Hotel";
import styles from "./Hotels.module.css"

class Hotels extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ofery:</h2>
        <Hotel />
        <Hotel />
        <Hotel />
      </div>
    );
  }
}

export default Hotels;
