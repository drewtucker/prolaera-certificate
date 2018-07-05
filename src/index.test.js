import { Document, Image, Page, StyleSheet, View } from "@react-pdf/core";
import ReactPDF from "@react-pdf/node";
import React from "react";
import Address from "./components/address";
import CertInfo from "./components/certInfo";
import Logo from "./components/logo";
import RegistrationNumbers from "./components/registrationNumbers";
import Signature from "./components/signature";
import SponsorStatement from "./components/sponsorStatement";

const cert = {
  cert:
    "Meeting SEC Disclosure Requirements: Compensation Discussion & Analysis",
  date: "2017-06-26T08:00:00.000Z",
  first: "Hugh",
  last: "Mann",
  hours: [
    {
      subject_area: "Imported",
      credits: 3
    },
    {
      subject_area: "Hog-Tying",
      credits: 2
    }
  ],
  sponsors: {
    name: "BowmanKnopp",
    nationalRegistry: "123456",
    qas: "123456",
    texas: "50293920",
    pennsylvania: "20485323"
  },
  signature: {
    imageUrl:
      "https://prolaera.s3-us-west-2.amazonaws.com/sponsors/def4c2bf-0485-4eda-9b2b-0e4055ef0dbe.signature.jpg",
    name: "John Smith",
    title: "Director, Learning and Development"
  },
  addressOne: "1234 Fake St.",
  addressTwo: "Suite 5949",
  city: "Reno",
  state: "Nevada",
  zip: "595849492",
  sponsorStatement:
    "In accordance with the standards of the National Registry of CPE Sponsors and as set forth in Circular 230 Section 10.6, credits have been granted based on a 50-minute hour. State boards of accountancy, state bars, and other state regulatory bodies have final authority on the acceptance of courses for continuing education credit. Please check with your state board regarding applicability of this course towards your continuing education requirement.",
  logoUrl:
    "https://prolaera.s3-us-west-2.amazonaws.com/sponsors/def4c2bf-0485-4eda-9b2b-0e4055ef0dbe.logo.png"
};

const styles = StyleSheet.create({
  page: { display: "flex" },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "-1"
  },
  logo: {},
  address: { marginRight: "25px" },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "25px",
    marginLeft: "25px"
  },
  subRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "25px"
  },
  certInfo: {
    marginTop: "10px",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  regNums: { justifyContent: "right" },
  sponsorStatement: {
    marginTop: "48px",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

const doc = (
  <Document author="Drew Tucker" title="Certificate">
    <Page size="A4" orientation="landscape" style={styles.page}>
      <Image
        src="https://assets.prolaera.com/pdf-background.jpg"
        style={styles.background}
      />
      <View style={styles.topRow}>
        <Logo {...cert} style={styles.logo} />
        <Address {...cert} style={styles.address} />
      </View>
      <View style={styles.certInfo}>
        <CertInfo {...cert} />
      </View>
      <View style={styles.subRow}>
        <Signature {...cert} />
        <RegistrationNumbers {...cert} />
      </View>
      <View style={styles.sponsorStatement}>
        <SponsorStatement {...cert} />
      </View>
    </Page>
  </Document>
);

// const Output = () => (
//   <Document author="Drew Tucker" title="Certificate" {...cert}>
//     <Certificate orientation="landscape" size="A4" />
//   </Document>
// );

describe("ReactPDF Render", async () => {
  it("should render a PDF file for testing purposes", async () => {
    jest.setTimeout(30000);
    try {
      const render = await ReactPDF.render(doc, `${__dirname}/output.pdf`);
      expect(render).toBe(undefined);
    } catch (error) {
      throw error;
    }
  });
});
