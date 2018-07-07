import { Image, StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";

// let url;
// let height = 125;
// let width = 200;
// let resizedHeight = 125;
// let resizedWidth = width * (125 / height);

const getStyles = ({ signature }) => {
  return StyleSheet.create({
    image: { maxWidth: 200 },
    subText: {
      fontSize:
        -5 * Math.log10((signature.name.length + signature.title.length) / 2) +
        20
    }
  });
};

const SigImage = ({ signature, styleInfo }) => (
  <Image src={signature.imageUrl} style={styleInfo} />
);

const Name = ({ signature, styleInfo }) => (
  <Text style={styleInfo}>{signature.name}</Text>
);

const Title = ({ signature, styleInfo }) => (
  <Text style={styleInfo}>{signature.title}</Text>
);

const Signature = cert => {
  const styles = getStyles(cert);
  return (
    <View>
      <SigImage {...cert} styleInfo={styles.image} />
      <Name {...cert} styleInfo={styles.subText} />
      <Title {...cert} styleInfo={styles.subText} />
    </View>
  );
};

export default Signature;
