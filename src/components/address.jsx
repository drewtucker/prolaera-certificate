import { StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";

const styles = StyleSheet.create({
  wrapper: { maxWidth: 250, maxHeight: 100 },
  address: {
    maxWidth: "100%",
    fontSize: 15,
    textAlign: "right",
    fontFamily: "Helvetica-Oblique"
  }
});

const AddressOne = ({ addressOne }) => (
  <Text style={styles.address}>{addressOne}</Text>
);

const AddressTwo = ({ addressTwo }) => (
  <Text style={styles.address}>{addressTwo}</Text>
);

const CityStateZip = ({ city, state, zip }) => (
  <Text style={styles.address}>{`${city}, ${state} ${zip}`}</Text>
);

const Address = cert => (
  <View style={styles.wrapper}>
    <AddressOne {...cert} />
    <AddressTwo {...cert} />
    <CityStateZip {...cert} />
  </View>
);

export default Address;
