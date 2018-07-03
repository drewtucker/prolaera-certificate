import { StyleSheet } from "@react-pdf/core";
import React from "react";

class Certificate extends React.Component {
  render() {
    const {} = this.props;

    const styles = StyleSheet.create({
      background: {
        width: "100%",
        backgroundImage: "http://assets.prolaera.com/pdf-background.jpg"
      }
    });

    return <div style={styles.background} />;
  }
}

export default Certificate;
