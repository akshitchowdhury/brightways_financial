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

        {/* Existing Accordion Items... */}

        <AccordionItem
          title="Grievance Redressal/ Escalation Matrix"
          content={
            <div>
              <h3>SEBI Registration Details</h3>
              <ul>
                <li><b>Registered Name:</b> ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES</li>
                <li><b>Trade Name or Website:</b> <a href="https://www.brightwaysfinancial.com">https://www.brightwaysfinancial.com</a></li>
                <li><b>Type of Registration:</b> Research Analyst</li>
                <li><b>Registration Number:</b> INH000010566</li>
                <li><b>Validity:</b> Jun 26, 2024 - Perpetual</li>
                <li><b>Registered Office Address:</b> #188 3rd floor Janardan Towers Near Agara Outer Ring Road Sarjapur Main Road Bangalore 560102</li>
              </ul>

              <h3>Details of Principal Officer</h3>
              <ul>
                <li><b>Name:</b> ANITHA.M</li>
                <li><b>Phone:</b> 6363360542</li>
                <li><b>Email:</b> <a href="mailto:Support@brightwaysfinancial.com">Support@brightwaysfinancial.com</a></li>
              </ul>

              <h3>Details of Compliance Officer</h3>
              <ul>
                <li><b>Name:</b> ANITHA.M</li>
                <li><b>Phone:</b> 6363360542</li>
                <li><b>Email:</b> <a href="mailto:Support@brightwaysfinancial.com">Support@brightwaysfinancial.com</a></li>
              </ul>

              <h3>Details of Customer/Head Customer Support</h3>
              <ul>
                <li><b>Name:</b> ANITHA.M</li>
                <li><b>Phone:</b> 6363360542</li>
                <li><b>Email:</b> <a href="mailto:Support@brightwaysfinancial.com">Support@brightwaysfinancial.com</a></li>
              </ul>

              <h3>Complaints can be addressed during the following working hours:</h3>
              <ul>
                <li><b>Days:</b> Monday to Friday</li>
                <li><b>Time:</b> 11:00 AM to 4:00 PM</li>
              </ul>
              <p>Please note that our support team is unavailable on Saturdays, Sundays, and public holidays. However, if you wish to reach out to us, you can contact our customer support at <a href="https://www.brightwaysfinancial.com">https://www.brightwaysfinancial.com</a>.</p>
            </div>
          }
        />
      </div>
      <br/>
    </div>
  );
}
