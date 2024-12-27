import React from 'react';
import './DisclosureDisclaimer.css';

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
        {title}
      </div>
      <div className={`accordion-content ${isActive ? 'active' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default function Investor() {
  return (
    <div className="disclaimer-container">
      <div>
        <img
          src="../investor.jpg"
          alt="Investor"
          style={{ width: "100%", height: "400px" }}
        />
      </div>

      <h1 className="disclaimer-title">Investor Charter in respect of Research Analyst (RA)</h1>

      <div className="accordion">
        <AccordionItem
          title="A. Vision and Mission Statements for Investors"
          content={
            <div>
              <h3>OUR VISION</h3>
              <ul>
                <li>To protect the interests by enabling them to understand the risks involved and invest in fair, transparent, secure market, and to get services in a timely and efficient manner.</li>
              </ul>
              <h3>OUR MISSION</h3>
              <ul>
                <li>
                  To have streamlined procedures to ensure ease of transacting/investing in securities market for investors.
                </li>
                <li>
                  To ensure that SEBI registered intermediaries/regulated entities adhere to their investor charters, including grievance redressal mechanism.
                </li>
                <li>
                  To enable investors to understand risks involved before investing.
                </li>
                <li>
                  To ensure fair and equitable treatment to investors.
                </li>
                <li>
                  To ensure confidentiality of information shared by investors unless such information is required to be provided in furtherance of discharging legal obligations or investors have provided specific consent to share such information.
                </li>
                <li>
                  To analyse the causes of investor grievances on a periodic basis and make appropriate policy amendments if required.
                </li>
                <li>
                  To provide for alternative dispute resolution mechanism in agreements between investors and Market Infrastructure Institutions/ Intermediaries.
                </li>
                <li>
                  To encourage innovative and digital solutions in securities market.
                </li>
              </ul>
            </div>
          }
        />


          <AccordionItem
          title="INVESTORs have RIGHT to :"
          content={
            <ul>
              <li>Get fair and equitable treatment.</li>
              <li>Expect redressal of investor grievances filed in SCORES in a time bound manner.</li>
              <li>Get quality services from SEBI recognized Market Infrastructure Institutions and SEBI registered
                  intermediaries/regulated entities/ Asset Management Companies including right to exit at fair and reasonable terms from the securities market related product or service and avail Online Dispute Resolution mechanism for the disputes, if any, arising therefrom.
               </li>
            </ul>
          }
        />


           <AccordionItem
          title="INVESTORS have RESPONSIBILITY to :"
          content={
            <ul>
              <li>Deal with SEBI recognised Market Infrastructure Institutions and SEBI registered intermediaries / regulated entities only.</li>
              <li>Update their contact details like address, mobile number, email address, nomination, etc. and other key KYC details in case of any change.</li>
              <li>Ensure that grievances are taken up with the concerned entities within time limits prescribed.</li>
              <li>Ensure that their accounts are operated only for their own benefit.</li>
            </ul>
          }
        />

          
        <AccordionItem
          title="B. Details of business transacted by the Research Analyst to the investors"
          content={
            <ul>
              <li>To publish a research report based on the research activities of the RA.</li>
              <li>To provide an independent unbiased view on securities.</li>
              <li>To offer unbiased recommendations, disclosing the financial interests in recommended securities.</li>
              <li>To provide research recommendations, based on analysis of publicly available information and known observations.</li>
              <li>Conduct audits annually.</li>
            </ul>
          }
        />

        <AccordionItem
          title="C. Details of services provided to investors (No Indicative Timelines)"
          content={
            <ul>
              <li>Onboarding of Clients</li>
              <li>
                Disclosure to Clients
                <ol>
                  <li>
                    To distribute research reports and recommendations to the
                    clients without discrimination.
                  </li>
                  <li>
                    To maintain confidentiality w.r.t publication of the
                    research report until made available in the public domain.
                  </li>
                </ol>
              </li>
            </ul>
          }
        />

        <AccordionItem
          title="D. Details of grievance redressal mechanism and how to access it"
          content={
            <ul>
              <li>
                In case of any grievance/complaint, an investor should approach
                the concerned research analyst and ensure the grievance is
                resolved within 30 days.
              </li>
              <li>
                If the investor's complaint is not redressed satisfactorily, one
                may lodge a complaint with SEBI on SEBI's SCORES portal, a
                centralised web-based complaint redressal system.
              </li>
              <li>
                SEBI takes up the complaints registered via SCORES with the
                concerned intermediary for timely redressal. SCORES facilitates
                tracking the status of the complaint.
              </li>
              <li>
                Regarding physical complaints, investors may send their
                complaints to the Office of Investor Assistance and Education,
                Securities and Exchange Board of India, SEBI Bhavan. Plot No.
                C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai –
                400 051.
              </li>
            </ul>
          }
        />


           <AccordionItem
          title="DO's for Investors :"
          content={
            <ul>
              <li>Always deal with SEBI-registered Research Analysts.</li>
              <li>Ensure that the Research Analyst has a valid registration certificate.</li>
              <li>Check for the SEBI registration number.</li>
              <li>Please refer to the list of all SEBI registered Research Analysts which is available on the SEBI website at the following link: https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14 </li>
              <li>Always pay attention towards disclosures made in the research reports before investing. </li>
              <li>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments.</li>
              <li>Before buying securities or applying for a public offer, check for the research recommendation provided by your research Analyst.</li>
              <li>Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.</li>
              <li>Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
              <li>Read and understand the documents carefully before investing.</li>
              <li>Know about the Investor Grievance Redressal Mechanism.</li>
              <li>Know the risks involved before investing.</li>
              <li>Keep track of account statements and promptly bring any discrepancy noticed to the concerned stock exchange, intermediary or Asset Management Company.</li>
              <li>Know about various fees, charges, margins, premium, etc. involved in the transactions.</li>
              <li>Preserve relevant transaction related documents.</li>
            </ul>
          }
        />


          <AccordionItem
          title="DONT's for Investors:"
          content={
            <ul>
              <li>Always deal with SEBI-registered Research Analysts.</li>
              <li>Do not provide funds for investment to the Research Analyst.</li>
              <li>Don’t fall prey to luring advertisements or market rumours.</li>
              <li>Do not get attracted to limited-period discounts or other incentives, gifts, etc. offered by the Research Analyst.</li>
              <li>Do not share login credentials and passwords of your trading and demat accounts with the Research Analyst.</li>
              <li>Don't make payments in cash while making any investment in securities market, beyond the prescribed limit.</li>
              <li>Don't share your critical information like account details, login ids, passwords, DIS, etc. with anyone.</li
            </ul>
          }
        />

          

        <AccordionItem
          title="E. Expectations from the investors (Responsibilities of investors)"
          content={
            <>
              <h3>Do's</h3>
              <ul>
                <li>Always deal with SEBI-registered Research Analysts.</li>
                <li>Ensure that the Research Analyst has a valid registration certificate.</li>
                <li>Check for the SEBI registration number.</li>
                <li>
                  Please refer to the list of all SEBI registered Research
                  Analysts which is available on the SEBI website at the
                  following link: https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14
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
                <li>Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
              </ul>
              <h3>Don'ts</h3>
              <ul>
                <li>Do not provide funds for investment to the Research Analyst.</li>
                <li>Don't fall prey to luring advertisements or market rumours.</li>
                <li>
                  Do not get attracted to limited-period discounts or other
                  incentives, gifts, etc. offered by the Research Analyst.
                </li>
                <li>
                  Do not share login credentials and passwords of your trading
                  and demat accounts with the Research Analyst.
                </li>
              </ul>
            </>
          }         
        />
        <AccordionItem
          title="F. The Research analysis query"
          content={
            <>
              
              <ul>
               
               <p style={{ color: "black", fontSize: "12px", marginTop: "14px" }}>
            The Research Analyst: ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566. 
            You can lodge your grievances / COMPLAINT at 
            <a href="mailto:Support@brightwaysfinancial.com" style={{marginLeft:"2px"}}>Support@brightwaysfinancial.com </a>
            with SEBI at <a href="https://scores.sebi.gov.in/" style={{marginLeft:"2px"}}>https://scores.sebi.gov.in/</a> SEBI ODR :
            <a href="https://smartodr.in/" style={{marginLeft:"2px"}}>https://smartodr.in/</a> or you may also write to any of the offices of SEBI.
          </p>
          <p style={{ color: "black", fontSize: "12px", marginTop: "10px" }}>
            For any queries, feedback, or assistance, please contact 6363360542, the SEBI Office on the Toll-Free Helpline at 1800 22 7575 
          </p>
               
              </ul>
              <div className="card-content">
      
        </div>
            </>
          }         
        />
      </div>
      <br/>

      {/* <div className="card">
        <div className="card-content">
          <p style={{ color: "black", fontSize: "12px", marginTop: "14px" }}>
            The Research Analyst: ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566. 
            You can lodge your grievances / COMPLAINT at 
            <a href="mailto:Support@brightwaysfinancial.com" style={{marginLeft:"2px"}}>Support@brightwaysfinancial.com </a>
            with SEBI at <a href="https://scores.sebi.gov.in/" style={{marginLeft:"2px"}}>https://scores.sebi.gov.in/</a> SEBI ODR :
            <a href="https://smartodr.in/" style={{marginLeft:"2px"}}>https://smartodr.in/</a> or you may also write to any of the offices of SEBI.
          </p>
          <p style={{ color: "black", fontSize: "12px", marginTop: "10px" }}>
            For any queries, feedback, or assistance, please contact 6363360542, the SEBI Office on the Toll-Free Helpline at 1800 22 7575 
          </p>
        </div>
      </div> */}
    </div>
  );
}
