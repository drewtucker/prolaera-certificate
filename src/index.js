import { Document, Page } from "@react-pdf/core";
import ReactPDF from "@react-pdf/node";
import "babel-core/register";
import "babel-polyfill";
import React from "react";
import Address from "./components/address";
import CertInfo from "./components/certInfo";
import Logo from "./components/logo";

const Certificate = props => (
  <Page {...props}>
    <Logo />
    <Address />
    <CertInfo />
  </Page>
);

const Output = () => props => (
  <Document author="Drew Tucker" title="Certificate" {...props} {...cert}>
    <Certificate orientation="landscape" size="A4" />
  </Document>
);

ReactPDF.render(<Output />, `${__dirname}/output.pdf`);

export { Certificate };
