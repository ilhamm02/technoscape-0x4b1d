import React from "react";

import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

import ovologo from "../styles/img/OVO.png";
import gopaylogo from "../styles/img/GOJEK.png";
import finlogo from "../styles/img/fint-black.png";
import gopaycolor from "../styles/img/GOJEK-COLOUR.png";
import ovocolor from "../styles/img/OVO-COLOUR.png";

class ContentHome extends React.Component {
  state = {
    loginStatus: false,
    position: "position-1",
    telepon: "",
    gopay: "",
    ovo: "",
  };

  processPage1 = () => {
    if (this.state.telepon !== "") {
      this.setState({ position: "position-2" });
    }
  };

  processPage2 = () => {
    if (this.state.gopay !== "" && this.state.ovo !== "") {
      this.setState({ position: "finish", loginStatus: true });
    }
  };

  fetchInputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log({
      name,
      value,
    });
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <div className="container">
          {/* header section */}
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            className="head-section"
          >
            <Container>
              <Navbar.Brand href="#home">
                <img src={finlogo} alt="fin-logo" width="100" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#deets">Notifikasi</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* body section */}
          {this.state.loginStatus ? (
            <div className="container mt-4 mb-4 pt-4 home-section pb-4">
              <div className="row">
                <div className="col-12 col-md-7 mx-2 left-home mb-4">
                  <p>kiri</p>
                </div>
                <div className="col-12 col-md-4 right-home mb-4">
                  <div className="content-right-home">
                    <p>
                      <b>Keuangan saya</b>
                    </p>
                    {/*box ungu dan hijau */}
                    <div className="row">
                      <div className="col-6 col-md-6 mb-3">
                        <div className="content-box pt-2 pb-1 ovo-box shadow text-white pb-2">
                          <div className="d-flex justify-content-between mx-2">
                            <div>
                              <img src={ovologo} alt="logo" />
                              <p className="pt-2">08982442470</p>
                              <span className="pt-2">Saldo Kamu</span>
                              <p>
                                <b>RP. 750.000</b>
                              </p>
                            </div>
                            <div>
                              <b>OVO</b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 mb-3">
                        <div className="content-box pt-2 pb-1 gopay-box shadow text-white pb-2">
                          <div className="d-flex justify-content-between mx-2">
                            <div>
                              <img src={gopaylogo} alt="logo" />
                              <p className="pt-2">08982442470</p>
                              <span className="pt-2">Saldo Kamu</span>
                              <p>
                                <b>RP. 750.000</b>
                              </p>
                            </div>
                            <div>
                              <b>Gopay</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-2">
                      <div className="col-12 box-pengeluaran-dapat mb-2">
                        <div className="mx-2 content-box-pengeluaran-dapat mt-4">
                          <div className="d-flex justify-content-between pb-2">
                            <div className="row col-9">
                              <div className="col-1">
                                <img src={gopaycolor} alt="logo" />
                              </div>
                              <div className="col-9 row mx-1">
                                <div className="col-12">
                                  <b className="col-12">Gopay</b>
                                  <p className="text-muted">minggu ini</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-4">
                              <span className="text-success col-12">
                                + RP. 200.000
                              </span>
                              <br />
                              <span className="text-danger col-12">
                                - RP. 100.000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 box-pengeluaran-dapat mb-2">
                        <div className="mx-2 content-box-pengeluaran-dapat mt-4">
                          <div className="d-flex justify-content-between pb-2">
                            <div className="row col-9">
                              <div className="col-1">
                                <img src={ovocolor} alt="logo" />
                              </div>
                              <div className="col-9 row mx-1">
                                <div className="col-12">
                                  <b className="col-12">OVO</b>
                                  <p className="text-muted">minggu ini</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-4">
                              <span className="text-success col-12">
                                + RP. 200.000
                              </span>
                              <br />
                              <span className="text-danger col-12">
                                - RP. 100.000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2 riwayat-transaksi">
                <p>
                  <b>Riwayat Transaksi</b>
                </p>
                <div className="d-flex mb-4">
                  <button className="rounded btn border border-1 mx-2">
                    {" "}
                    Hari ini
                  </button>
                  <button className="rounded btn border border-1 mx-2">
                    {" "}
                    Minggu ini
                  </button>
                  <button className="rounded btn border border-1 mx-2">
                    {" "}
                    Bulan ini
                  </button>
                </div>
                <div className="content-riwayat-transaksi">
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                      <div className="box-pengeluaran-dapat">
                        <div className="mx-2 content-box-pengeluaran-dapat pt-3">
                          <div className="d-flex justify-content-between">
                            <div className="row col-9">
                              <div className="col-1">
                                <img src={gopaycolor} alt="logo" />
                              </div>
                              <div className="col-9 row mx-1">
                                <div className="col-12">
                                  <b className="col-12">
                                    Pembayaran - Token Listrik
                                  </b>
                                  <p className="text-muted">5 days ago</p>
                                </div>
                              </div>
                            </div>
                            <div className="mx-1">
                              <span className="text-success col-12">
                                + RP. 200.000
                              </span>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <div className="box-pengeluaran-dapat">
                        <div className="mx-2 content-box-pengeluaran-dapat pt-3">
                          <div className="d-flex justify-content-between">
                            <div className="row col-9">
                              <div className="col-1">
                                <img src={ovocolor} alt="logo" />
                              </div>
                              <div className="col-9 row mx-1">
                                <div className="col-12">
                                  <b className="col-12">Pembayaran - PAM AIR</b>
                                  <p className="text-muted">5 days ago</p>
                                </div>
                              </div>
                            </div>
                            <div className="mx-1">
                              <span className="text-danger col-12">
                                - RP. 200.000
                              </span>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <div className="box-pengeluaran-dapat">
                        <div className="mx-2 content-box-pengeluaran-dapat pt-3">
                          <div className="d-flex justify-content-between">
                            <div className="row col-9">
                              <div className="col-1">
                                <img src={gopaycolor} alt="logo" />
                              </div>
                              <div className="col-9 row mx-1">
                                <div className="col-12">
                                  <b className="col-12">
                                    Pembayaran - Token Listrik
                                  </b>
                                  <p className="text-muted">5 days ago</p>
                                </div>
                              </div>
                            </div>
                            <div className="mx-1">
                              <span className="text-success col-12">
                                + RP. 200.000
                              </span>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <div className="box-pengeluaran-dapat">
                        <div className="mx-2 content-box-pengeluaran-dapat pt-3">
                          <div className="d-flex justify-content-between">
                            <div className="row col-9">
                              <div className="col-1">
                                <img src={ovocolor} alt="logo" />
                              </div>
                              <div className="col-9 row mx-1">
                                <div className="col-12">
                                  <b className="col-12">Pembayaran - PAM AIR</b>
                                  <p className="text-muted">5 days ago</p>
                                </div>
                              </div>
                            </div>
                            <div className="mx-1">
                              <span className="text-danger col-12">
                                - RP. 200.000
                              </span>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="container content-register col-11 col-md-5 mb-4 pb-4">
                <p className="text-center">Anda berhasil login</p>
                {this.state.position === "position-1" ? (
                  <div className="bg-white border border-1 shadow-sm">
                    <div className="mx-4 mt-4 pt-2 mb-4">
                      <span>
                        Ketikan nomer telepon untu verif ovo dan gopay
                      </span>
                      <div className="input-group mb-3 mb-4 pb-2 mt-1">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ketikan no telepon anda"
                          name="telepon"
                          onChange={this.fetchInputHandler}
                        />
                      </div>
                      <button
                        className="btn col-12 btn-masuk"
                        onClick={this.processPage1}
                      >
                        <span>
                          <b>Kirim</b>
                        </span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-1 shadow-sm">
                    <div className="mx-4 mt-4 pt-2 mb-4">
                      <span>Ketikan OTP Gopay</span>
                      <div className="input-group mb-3 mb-4 pb-2 mt-1">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ketikan no telepon anda"
                          name="gopay"
                          value={this.state.gopay || ""}
                          onChange={this.fetchInputHandler}
                        />
                      </div>
                      <span>Ketikan OTP Gopay</span>
                      <div className="input-group mb-3 mb-4 pb-2 mt-1">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ketikan no telepon anda"
                          name="ovo"
                          onChange={this.fetchInputHandler}
                        />
                      </div>
                      <button
                        className="btn col-12 btn-masuk"
                        onClick={this.processPage2}
                      >
                        <span>
                          <b>Verifikasi</b>
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default ContentHome;
