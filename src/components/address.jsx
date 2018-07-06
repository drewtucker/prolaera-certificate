import { StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";

const styles = StyleSheet.create({
  wrapper: { maxWidth: 250, maxHeight: 100 },
  address: {
    maxWidth: "100%",
    fontSize: 15,
    textAlign: "right",
    fontFamily: "Helvetica-Oblique"
  },
  cityStateZip: {
    maxWidth: "100%",
    justifyContent: "flex-end",
    fontFamily: "Helvetica-Oblique",
    fontSize: 15
  }
});

const AddressOne = ({ addressOne }) => (
  <Text style={styles.address}>{addressOne}</Text>
);
const AddressTwo = ({ addressTwo }) => (
  <Text style={styles.address}>{addressTwo}</Text>
);
const CityStateZip = ({ city, state, zip }) => (
  <Text style={styles.cityStateZip}>
    {city}, {state} {zip}{" "}
  </Text>
);

const Address = cert => (
  <View style={styles.wrapper} {...cert}>
    <AddressOne {...cert} />
    <AddressTwo {...cert} />
    <CityStateZip {...cert} />
  </View>
);

export default Address;
