import React from "react";
import img1 from "./ppic.jpg";
import "../App.css";
import Card from "./Card";
import profile from './profile.png'
import SideScroll from "./SideScroll";
import post1 from './postone.jpg'
import posttwo from './sidescroll.png'
const MainContainer = () => {
  const dataItems = [
    {
      name: "jhonvars",
      about:
        "n this CSS code, we're using media queries to adjust the styles of the slider for different screen sizes. By default, the slider has a set width for larger screens, and the images take the full width of the container. ",
      profileimg: img1,
      img: post1,
    },
    {
      name: " kumar_warrior",
      about:
        "n this CSS code, we're using media queries to adjust the styles of the slider for different screen sizes. By default, the slider has a set width for larger screens, and the images take the full width of the container. ",
      profileimg: profile,
      img: img1,
    },
    {
      name: "sandy_lv_srav",
      about:
        "n this CSS code, we're using media queries to adjust the styles of the slider for different screen sizes. By default, the slider has a set width for larger screens, and the images take the full width of the container. ",
      profileimg: profile,
      img: post1,
    },
    {
      name: "bargav",
      about:
        "n this CSS code, we're using media queries to adjust the styles of the slider for different screen sizes. By default, the slider has a set width for larger screens, and the images take the full width of the container. ",
      profileimg: post1,
      img: profile,
    },
  ];
  return (
    <div>
      <div className="main-container">
        <div className="main-con m-con-1">
          <ul>
            <li>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g data-name="31.Home">
                  <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
                  <path d="M18.293 13.707 12 7.414l-6.293 6.293-1.414-1.414L12 4.586l7.707 7.707-1.414 1.414z" />
                  <path d="M17 18H7v-8h2v6h6v-6h2v8z" />
                </g>
              </svg>
              Home
            </li>
            <li>
              <svg
                className="icon"
                data-name="Layer 3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
              >
                <path d="M89.3 75.226V49.8a24.8 24.8 0 0 0-15.47-22.944 9.309 9.309 0 0 0-18.61 0A24.8 24.8 0 0 0 39.75 49.8v25.349a11.418 11.418 0 0 0 .344 22.832h10.288a14.3 14.3 0 0 0 28.288 0h9.23a11.42 11.42 0 0 0 1.4-22.755zM64.524 22.033a5.1 5.1 0 0 1 4.82 3.472 24.509 24.509 0 0 0-9.638 0 5.1 5.1 0 0 1 4.818-3.472zm0 7.217A20.575 20.575 0 0 1 85.077 49.8v25.331H43.972V49.8a20.578 20.578 0 0 1 20.556-20.55zm0 76.717a10.112 10.112 0 0 1-9.87-7.986h19.738a10.105 10.105 0 0 1-9.862 7.986zM87.9 93.758H40.094a7.2 7.2 0 0 1 0-14.405H87.9a7.2 7.2 0 1 1 0 14.405z" />
              </svg>
              Notifications
            </li>
            <li>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g data-name="Shop 03">
                  <path d="M444.965 193.49a9.448 9.448 0 0 0-9.45-9.45h-66.808v-45.149a9.447 9.447 0 0 0-9.45-9.45H76.486a9.451 9.451 0 0 0-9.45 9.45v87.22a9.451 9.451 0 0 0 9.45 9.45h11.412V373.11a9.451 9.451 0 0 0 9.45 9.45h241.045a9.447 9.447 0 0 0 9.45-9.45v-54.536l91.346-83.752a9.438 9.438 0 0 0 4.58-4.2l.756-.692-.258-.284a9.42 9.42 0 0 0 .696-3.534V193.49zm-18.9 9.45v13.721h-57.358V202.94zm-340.13-10.988h263.872v24.709H85.935zm243.01 171.71H206.627v-111.28h-72.45v111.28H106.8V235.566h222.144zm18.9-128.097h62.571l-62.571 57.37z" />
                  <path d="M239.239 337.984h66.509a9.448 9.448 0 0 0 9.45-9.45v-66.51a9.447 9.447 0 0 0-9.45-9.45h-66.51a9.451 9.451 0 0 0-9.45 9.45v66.51a9.45 9.45 0 0 0 9.45 9.45zm9.45-66.51h47.609v47.61h-47.61z" />
                </g>
              </svg>
              Shop
            </li>
            <li>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <g data-name="25-user">
                  <path d="M24 38a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
                  <path d="M31 48H17a1 1 0 0 1-1-1v-6a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v6a1 1 0 0 1-1 1zm-13-2h12v-5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3zM40 33a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
                  <path d="M47 43H34v-2h12v-5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3h-2a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v6a1 1 0 0 1-1 1zM8 33a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
                  <path d="M14 43H1a1 1 0 0 1-1-1v-6a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5h-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v5h12zM19 24a1 1 0 0 1-.707-.293L12.586 18H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-5v5a1 1 0 0 1-.617.924A.987.987 0 0 1 19 24zM3 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 1 .707.293L18 20.586V17a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM34 19a1 1 0 0 1-1-1v-3h-3v-2h4a1 1 0 0 1 1 1v1l1.2-1.6a1 1 0 0 1 .8-.4h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H30V5h15a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-7.5l-2.7 3.6a1 1 0 0 1-.8.4z" />
                  <path d="M34 9h10v2H34zM30 9h2v2h-2zM7 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM14 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM21 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                </g>
              </svg>
              Conversation
            </li>
            <li>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M26 10h-1v-.84a4.46 4.46 0 0 0-4-4.24V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v.92a4.8 4.8 0 0 0-2.69 1.27A4.06 4.06 0 0 0 2 9a.36.36 0 0 0 0 .11v17.05A2.89 2.89 0 0 0 4.94 29h17.12A2.89 2.89 0 0 0 25 26.16V24h.75A4.13 4.13 0 0 0 30 20v-6.23A3.89 3.89 0 0 0 26 10zm0 2a1.9 1.9 0 0 1 2 1.77v.76a6.64 6.64 0 0 1-3 1.36v-1.5a1.9 1.9 0 0 0 0-.25.7.7 0 0 0 0-.14v-2zm-3 10h-2.67a2.14 2.14 0 0 1-2.25-2 2.14 2.14 0 0 1 2.25-2H23zm0-12.84v1.67a5 5 0 0 0-2-.76V7a2.42 2.42 0 0 1 2 2.16zM19 5v5H8V5zM6 7v2.66a6.44 6.44 0 0 1-1.93-1 2.27 2.27 0 0 1 .62-1A2.89 2.89 0 0 1 6 7zm17 19.16a.89.89 0 0 1-.94.84H4.94a.89.89 0 0 1-.94-.84V11a8.68 8.68 0 0 0 4.07 1h12.16A2.6 2.6 0 0 1 23 14.39V16h-2.67a4.13 4.13 0 0 0-4.25 4 4.13 4.13 0 0 0 4.25 4H23zM28 20a2.14 2.14 0 0 1-2.25 2H25v-4.09a8.67 8.67 0 0 0 3-1z" />
              </svg>
              Wallet
            </li>
            <li>
              {" "}
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g data-name="44.User">
                  <path d="M10 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2z" />
                  <path d="M5 17H3a7.008 7.008 0 0 1 7-7v2a5.006 5.006 0 0 0-5 5zM19 24h-8a4 4 0 0 1-.984-7.877 4.5 4.5 0 0 1 8.259-2.063A5 5 0 1 1 19 24zm-8.053-6A2 2 0 0 0 11 22h8a3 3 0 1 0-.936-5.832l-.9.3-.347-.88A2.5 2.5 0 0 0 12 16.5a2.3 2.3 0 0 0 .033.313l.167 1.145-1.222.047z" />
                  <path d="M5.415 18.889a10 10 0 1 1 14.337-6.668l-1.95-.442A8 8 0 1 0 2 10a7.977 7.977 0 0 0 4.333 7.112z" />
                </g>
              </svg>
              Subscription
            </li>
            <li>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <g data-name="12-User-Left">
                  <path d="M2 29c0-.78 1.92-1.7 3.24-2h.11l8-3a1 1 0 0 0 .65-1v-2.69a1 1 0 0 0-.57-.9A6 6 0 0 1 10 14a1 1 0 0 0-1-1v-2a1 1 0 0 0 1-1V8a6 6 0 0 1 12 0v2a1 1 0 0 0 1 1v2h2v-2a2 2 0 0 0-1-1.73V8A8 8 0 0 0 8 8v1.27A2 2 0 0 0 7 11v2a2 2 0 0 0 1 1.75 8.07 8.07 0 0 0 4 6.16v1.39L4.7 25c-.91.23-4.7 1.37-4.7 4v2a1 1 0 0 0 1 1h14v-2H2z" />
                  <path d="M24 16a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" />
                  <path d="m24.29 20.29-3 3a1 1 0 0 0 0 1.41l3 3 1.41-1.41L23.41 24l2.29-2.29z" />
                </g>
              </svg>
              My Profile
            </li>
            <li>
              {" "}
              <svg
                data-name="Layer 1"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
              >
                <path d="M83.172 41.128a1.75 1.75 0 0 0-2.25 2.68A26.32 26.32 0 0 1 90.357 64a1.75 1.75 0 0 0 3.5 0 29.8 29.8 0 0 0-10.685-22.872z" />
                <path d="M64 40.143A23.857 23.857 0 1 0 87.857 64 23.884 23.884 0 0 0 64 40.143zm0 44.215A20.357 20.357 0 1 1 84.357 64 20.38 20.38 0 0 1 64 84.357z" />
                <path d="M122.55 54.882a1.751 1.751 0 0 0-1.73-1.482h-16.64a41.166 41.166 0 0 0-4.28-10.319l11.763-11.764a1.749 1.749 0 0 0 .176-2.27 59.2 59.2 0 0 0-12.887-12.89 1.753 1.753 0 0 0-2.27.176L84.919 28.1A41.166 41.166 0 0 0 74.6 23.819V7.18a1.751 1.751 0 0 0-1.482-1.73 59.968 59.968 0 0 0-18.236 0A1.751 1.751 0 0 0 53.4 7.18v16.64a41.166 41.166 0 0 0-10.319 4.28L31.317 16.333a1.751 1.751 0 0 0-2.27-.176 59.2 59.2 0 0 0-12.89 12.891 1.749 1.749 0 0 0 .176 2.27L28.1 43.081A41.166 41.166 0 0 0 23.819 53.4H7.18a1.751 1.751 0 0 0-1.73 1.482 59.72 59.72 0 0 0 0 18.236A1.751 1.751 0 0 0 7.18 74.6h16.64a41.166 41.166 0 0 0 4.28 10.319L16.333 96.683a1.749 1.749 0 0 0-.176 2.27 59.2 59.2 0 0 0 12.891 12.891 1.75 1.75 0 0 0 2.27-.176L43.081 99.9a41.166 41.166 0 0 0 10.319 4.281v16.64a1.751 1.751 0 0 0 1.481 1.729 59.72 59.72 0 0 0 18.236 0 1.751 1.751 0 0 0 1.483-1.73v-16.64a41.166 41.166 0 0 0 10.319-4.28l11.764 11.763a1.751 1.751 0 0 0 2.27.176 59.2 59.2 0 0 0 12.891-12.891 1.749 1.749 0 0 0-.176-2.27L99.9 84.919a41.166 41.166 0 0 0 4.281-10.319h16.64a1.751 1.751 0 0 0 1.729-1.481 59.72 59.72 0 0 0 0-18.236zM119.3 71.1h-16.492a1.751 1.751 0 0 0-1.707 1.362 37.675 37.675 0 0 1-4.886 11.79 1.751 1.751 0 0 0 .243 2.171l11.66 11.66a55.657 55.657 0 0 1-10.035 10.035l-11.66-11.66a1.752 1.752 0 0 0-2.171-.243 37.675 37.675 0 0 1-11.79 4.886 1.751 1.751 0 0 0-1.362 1.707V119.3a56.632 56.632 0 0 1-14.2 0v-16.492a1.751 1.751 0 0 0-1.362-1.707 37.675 37.675 0 0 1-11.79-4.886 1.749 1.749 0 0 0-2.171.243l-11.66 11.66a55.657 55.657 0 0 1-10.035-10.035l11.66-11.66a1.751 1.751 0 0 0 .243-2.171 37.675 37.675 0 0 1-4.885-11.79 1.751 1.751 0 0 0-1.708-1.362H8.7a56.327 56.327 0 0 1 0-14.2h16.492a1.751 1.751 0 0 0 1.708-1.362 37.675 37.675 0 0 1 4.886-11.79 1.751 1.751 0 0 0-.243-2.171l-11.66-11.66a55.657 55.657 0 0 1 10.034-10.035l11.66 11.66a1.75 1.75 0 0 0 2.171.243 37.675 37.675 0 0 1 11.79-4.885 1.751 1.751 0 0 0 1.362-1.708V8.7a56.632 56.632 0 0 1 14.2 0v16.492a1.751 1.751 0 0 0 1.362 1.708 37.675 37.675 0 0 1 11.79 4.886 1.752 1.752 0 0 0 2.171-.243l11.66-11.66a55.657 55.657 0 0 1 10.035 10.035l-11.66 11.66a1.751 1.751 0 0 0-.243 2.171 37.675 37.675 0 0 1 4.886 11.79 1.751 1.751 0 0 0 1.707 1.362H119.3a56.327 56.327 0 0 1 0 14.2z" />
              </svg>
              Settings{" "}
            </li>
          </ul>
          <p>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="icon"
            >
              <path d="M13.076 97.083a1.75 1.75 0 0 0 1.75-1.75V66.667a1.75 1.75 0 0 0-3.5 0v28.666a1.75 1.75 0 0 0 1.75 1.75zM122.38 64.97c.027-.041.046-.085.069-.128a1.037 1.037 0 0 0 .146-.348c.015-.051.035-.1.045-.152a1.755 1.755 0 0 0 0-.685c-.01-.053-.03-.1-.045-.152a1.733 1.733 0 0 0-.054-.174 1.692 1.692 0 0 0-.092-.174c-.023-.042-.042-.086-.069-.127a1.75 1.75 0 0 0-.22-.269l-12.509-12.509a1.75 1.75 0 0 0-2.475 2.475l9.524 9.523H63.424a1.75 1.75 0 0 0 0 3.5H116.7l-9.523 9.523a1.75 1.75 0 1 0 2.475 2.475l12.508-12.509a1.75 1.75 0 0 0 .22-.269z" />
              <path d="M95.424 72.25a1.75 1.75 0 0 0-1.75 1.75v36.9H48.633V17.1h45.041V54a1.75 1.75 0 1 0 3.5 0V15.35a1.75 1.75 0 0 0-1.75-1.75H48.633V6.5a1.75 1.75 0 0 0-2.461-1.6L6.365 22.593a1.751 1.751 0 0 0-1.039 1.6v79.615a1.751 1.751 0 0 0 1.039 1.6L46.172 123.1a1.75 1.75 0 0 0 2.461-1.6v-7.1h46.791a1.75 1.75 0 0 0 1.75-1.75V74a1.75 1.75 0 0 0-1.75-1.75zm-50.291 46.558L8.826 102.67V25.33L45.133 9.192z" />
            </svg>
            Log Out
          </p>
        </div>
        <div className="main-con m-con-2">
          {
            dataItems.map((eachobj) => {
              return <Card eachobj={eachobj} />;
            })}
          <SideScroll />
        </div>
        <div className="main-con m-con-3">
          <div className="online-profile">
            <img src={post1} alt="" />
            <div className="sidebar-profile">
              <img src={profile} alt="" className="profile-pic" />

              <p>ram</p>
            </div>

          </div>
          <div className="online-profile">
            <img src={img1} alt="" />
            <div className="sidebar-profile">
              <img src={profile} alt="" className="profile-pic" />
              <p>siva</p>
            </div>

          </div>
          <div className="online-profile">
            <img src={posttwo} alt="" />
            <div className="sidebar-profile">
              <img src={profile} alt="" className="profile-pic" />
              <p>vani</p>
            </div>

          </div>
          <div className="online-profile">
            <img src={img1} alt="" />
            <div className="sidebar-profile">
              <img src={profile} alt="" className="profile-pic" />
              <p>naidu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
