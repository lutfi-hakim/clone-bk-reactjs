import React from "react";
import "./index.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container-content">
        <div className="content">
          <h3>BURGER KING® DELIVERY</h3>
          <div className="contact">
            <div className="phone">
              <img src="https://bkdelivery.co.id/static/website/img/Footer-Phone1x.4bb5b96c80cd.png" />
              <span>15000 25</span>
            </div>
            <div className="email">
              <img src="https://bkdelivery.co.id/static/website/img/footer-email1x.0dc312afa145.png" />
              <span>guestservice@burgerking.co.id</span>
            </div>
            <div className="sosmed">
              <img src="https://bkdelivery.co.id/static/website/img/Footer-FB1x.722220d65dae.png" />
              <img src="https://bkdelivery.co.id/static/website/img/Footer-IG1x.f835d32a42b6.png" />
              <img src="https://bkdelivery.co.id/static/website/img/Footer-TW1x.a7fc098003f1.png" />
              <img src="https://bkdelivery.co.id/static/website/img/Footer-YT1x.e2c5cc228dff.png" />
            </div>
          </div>

          <div className="menu-footer">
            <a>About Us</a>
            <a>Kebijakan Privasi</a>
            <a>Syarat dan Ketentuan</a>
            <a>
              TM & © 2023 Burger King Corporation. Used Under License. All
              rights reserved.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
