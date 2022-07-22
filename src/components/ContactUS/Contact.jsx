import React,{useEffect} from "react";
import Style from "./contact.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
} from "react-icons/fa";

function Contact() {
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=1.305385;
        const lon=30.923029;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
  return (
    <div className="container">
      <div className="bg">
        <div className="row">
          <h2 className={Style.title}>
            Contact <strong>Us</strong>
          </h2>
          <div>
            <iframe id="iframeId" height="500px" width="100%"></iframe>
        </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="contactForm">
              <h2 className={Style.title}>Get In Touch</h2>
              <form action="" className={Style.contactForm + " " + "row"}>
                <div className={Style.fromGrop + " " + "col-md-6"}>
                  <input
                    type="text"
                    name="name"
                    className={Style.fromCtrl}
                    required="required"
                    placeholder="Name"
                  />
                </div>
                <div className={Style.fromGrop + " " + "col-md-6"}>
                  <input
                    type="email"
                    name="email"
                    className={Style.fromCtrl}
                    required="required"
                    placeholder="Email"
                  />
                </div>
                <div className={Style.fromGrop + " " + "col-md-12"}>
                  <input
                    type="text"
                    name="Subject"
                    className={Style.fromCtrl}
                    required="required"
                    placeholder="Subject"
                  />
                </div>
                <div className={Style.fromGrop + " " + "col-md-12"}>
                  <textarea
                    type="message"
                    name="message"
                    className={Style.fromCtrl}
                    rows="8"
                    required="required"
                    placeholder="your message hear"
                  >
                    {" "}
                  </textarea>
                </div>
                <div className={Style.fromGrop + " " + "col-md-12"}>
                  <button
                    className={Style.fromCtrl}
                    style={{
                      background: "#FE980F",
                      color: "#FFFFFF",
                      border: "none",
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-4">
            <div className={Style.contactInfo}>
              <h2 className={Style.title}>Contact Info</h2>
              <address>
                <p>E-Shopper Inc.</p>
                <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
                <p>Newyork USA</p>
                <p>Mobile: +2346 17 38 93</p>
                <p>Fax: 1-714-252-0026</p>
                <p>Email: info@e-shopper.com</p>
              </address>
              <div className={Style.socialNetwork}>
                <h2 className={Style.title}>Social Networking</h2>
                <ul>
                  <FaFacebookF style={{ fontSize: "20px" }} />
                  <FaTwitter style={{ fontSize: "20px" }} />
                  <FaGooglePlusG style={{ fontSize: "20px" }} />
                  <FaYoutube style={{ fontSize: "20px" }} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
