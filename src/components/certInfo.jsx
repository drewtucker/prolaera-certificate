import { StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";
import { PrettyDate } from "../helpers/dateHelpers";
import deliveryHelper from "../helpers/deliveryHelper";

const getStyles = ({ cert }) => {
  return StyleSheet.create({
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: 600
    },
    header: { maxHeight: 45, fontSize: 38, marginBottom: 5, paddingBottom: 0 },
    subtext: { fontFamily: "Helvetica-Oblique", fontSize: 14 },
    name: {
      maxHeight: 36,
      fontSize:
        -5 * Math.log10((cert.first.length + cert.last.length) / 2) + 30,
      marginBottom: 10
    },
    delivery: {
      fontFamily: "Helvetica-Oblique",
      fontSize: 16,
      height: 30,
      marginTop: 10
    },
    subject: {
      maxHeight: 60,
      fontSize: 22,
      marginTop: 10,
      textAlign: "center"
    },
    hours: { fontSize: 13, maxHeight: 17 }
  });
};

const FullName = ({ first, last, styleInfo }) => (
  <Text style={styleInfo}>
    {first} {last}
  </Text>
);

const CertTitle = ({ cert, styleInfo }) => (
  <Text style={styleInfo}>{cert}</Text>
);

const Delivery = ({ delivery_date, delivery_method, styleInfo }) => (
  <Text style={styleInfo}>
    {PrettyDate(delivery_date)} - {deliveryHelper(delivery_method)}
  </Text>
);

// TODO: handle longer hours with columns i.e 6 hour types get 3 or 2 column
const Hours = ({ hours, styleInfo }) => {
  if (!hours || !hours.length) return <Text />;
  return hours.map(({ credits, subject_area }, index) => (
    <Text key={index} style={styleInfo}>
      {subject_area}: {credits} hour(s)
    </Text>
  ));
};

const CertInfo = cert => {
  const styles = getStyles(cert);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Certificate of Completion</Text>
      <Text style={styles.subtext}>This certificate is presented to</Text>
      <FullName {...cert} style={styles.name} />
      <Text style={styles.subtext}>for successfully completing</Text>
      <CertTitle {...cert} style={styles.subject} />
      <Delivery {...cert} style={styles.delivery} />
      <Hours {...cert} style={styles.hours} />
    </View>
  );
};

export default CertInfo;
