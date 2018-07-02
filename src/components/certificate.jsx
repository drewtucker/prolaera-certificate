import React from "react";

class Certificate extends React.Component {
  render() {
    const {
      addressOne = "",
      addressTwo = "",
      city = "",
      logoUrl = "",
      signature,
      imageUrl = "",
      name,
      title,
      sponsors,
      nationalRegistry,
      qas,
      texas,
      sponsorStatement = "",
      state,
      style,
      zip,
      cert = "",
      cert_id,
      company_id,
      date = "",
      delivery = "",
      first = "",
      hours,
      hours_basic,
      credits,
      subject_area,
      last = "",
      sponsor
    } = this.props;

    return (
      <div style={{ width: "100%" }}>
        <table>
          <tr>
            <td>
              <div align="left">
                <img
                  href={logoUrl}
                  style={{ width: "300px", height: "100px" }}
                />
              </div>
            </td>
            <td>
              <div align="right" style={{ maxWidth: "350px", height: "100px" }}>
                <p>{addressOne}</p>
                <p>{addressTwo}</p>
                <p>
                  {city} {state} {zip}
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Certificate;
