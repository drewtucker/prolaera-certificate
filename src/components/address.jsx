import { StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";

const styles = StyleSheet.create({
  wrapper: { maxWidth: "250px", maxHeight: "100px" },
  address: { maxWidth: "100%", textAlign: "right", fontStyle: "italic" },
  cityStateZip: {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "flex-end",
    fontStyle: "italic",
    paddingRight: "0px"
  }
});

const AddressOne = ({ addressOne }) => (
  <Text style={styles.address}>{addressOne}</Text>
);
const AddressTwo = ({ addressTwo }) => (
  <Text style={styles.address}>{addressTwo}</Text>
);
const CityStateZip = ({ city, state, zip }) => (
  <Text style={styles.line}>
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
