import { Image, StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";

class Signature extends React.Component {
  render() {
    const {
      signature: { imageUrl = "", name = "", title = "" }
    } = this.props;

    const styles = StyleSheet.create({
      image: {},
      subtext: {}
    });

    return (
      <View>
        <Image src={signature.imageUrl} style={styles.image} />
        <Text style={styles.subtext}>{signature.name}</Text>
        <Text style={styles.subtext}>{signature.title}</Text>
      </View>
    );
  }
}

export default Signature;
