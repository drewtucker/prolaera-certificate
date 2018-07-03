import React from "react";
import { View, StyleSheet } from "@react-pdf/core";

class CertInfo extends React.Component {
  render() {
    const {
      cert = "",
      date = "",
      delivery = "",
      first = "",
      last = "",
      hours: [{ credits = "", subject_area = "" }]
    } = this.props;

    const styles = StyleSheet.create({
      header: { fontSize: "30px" },
      subtext: { fontSize: "15px", fontStyle: "italic" },
      name: { fontSize: "25px" },
      subject: { fontSize: "22px" },
      hours: { fontSize: "13px" }
    });

    return (
      <View>
        <Text style={styles.header}>Certificate of Completion</Text>
        <Text style={styles.subtext}>This certificate is presented to</Text>
        <Text style={styles.name}>
          {first} {last}
        </Text>
        <Text style={styles.subtext}>for successfully completing</Text>
        <Text style={subject}>{cert}</Text>
        <Text style={subtext}>
          {date} {delivery}
        </Text>
        <Text style={styles.hours}>
          {hours[0].subject_area} {hours[0].credits}
        </Text>
      </View>
    );
  }
}

export default CertInfo;
