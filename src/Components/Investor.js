import React from "react";

function Investor() {
  return (
    <>
      <div>
        <img
          src="../investor.jpg"
          alt=""
          style={{ width: "100%", height: "400px" }}
        />
      </div>

      <div class="elementor-widget container mt-5">
        <div
          className="heade-d"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Investor Charter in respect of Research Analyst (RA)</h3>
          {/* <div>
            <a href="https://scores.sebi.gov.in/" target="_blank">
              https://scores.sebi.gov.in/
            </a>
          </div> */}
        </div>
        <div className="vision">
          <h5>A. Vision and Mission Statements for Investors</h5>
          <div className="vison-b">
            <div>Vision</div>
            <ul>
              <li>Invest in knowledge & safety</li>
            </ul>
          </div>
          <div className="vison-b">
            <div>Mission</div>
            <ul>
              <li>
                Every investor should be able to invest in the right investment
                products based on their needs, manage and monitor them to meet
                their goals, access reports and enjoy financial wellness.
              </li>
            </ul>
          </div>
        </div>
        <div className="vision">
          <h5>
            B. Details of business transacted by the Research Analyst to the
            investors.
          </h5>
          <div className="vison-b">
            <ul>
              <li>
                To publish a research report based on the research activities of
                the RA.
              </li>
              <li>To provide an independent unbiased view on securities.</li>
              <li>
                To offer unbiased recommendations, disclosing the financial
                interests in recommended securities.
              </li>
              <li>
                To provide research recommendations, based on analysis of
                publicly available information and known observations.
              </li>
              <li>Conduct audits annually.</li>
            </ul>
          </div>
        </div>
        <div className="vision">
          <h5>
            C. Details of services provided to investors (No Indicative
            Timelines)
          </h5>
          <div className="vison-b">
            <ul>
              <li>Onboarding of Clients</li>
              <li>Disclosure to Clients</li>
              <ol>
                <li>
                  To distribute research reports and recommendations to the
                  clients without discrimination.
                </li>
                <li>
                  To maintain confidentiality w.r.t publication of the research
                  report until made available in the public domain.
                </li>
              </ol>
            </ul>
          </div>
        </div>
        <div className="vision">
          <h5>
            D. Details of grievance redressal mechanism and how to access it
          </h5>
          <div className="vison-b">
            <ul>
              <li>
                In case of any grievance/complaint, an investor should approach
                the concerned research analyst and ensure the grievance is
                resolved within 30 days.
              </li>
              <li>
                If the investor’s complaint is not redressed satisfactorily, one
                may lodge a complaint with SEBI on SEBI’s SCORES portal, a
                centralised web-based complaint.
              </li>
              <li>
                redressal system. SEBI takes up the complaints registered via
                SCORES with the concerned intermediary for timely redressal.
                SCORES facilitates tracking the status of the complaint.
              </li>
              <li>
                Regarding physical complaints, investors may send their
                complaints to the Office of Investor Assistance and Education,
                Securities and Exchange Board of India, SEBI Bhavan. Plot No.
                C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400
                051.
              </li>
            </ul>
          </div>
        </div>
        <div className="vision">
          <h5>
            E. Expectations from the investors (Responsibilities of investors)
          </h5>

          <br />
          <h5>Do’s</h5>

          <br />
          <div className="vison-b">
            <ul>
              <li>Always deal with SEBI-registered Research Analysts.</li>
              <li>
                Ensure that the Research Analyst has a valid registration
                certificate..
              </li>
              <li>Check for the SEBI registration number.</li>
              <li>
                Please refer to the list of all SEBI registered Research
                Analysts which is available on the SEBI website at the following
                link:
                https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14
              </li>
              <li>
                Always pay attention towards disclosures made in the research
                reports before investing.
              </li>
              <li>
                Pay your Research Analyst through banking channels only and
                maintain duly signed receipts mentioning the details of your
                payments.
              </li>
              <li>
                Before buying securities or applying for a public offer, check
                for the research recommendation provided by your research
                Analyst.
              </li>
              <li>
                Ask all relevant questions and clear your doubts with your
                Research Analyst before acting on the recommendation.
              </li>
              <li>
                Inform SEBI about Research Analyst offering assured or
                guaranteed returns.
              </li>
            </ul>
          </div>
          <h5>Don’ts</h5>

          <br />
          <div className="vison-b">
            <ul>
              <li>
                Do not provide funds for investment to the Research Analyst.
              </li>
              <li>
                Don’t fall prey to luring advertisements or market rumours.
              </li>
              <li>
                Do not get attracted to limited-period discounts or other
                incentives, gifts, etc. offered by the Research Analyst.
              </li>
              <li>
                Do not share login credentials and passwords of your trading and
                demat accounts with the Research Analyst.
              </li>
            </ul>
          </div>
          <div>
            <p style={{ color: "black", fontSize: "12px", marginTop: "14px" }}>
              If not satisfied with the response of the Research Analyst: ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566. 
              You can lodge your grievances / COMPLAINT at 
              <a href="Support@brightwaysfinancial.com" style={{marginLeft:"2px"}}>Support@brightwaysfinancial.com </a>with SEBI at <a href="https://scores.sebi.gov.in/" style={{marginLeft:"2px"}}>https://scores.sebi.gov.in/</a> SEBI ODR :
              <a href="https://scores.sebi.gov.in/" style={{marginLeft:"2px"}}>https://smartodr.in/</a>  or you may also write to any of the offices of SEBI.

            </p>
            <p style={{ color: "black", fontSize: "12px", marginTop: "-10px" }}>
            For any queries, feedback, or assistance, please contact  6363360542,  the SEBI Office on the Toll-Free Helpline at 1800 22 7575 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Investor;
