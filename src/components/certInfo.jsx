import { StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";
import { PrettyDate } from "../helpers/dateHelpers";
import deliveryHelper from "../helpers/deliveryHelper";

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 600
  },
  header: { maxHeight: 45, fontSize: 38, marginBottom: 5, paddingBottom: 0 },
  subtext: { fontFamily: "Helvetica-Oblique", fontSize: 14 },
  name: { maxHeight: 36, fontSize: 30, marginBottom: 10 },
  delivery: {
    fontFamily: "Helvetica-Oblique",
    fontSize: 16,
    height: 30,
    marginTop: 10
  },
  subject: { maxHeight: 60, fontSize: 22, marginTop: 10, textAlign: "center" },
  hours: { fontSize: 13, maxHeight: 17 }
});

const FullName = ({ first, last }) => (
  <Text style={styles.name}>
    {first} {last}
  </Text>
);
const Subject = ({ cert }) => <Text style={styles.subject}>{cert}</Text>;
const Delivery = ({ delivery_date, delivery_method }) => (
  <Text style={styles.delivery}>
    {PrettyDate(delivery_date)} - {deliveryHelper(delivery_method)}
  </Text>
);
const Hours = ({ hours }) => {
  if (!hours || !hours.length) return <Text />;
  return hours.map(({ credits, subject_area }, index) => (
    <Text key={index} style={styles.hours}>
      {subject_area}: {credits} hour(s)
    </Text>
  ));
};

const CertInfo = cert => (
  <View style={styles.wrapper}>
    <Text style={styles.header}>Certificate of Completion</Text>
    <Text style={styles.subtext}>This certificate is presented to</Text>
    <FullName {...cert} />
    <Text style={styles.subtext}>for successfully completing</Text>
    <Subject {...cert} />
    <Delivery {...cert} />
    <Hours {...cert} />
  </View>
);

export default CertInfo;
