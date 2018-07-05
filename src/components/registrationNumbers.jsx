import { StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";

const styles = StyleSheet.create({});

const Sponsors = ({ sponsors }) =>
  Object.keys(sponsors).map((key, index) => (
    <Text key={index}>
      {key}: {sponsors[key]}{" "}
    </Text>
  ));

const RegistrationNumbers = cert => (
  <View>
    <Text>Sponsor Registration No:</Text>
    <Sponsors {...cert} />
  </View>
);

export default RegistrationNumbers;
