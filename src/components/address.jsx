import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/core";

class Address extends React.Component {
  render() {
    const {
      addressOne = "",
      addressTwo = "",
      city = "",
      state = "",
      zip = ""
    } = this.props;

    const styles = StyleSheet.create({
      wrapper: { maxWidth: "300px", height: "100px" },
      line: { maxWidth: "100%", fontStyle: "italic" }
    });

    return (
      <View style={styles.wrapper}>
        <Text style={styles.line}>{addressOne}</Text>
        <Text style={styles.line}>{addressTwo}</Text>
        <Text style={styles.line}>
          {city}, {state} {zip}
        </Text>
      </View>
    );
  }
}

export default Address;
