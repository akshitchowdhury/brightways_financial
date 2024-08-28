import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Service() {
  return (
    <>
      <div
        className="about-pages mt-4"
        style={{
          backgroundImage: `linear-gradient(rgb(2 5 18 / 52%),rgb(12 12 12 / 54%)),
        url('/23.jpg')`,
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="pagetitle">
            <h1>Pricing</h1>
          </div>
        </div>
      </div>
      <div className="title-service">
        <div className="container">
          <div className="title_hero">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Basic stock cash
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Daily base 1 sms</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>2 Months</th>
                              <th>4 Months</th>
                              {/* <th>Yearly</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>16,000</span>
                                <br></br>
                                <span>+ 2,880(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 18,880
                                </p>
                              </td>

                              <td>
                                <span>26,999</span>
                                <br></br>
                                <span>+ 4,860(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 31,859
                                </p>
                              </td>

                              <td>
                                <span>49,999</span>
                                <br></br>
                                <span>+ 9000(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 58,999
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        HNI stock cash pro
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Weekly 3 - 4 calls</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>2 Months</th>
                              <th>4 Months</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>29,000</span>
                                <br></br>
                                <span>+ 5,220(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 34,220
                                </p>
                              </td>

                              <td>
                                <span>49,999</span>
                                <br></br>
                                <span>+ 9,000(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 58,999
                                </p>
                              </td>

                              <td>
                                <span>80,000</span>
                                <br></br>
                                <span>+ 14,400(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 94,400
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Stock Cash Pro
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Weekly base 4 - 5 calls</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                      <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>3 Months</th>
                              <th>6 Months</th>
                              <th>Yearly</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>50000</td>
                              <td>100000</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div> */}
              {/* 3 */}
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Basic Stock Future
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Daily base 1 sms</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>2 Months</th>
                              <th>4 Months</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>35,000</span>
                                <br></br>
                                <span>+ 6,300(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 41,300
                                </p>
                              </td>

                              <td>
                                <span>60,000</span>
                                <br></br>
                                <span>+ 10,800(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 70,800
                                </p>
                              </td>

                              <td>
                                <span>1,10,000</span>
                                <br></br>
                                <span>+ 19,800(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 1,29,800
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        HNI Stock Future pro
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Weekly 3 - 4 calls</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>2 Months</th>
                              <th>4 Months</th>
                              <th>6 Months</th>
                              {/* <th>4 Months</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>80,000</span>
                                <br></br>
                                <span>+ 14,400(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 94,400
                                </p>
                              </td>

                              <td>
                                <span>140,000</span>
                                <br></br>
                                <span>+ 25,200(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 1,65,200
                                </p>
                              </td>
                              <td>
                                <span>250,000</span>
                                <br></br>
                                <span>+ 45,000(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 2,95,600
                                </p>
                              </td>
                              <td>
                                <span>360,000</span>
                                <br></br>
                                <span>+ 64,800(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 4,24,800
                                </p>
                              </td>

                              {/* <td></td> */}
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Basic stock option
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Daily base 1 sms</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>2 Months</th>
                              <th>4 Months</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>35,000</span>
                                <br></br>
                                <span>+ 6,300(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 41,300
                                </p>
                              </td>

                              <td>
                                <span>60,000</span>
                                <br></br>
                                <span>+ 10,800(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 70,800
                                </p>
                              </td>

                              <td>
                                <span>1,10,000</span>
                                <br></br>
                                <span>+ 19,800(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 1,29,800
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
              {/* 4 */}
              {/* <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        HNI stock option
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Weekly 3 - 4 calls</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>2 Months</th>
                            
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>50,000</span>
                                <br></br>
                                <span>+ 9,000(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 59,000
                                </p>
                              </td>

                              <td>
                                <span>90,000</span>
                                <br></br>
                                <span>+ 16,200(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 1,06,000
                                </p>
                              </td>

                            
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        HNI stock option pro
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Weekly 3 - 4 calls</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>2 Months</th>
                              <th>4 Months</th>
                              <th>6 Months</th>
                              {/* <th>4 Months</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>80,000</span>
                                <br></br>
                                <span>+ 14,400(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 94,400
                                </p>
                              </td>

                              <td>
                                <span>140,000</span>
                                <br></br>
                                <span>+ 25,200(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 1,65,200
                                </p>
                              </td>
                              <td>
                                <span>250,000</span>
                                <br></br>
                                <span>+ 45,000(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 2,95,600
                                </p>
                              </td>
                              <td>
                                <span>360,000</span>
                                <br></br>
                                <span>+ 64,800(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 4,24,800
                                </p>
                              </td>

                              {/* <td></td> */}
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>

              {/* 5 */}
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Basic Index option
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Daily base 1 sms</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>2 Months</th>
                              <th>4 Months</th>
                              {/* <th>Yearly</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>25,000</span>
                                <br></br>
                                <span>+ 4,500(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 29,500
                                </p>
                              </td>

                              <td>
                                <span>40,000</span>
                                <br></br>
                                <span>+ 7,200(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 47,200
                                </p>
                              </td>

                              <td>
                                <span>70,000</span>
                                <br></br>
                                <span>+ 12,600(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 82,600
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
              {/* 6 */}
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        HNI Index option pro
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Weekly base 3 - 4 calls</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>2 Months</th>
                              <th>4 Months</th>
                              <th>6 Months</th>
                              {/* <th>Yearly</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>80,000</span>
                                <br></br>
                                <span>+ 14,400(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 94,400
                                </p>
                              </td>

                              <td>
                                <span>1,40,000</span>
                                <br></br>
                                <span>+ 25,200(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 1,65,200
                                </p>
                              </td>

                              <td>
                                <span>2,50,000</span>
                                <br></br>
                                <span>+ 45,000(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 2,95,600
                                </p>
                              </td>
                              <td>
                                <span>360,000</span>
                                <br></br>
                                <span>+ 64,800(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 4,24,800
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
              {/* 7 */}
              {/* <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Momentum Trade
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Weekly 2-3 calls</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>2 Months</th>
                           
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>50,000</span>
                                <br></br>
                                <span>+ 9,000(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 59,000
                                </p>
                              </td>

                              <td>
                                <span>80,000</span>
                                <br></br>
                                <span>+ 14,400(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 94,400
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Momentum Call
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Weekly 2-3 calls</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>2 Months</th>
                              <th>4 Months</th>
                              <th>6 Months</th>
                              {/* <th>6 Months</th>
                              <th>Yearly</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>50,000</span>
                                <br></br>
                                <span>+ 9,000(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 59,000
                                </p>
                              </td>

                              <td>
                                <span>80,000</span>
                                <br></br>
                                <span>+ 14,400(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 94,400
                                </p>
                              </td>
                              <td>
                                <span>140,000</span>
                                <br></br>
                                <span>+ 25,200(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 165,200
                                </p>
                              </td>
                              <td>
                                <span>250,000</span>
                                <br></br>
                                <span>+ 45,000(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 295,600
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
              {/* 8 */}
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Technical course
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div></div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                        <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              {/* <th>3 Months</th>
                              <th>6 Months</th>
                              <th>Yearly</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span>45,000</span>
                                <br></br>
                                <span>+ 8,100(18% GST)</span>
                                <br></br>
                                <p style={{ borderTop: "1px solid grey" }}>
                                  <b>TOTAL</b> : 53,100
                                </p>
                              </td>
                              {/* <td>90000</td>
                              <td>0</td>
                              <td></td> */}
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
              {/* 9 */}
              {/* <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                         Option Combo
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier">
                        <div>Daily 1 call</div>
                      </Tab>
                      <Tab eventKey="pricing" title="Pricing">
                      <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>3 Months</th>
                              <th>6 Months</th>
                              <th>Yearly</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>50000</td>
                              <td>95000</td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="at-service-60">
                  <div class="at-serviceicon">
                    <i class="fa fa-cart-plus"></i>
                  </div>
                  <div class="at-title">
                    <h3>
                      <a
                        href="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Jackpot option plus
                      </a>
                    </h3>
                  </div>
                  <div className="at-description mt-4">
                    <Tabs
                      defaultActiveKey="features"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                      <Tab eventKey="features" title="Features">
                        <p class="marginbottom">FOLLOW UP: YES</p>
                      </Tab>
                      <Tab eventKey="carrier" title="Carrier"></Tab>
                      <Tab eventKey="pricing" title="Pricing">
                      <table class="table table-bordered margintop">
                          <thead>
                            <tr>
                              <th>Monthly</th>
                              <th>3 Months</th>
                              <th>6 Months</th>
                              <th>Yearly</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>70000</td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
