import React, { useState } from "react";
import { PostCard } from "./PostCard";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdGroupAdd, MdOutlineLocationOn } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsArrowLeftShort } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";
import { BiErrorCircle } from "react-icons/bi";

export const HomeGroup = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cnfpass: "",
  });
  const [defaultModal, setDefaultModal] = useState("signin");

  const data = [
    {
      id: 1,
      poster: "https://i.ibb.co/dpf74y0/Rectangle-5.png",
      heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
      companyName: null,
      date: null,
      articleType: "✍️ Article",
      location: null,
      subText:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      authorName: "Sarthak Kamra",
      authorProfilePic: "https://i.ibb.co/FXc9CVp/Rectangle-3.png",
      url: null,
      views: "1.4k",
    },
    {
      id: 2,
      poster: "https://i.ibb.co/YNQ9GXM/Rectangle-5-1.png",
      heading:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      companyName: null,
      date: null,
      articleType: "🔬️ Education",
      location: null,
      subText:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      authorName: "Sarah West",
      authorProfilePic: "https://i.ibb.co/CtMFfzx/Rectangle-3-1.png",
      url: null,
      views: "1.4k",
    },
    {
      id: 3,
      poster: "https://i.ibb.co/jDrVtTM/Rectangle-5-5.png",
      heading: "Finance & Investment Elite Social Mixer @Lujiazui",
      companyName: null,
      date: "Fri, 12 Oct, 2018",
      articleType: "🗓️ Meetup",
      location: "Ahmedabad, India",
      subText: null,
      authorName: "Ronal Jones",
      authorProfilePic: "https://i.ibb.co/sQ7384G/Rectangle-3-2.png",
      url: "Visit Website",
      views: "1.4k",
    },
    {
      id: 4,
      poster: null,
      heading: "Software Developer",
      companyName: "Innovaccer Analytics Private Ltd.",
      date: null,
      articleType: "💼️ Job",
      location: "Noida, India",
      authorName: "Joseph Gray",
      authorProfilePic: "https://i.ibb.co/0fkZ2DQ/Rectangle-3-3.png",
      url: "Apply on Timesjobs",
      views: "1.4k",
    },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <div>
        <div className="grp-cover-info">
          <picture>
            <source
              srcSet="https://i.ibb.co/ZKXwJzK/Rectangle-2.png"
              media="(min-width:1024px)"
            />
            <source
              srcSet="https://i.ibb.co/ZKXwJzK/Rectangle-2.png"
              media="(min-width:480px)"
            />
            {/* //"https://i.ibb.co/fpGsQd8/Rectangle-2-1.png" */}
            <img
              src="https://i.ibb.co/fpGsQd8/Rectangle-2-1.png"
              alt="cover"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
            {/* "https://i.ibb.co/ZKXwJzK/Rectangle-2.png" */}
          </picture>
          <div className="grp-min-info">
            <p className="grp-name">Computer Engineering</p>
            <p className="grp-count">142,765 Computer Engineers follow this</p>
          </div>
        </div>
        <section className="grp-data">
          <div className="grp-nav-container">
            <nav className="grp-nav">
              <li className="active">
                <p>All Posts(32)</p>
              </li>
              <li>
                <p>Article</p>
              </li>
              <li>
                <p>Event</p>
              </li>
              <li>
                <p>Education</p>
              </li>
              <li>
                <p>Job</p>
              </li>
            </nav>
            <section className="grp-btn-action">
              <div className="grp-btn-post">
                <p>
                  Write a Post <IoMdArrowDropdown className="grp-btn-drop" />
                </p>
              </div>
              <div className="grp-btn-join">
                <p onClick={() => setToggleModal(true)}>
                  <MdGroupAdd className="grp-btn-add" /> Join Group
                </p>
              </div>
              <div className="grp-btn-post show-filter">
                <p>
                  Filter: All
                  <IoMdArrowDropdown className="grp-btn-drop" />
                </p>
              </div>
            </section>
          </div>
          <div className="card-loc-container">
            <div className="grp-card-container">
              {data.map((para) => {
                return <PostCard info={para} key={para.id} />;
              })}
            </div>
            <section className="grp-loc">
              <div>
                <p>
                  <MdOutlineLocationOn className="location-icon" />
                  <input placeholder="Enter your location" />
                  <LuPencil />
                </p>
              </div>
              <div className="grp-info-msg">
                <BiErrorCircle className="error-icon" />
                <p>
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
      <div className="nav-left-arrow">
        <BsArrowLeftShort className="left-icon" />
      </div>
      <div className="pen-icon-container">
        <div className="circle-icon">
          <LuPencil className="pen" />
        </div>
      </div>
      <section className={toggleModal ? "show-popup" : "hidepopup"}>
        <article
          className={
            defaultModal === "signin" ? "modal-container" : "hidepopup"
          }
        >
          <div className="blank-section">
            <MdCancel
              className="cancel-modal"
              onClick={() => setToggleModal(false)}
            />
          </div>
          <div className="modal-notice">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div className="modal-section-container">
            <div className="modal-form">
              <p className="modal-header">
                Create Account
                <span>
                  {" "}
                  <MdCancel
                    className="cancel-modal-mobile"
                    onClick={() => setToggleModal(false)}
                  />
                </span>
              </p>
              <div className="modal-signin">
                <form className="form-section">
                  <p className="form-name">
                    <input
                      value={userData.fname}
                      placeholder="First Name"
                      name="fname"
                      onChange={handleChange}
                    ></input>
                    <input
                      value={userData.lname}
                      placeholder="Last Name"
                      onChange={handleChange}
                    ></input>
                  </p>
                  <input
                    className="form-mail"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <input
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="form-pass"
                  />
                  <input
                    value={userData.cnfpass}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="form-cnf-pass"
                  />
                </form>
                <div className="form-url-btns">
                  <button className="form-create">Create Account</button>
                  <button
                    className="form-create optional-signin"
                    onClick={() => setDefaultModal("login")}
                  >
                    Or, Sign In
                  </button>
                </div>
              </div>
              <button className="fb-create">
                <BsFacebook className="fb-icon" />
                Sign up with Facebook
              </button>
              <button className="fb-create">
                <FcGoogle className="gg-icon" />
                Sign up with Google
              </button>
            </div>
            <section className="modal-deco-section">
              <p className="modal-signin-sugg">
                Already have an account?{" "}
                <span onClick={() => setDefaultModal("login")}>Sign In</span>
              </p>
              <img src="https://i.ibb.co/wJkHzKv/atg-illustration.png" alt="" />
              <p className="modal-sugg">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </section>
            <div className="modal-mobile-notice">
              <p>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </article>
        <article
          className={defaultModal === "login" ? "modal-container" : "hidepopup"}
        >
          <div className="blank-section">
            <MdCancel
              className="cancel-modal"
              onClick={() => setToggleModal(false)}
            />
          </div>
          <div className="modal-notice">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div className="modal-section-container">
            <div className="modal-form">
              <p className="modal-header desktop-only">Sign In</p>
              <p className="modal-header mobile-only">
                Welcome back!
                <span>
                  {" "}
                  <MdCancel
                    className="cancel-modal-mobile"
                    onClick={() => setToggleModal(false)}
                  />
                </span>
              </p>
              <div className="modal-signin">
                <form className="form-section">
                  {/* <p className="form-name">
                    <input
                      value={userData.fname}
                      placeholder="First Name"
                      name="fname"
                      onChange={handleChange}
                    ></input>
                    <input
                      value={userData.lname}
                      placeholder="Last Name"
                      onChange={handleChange}
                    ></input>
                  </p> */}
                  <input
                    className="form-mail"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <input
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="form-pass"
                  />
                  {/* <input
                    value={userData.cnfpass}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="form-cnf-pass"
                  /> */}
                </form>
                <div className="form-url-btns">
                  <button className="form-create">Create Account</button>
                  <button
                    className="form-create optional-signin"
                    onClick={() => setDefaultModal("signin")}
                  >
                    Or, Create Account
                  </button>
                </div>
              </div>
              <button className="fb-create">
                <BsFacebook className="fb-icon" />
                Sign up with Facebook
              </button>
              <button className="fb-create">
                <FcGoogle className="gg-icon" />
                Sign up with Google
              </button>
            </div>
            <section className="modal-deco-section">
              <p className="modal-signin-sugg">
                Don’t have an account yet?
                <span onClick={() => setDefaultModal("signin")}>
                  {" "}
                  Create new for free!
                </span>
              </p>
              <img src="https://i.ibb.co/wJkHzKv/atg-illustration.png" alt="" />
              <p className="modal-sugg">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </section>
          </div>
        </article>
      </section>
    </div>
  );
};
