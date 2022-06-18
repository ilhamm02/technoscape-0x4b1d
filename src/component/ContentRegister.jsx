import React from "react";

class ContentRegister extends React.Component {
  render() {
    return (
      <div className="container-fluid content-register col-11 col-md-5">
        <div className="text-center mb-4">
          <h4>
            <b>Daftar dulu, yuk</b>
          </h4>
        </div>
        <div className="bg-white border border-1 shadow-sm">
          <div className="mx-4 mt-4 pt-2 mb-4">
            <span>Ketikan alamat email</span>
            <div className="input-group mb-3 mb-4 pb-2 mt-1">
              <input
                type="email"
                className="form-control"
                placeholder="Ketikan email anda"
              />
            </div>
            <button className="btn col-12 btn-masuk">
              <span>
                <b>Daftar</b>
              </span>
            </button>
            <div className="bottom-register text-center text-muted pt-2 mt-4">
              <p>
                Sudah punya akun ?
                <a href="/login" className="text-dark mx-1">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentRegister;
