import { StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";

const styles = StyleSheet.create({
  wrapper: { marginTop: 25 },
  header: { fontFamily: "Helvetica-Bold", fontSize: 10, maxHeight: 12 },
  line: { fontSize: 10 }
});

const Sponsors = ({ sponsors }) =>
  Object.keys(sponsors).map((key, index) => (
    <Text key={index} style={styles.line}>
      {key}: {sponsors[key]}{" "}
    </Text>
  ));

const RegistrationNumbers = cert => (
  <View style={styles.wrapper}>
    <Text style={styles.header}>Sponsor Registration No:</Text>
    <Sponsors {...cert} />
  </View>
);

export default RegistrationNumbers;
