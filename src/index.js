import React from "react";
import { Page, Document } from "@react-pdf/core";
import Logo from "./components/logo";
import Address from "./components/address";
import CertInfo from "./components/certInfo";
import ReactPDF from "@react-pdf/node";
import regeneratorRuntime from "regenerator-runtime";

const Certificate = props => (
  <Page {...props}>
    <Logo />
    <Address />
    <CertInfo />
  </Page>
);

const Output = () => (
  <Document author="Drew Tucker" title="Certificate">
    <Certificate orientation="landscape" size="A4" />
  </Document>
);

ReactPDF.render(<Output />, `${__dirname}/output.pdf`);

export { Certificate };
