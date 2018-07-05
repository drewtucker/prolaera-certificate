import { Image, StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";

const styles = StyleSheet.create({
  image: { maxWidth: 200 },
  name: { fontSize: 17 },
  title: { fontSize: 15 }
});

const SigImage = ({ signature }) => (
  <Image src={signature.imageUrl} style={styles.image} />
);
const Name = ({ signature }) => (
  <Text style={styles.name}>{signature.name}</Text>
);
const Title = ({ signature }) => (
  <Text style={styles.title}>{signature.title}</Text>
);

const Signature = cert => (
  <View>
    <SigImage {...cert} />
    <Name {...cert} />
    <Title {...cert} />
  </View>
);

export default Signature;
