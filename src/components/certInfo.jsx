import { StyleSheet, Text, View } from "@react-pdf/core";
import React from "react";
import { PrettyDate } from "../helpers/dateHelpers";

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 600
  },
  header: { fontSize: 30, marginBottom: 0, paddingBottom: 0 },
  subtext: { fontSize: 15, fontStyle: "italic" },
  name: { fontSize: 25, marginBottom: 0 },
  subject: { fontSize: 22, textAlign: "center" },
  hours: { fontSize: 13 }
});

const FullName = ({ first, last }) => (
  <Text style={styles.name}>
    {first} {last}
  </Text>
);
const Subject = ({ cert }) => <Text style={styles.subject}>{cert}</Text>;
const Delivery = ({ date, delivery }) => (
  <Text style={styles.subtext}>
    {PrettyDate({ date })} {delivery}
  </Text>
);
const Hours = ({ hours }) => {
  if (!hours || !hours.length) return <Text />;
  return hours.map(({ credits, subject_area }, index) => (
    <Text key={index}>
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
