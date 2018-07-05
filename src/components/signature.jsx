import { Image, StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";

const styles = StyleSheet.create({
  image: { maxWidth: 250 },
  name: { fontSize: 20 },
  title: { fontSize: 16 }
});

const SigImage = ({ imageUrl }) => (
  <Image src={imageUrl} style={styles.image} />
);
const Name = ({ name }) => <Text style={styles.name}>{name}</Text>;
const Title = ({ title }) => <Text style={styles.title}>{title}</Text>;

const Signature = cert => (
  <View>
    <SigImage {...cert} />
    <Name {...cert} />
    <Title {...cert} />
  </View>
);

export default Signature;
