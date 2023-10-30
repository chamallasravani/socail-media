import React from "react";

const Card = ({ eachobj }) => {
  console.log(eachobj);
  return (
    <div className="post-container">
      <div className="profile">
        <img className="profile-img" src={eachobj.profileimg}></img>
        <div className="name-menu">
          <h2>{eachobj.name}</h2>
          <svg className="post-icon" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 61.889H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 87.7H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z" /></svg>
        </div>
      </div>
      <p>{eachobj.about}</p>
      <img className="post" src={eachobj.img}></img>
      <div className="post-icons">
        <div className="icon-con">
          <svg
            className="post-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M30 11.13c-.21-2.84-1.14-4.88-2.76-6.08C24.51 3.07 20.08 4 16 7.27 11.92 4 7.49 3.07 4.79 5.05 3.17 6.25 2.24 8.29 2 11.13c-.61 8.29 8.43 14.93 12.35 17.4a3 3 0 0 0 3.24 0c3.95-2.47 12.99-9.11 12.41-17.4zM16.56 26.84a1.07 1.07 0 0 1-1.12 0C12.63 25.06 3.48 18.69 4 11.28c.21-2.78 1.18-4 2-4.61A3.73 3.73 0 0 1 8.23 6c2 0 4.67 1.18 7.11 3.33a1 1 0 0 0 1.32 0C20.14 6.26 24 5.17 26 6.67c.77.56 1.74 1.83 1.95 4.61.57 7.41-8.58 13.78-11.39 15.56z" />
          </svg>
          <p>9.7M</p>
        </div>
        <div className="icon-con">
          <svg
            className="post-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="47.999"
          >
            <g fill="#1a171b">
              <path d="M43.394 0H4.606A4.611 4.611 0 0 0 0 4.605v27.152a4.611 4.611 0 0 0 4.606 4.605h7.456l11.424 11.424a.728.728 0 0 0 1.029 0l11.423-11.424H43.4a4.61 4.61 0 0 0 4.6-4.605V4.605A4.611 4.611 0 0 0 43.394 0zm3.151 31.758a3.154 3.154 0 0 1-3.151 3.15h-7.758a.729.729 0 0 0-.514.213L24 46.244 12.877 35.121a.727.727 0 0 0-.514-.213H4.605a3.154 3.154 0 0 1-3.151-3.15V4.605a3.155 3.155 0 0 1 3.151-3.151h38.788a3.155 3.155 0 0 1 3.151 3.151v27.153z" />
              <path d="M20.748 7.088a11.391 11.391 0 1 0-2.566 22.488 11.336 11.336 0 0 0 4.941-1.14l5.577 1.125a.7.7 0 0 0 .144.015.728.728 0 0 0 .714-.871l-1.126-5.583a11.21 11.21 0 0 0 1.14-4.939 11.334 11.334 0 0 0-8.824-11.095zm6.212 16.076.959 4.755-4.753-.959a.746.746 0 0 0-.476.065 9.934 9.934 0 1 1-4.509-18.782 10.019 10.019 0 0 1 2.239.262 9.888 9.888 0 0 1 7.7 9.678 9.789 9.789 0 0 1-1.1 4.506.74.74 0 0 0-.06.475zM40.752 9.748a.727.727 0 0 0-.8.178l-5.333 5.666a.727.727 0 0 0 1.058 1l4.077-4.33V25.94a.728.728 0 0 0 1.455 0V10.424a.724.724 0 0 0-.457-.676z" />
            </g>
          </svg>
          <p>9.0K</p>
        </div>
        <div className="icon-con">
          <svg
            className="post-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="22.703"
            height="21.928"
          >
            <path d="M1.056 21.928c0-6.531 5.661-9.034 10.018-9.375V18.1L22.7 9.044 11.073 0v4.836a10.5 10.5 0 0 0-7.344 3.352C-.618 12.946-.008 21 .076 21.928z" />
          </svg>
          <p>7.2k</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
