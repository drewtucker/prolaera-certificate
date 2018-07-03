import React from "react";
import { View, Image, StyleSheet } from "@react-pdf/core";

class Logo extends React.Component {
  render() {
    const { logoUrl } = this.props;

    const styles = StyleSheet.create({
      image: { maxWidth: 300, height: 100 }
    });

    return (
      <View>
        <Image src={logoUrl} style={styles.image} />
      </View>
    );
  }
}

export default Logo;
