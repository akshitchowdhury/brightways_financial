import React from "react";

function Contact() {
  return (
    <>
      <div className="contact_us mt-3">
        

{/* Updated Code 27/1/2025 */}
<div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

        <div className="row me-0">
          <div className="col-lg-6 col-md-6 p-0 ">
            <div className="map-contact">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.218525420249!2d77.62803499612643!3d12.92027487109164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14865feb290f%3A0x3e6a119cb3b97490!2sAgara%20Village%2C%201st%20Sector%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1678266890061!5m2!1sen!2sin"
                style={{ width: "100%", height: "350px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 col-md-6 p-0">
            <div className="at-contactusvfour">
              <div class="at-sectiontitleborder">
                <h2>Contact Us</h2>
              </div>
              <fieldset>
                <ul class="at-contactinfo">
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span className="px-2">+91 6363 360542</span>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <span className="px-2">
                      <a href="#" style={{ color: "white" }}>
                        Support@brightwaysfinancial.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <span className="px-2">
                      <a href="#" style={{ color: "white" }}>
                        info@brightwaysfinancial.com
                      </a>
                    </span>
                  </li>

                  <li className="d-flex">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <address className="px-2">
                      Brightways financial services
                      <br />
                      #188 3rd floor Janardan
                      <br /> towers near Agra Outer Ring Road ,
                      <br />
                      sarjapur main road
                      <br />
                      Bangalore 560102
                    </address>
                  </li>
                </ul>
              </fieldset>
              {/* <div>
                {" "}
                SEBI SCORES :{" "}
                <a href="https://scores.sebi.gov.in/" target="_blank">
                  https://scores.sebi.gov.in/
                </a>
              </div>
              <div>
                {" "}
                SEBI ODR :{" "}
                <a href="https://smartodr.in/login" target="_blank">
                  https://smartodr.in/
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
