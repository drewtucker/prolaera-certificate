import { Image, StyleSheet, View } from "@react-pdf/core";
import React from "react";

const styles = StyleSheet.create({
  image: { maxWidth: "150px", maxHeight: "50px" }
});

const LogoUrl = ({ logoUrl }) => <Image src={logoUrl} style={styles.image} />;

const Logo = cert => (
  <View>
    <LogoUrl {...cert} />
  </View>
);

export default Logo;
