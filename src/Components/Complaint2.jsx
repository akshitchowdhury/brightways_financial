import React from 'react'

import Table from "react-bootstrap/Table";

const Complaint2 = () => {
  return (
    <div>
      <div>
      <div class="elementor-widget container mt-5">
        <div className="heade-d">
          <h5 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Data For the Month ending: JUNE,2024
          </h5>
        </div>
        <Table striped bordered hover>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>sr no</th>
              <th>Received From</th>
              <th>Pending at the end of Last Month</th>
              <th>Received</th>
              <th>Resolved</th>
              <th>Total Pending</th>
              <th>Pending Complaint &#x276F; 3 Months</th>
              <th>Average Resolution Time in Days</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            <tr>
              <td>1</td>
              <td>Directly from Investors</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>SEBI (SCORES)</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Other Sources (If Any)</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td></td>
              <td>Grand Total</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </Table>
        <div className="heade-d">
          <h5 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Data For the Month ending: JULY,2024
          </h5>
        </div>
        <Table striped bordered hover>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>sr no</th>
              <th>Received From</th>
              <th>Pending at the end of Last Month</th>
              <th>Received</th>
              <th>Resolved</th>
              <th>Total Pending</th>
              <th>Pending Complaint &#x276F; 3 Months</th>
              <th>Average Resolution Time in Days</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            <tr>
              <td>1</td>
              <td>Directly from Investors</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>SEBI (SCORES)</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>15</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Other Sources (If Any)</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td></td>
              <td>Grand Total</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </Table>



        <div className="container heade-d mt-3">
          <h5 style={{ textAlign: "center", padding: "20px" }}>
            Trend of Monthly disposal of complaints :
          </h5>
          <div style={{ paddingLeft: "140px", paddingRight: "140px" }}>
            <Table striped bordered hover style={{ padding: "20px" }}>
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th>sr no</th>
                  <th>Month</th>
                  <th>Carried Forward from Previous Month</th>
                  <th>Received</th>
                  <th>Resolved</th>
                  <th>Pending</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                <tr>
                  <td>1</td>
                  
                  <td>July, 2024</td>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>2</td>
                  
                  <td>June, 2024</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>3</td>
                  
                  <td>MAY, 2024</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Grand Total</td>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="container heade-d mt-3">
          <h5 style={{ textAlign: "center", padding: "20px" }}>
            Trend of Annual disposal of complaints :
          </h5>
          <div style={{ paddingLeft: "140px", paddingRight: "140px" }}>
            <Table striped bordered hover style={{ padding: "20px" }}>
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th>sr no</th>
                  <th>Year</th>
                  <th>Carried Forward from Previous Year</th>
                  <th>Received</th>
                  <th>Resolved</th>
                  <th>Pending</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                <tr>
                  <td>1</td>
                  <td>2024-25</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2023-24</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Grand Total</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        {/* <p style={{ color: "black", fontSize: "16px", paddingBottom: "10px" }}>
          If not satisfied with the response of the Research Analyst: ANITHA M
          PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566. You can
          lodge your grievances / COMPLAINT with SEBI at{" "}
          <a href="https://scores.sebi.gov.in/" target="_blank">
            https://scores.sebi.gov.in/
          </a>{" "}
          or you may also write to any of the offices of SEBI.{" "}
        </p>
        <p style={{ color: "black", fontSize: "16px", paddingBottom: "20px" }}>
          For any queries, feedback, or assistance, please contact the SEBI
          Office on the Toll-Free Helpline at 1800 22 7575 / 1800 266 7575.
        </p> */}
      </div>
    </div>
    </div>
  )
}

export default Complaint2
