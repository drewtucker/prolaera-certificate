import ReactPDF from "@react-pdf/node";
import React from "react";
import { Page, Document } from "@react-pdf/core";
import { Certificate } from "./index";

const cert = {
  cert:
    "Meeting SEC Disclosure Requirements: Compensation Discussion & Analysis",
  date: "2017-06-26T08:00:00.000Z",
  first: "Paul",
  hours: {
    subject_area: "Imported",
    credits: 3
  }
};

const Output = () => (
  <Document author="Drew Tucker" title="Certificate" {...cert}>
    <Certificate orientation="landscape" size="A4" />
  </Document>
);

describe("ReactPDF Render", async () => {
  it("should render a PDF file for testing purposes", async () => {
    const render = ReactPDF.render(<Output />, `${__dirname}/output.pdf`);
    console.log(render);
    expect(render).toEqual(true);
  });
});
