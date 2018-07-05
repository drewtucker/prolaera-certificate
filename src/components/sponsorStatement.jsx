import { StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";

const styles = StyleSheet.create({
  wrapper: { maxWidth: "90%" },
  statement: { fontSize: 9, textAlign: "center" }
});

const Statement = ({ sponsorStatement }) => (
  <Text style={styles.statement}>{sponsorStatement}</Text>
);

const SponsorStatement = cert => (
  <View style={styles.wrapper}>
    <Statement {...cert} />
  </View>
);

export default SponsorStatement;
