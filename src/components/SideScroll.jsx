import React from "react";
import Card from "./Card";
import img1 from "./sidescroll.png";
const SideScroll = () => {
  const sidescroll = [
    {
      name: "jhon sandy",
      about:
        "n this CSS code, we're using media queries to adjust the styles of the slider for different screen sizes. By default, the slider has a set width for larger screens, and the images take the full width of the container. ",
      img: img1,
    },
    {
      name: "jhon sandy",
      about:
        "n this CSS code, we're using media queries to adjust the styles of the slider for different screen sizes. By default, the slider has a set width for larger screens, and the images take the full width of the container. ",
      img: img1,
    },
    {
      name: "jhon sandy",
      about:
        "n this CSS code, we're using media queries to adjust the styles of the slider for different screen sizes. By default, the slider has a set width for larger screens, and the images take the full width of the container. ",
      img: img1,
    },
    {
      name: "jhon sandy",
      about:
        "n this CSS code, we're using media queries to adjust the styles of the slider for different screen sizes. By default, the slider has a set width for larger screens, and the images take the full width of the container. ",
      img: img1,
    },
    {
        name: "jhon sandy",
        about:
          "n this CSS code, we're using media queries to adjust the styles of the slider for different screen sizes. By default, the slider has a set width for larger screens, and the images take the full width of the container. ",
        img: img1,
      },
      {
        name: "jhon sandy",
        about:
          "n this CSS code, we're using media queries to adjust the styles of the slider for different screen sizes. By default, the slider has a set width for larger screens, and the images take the full width of the container. ",
        img: img1,
      },
      {
        name: "jhon sandy",
        about:
          "n this CSS code, we're using media queries to adjust the styles of the slider for different screen sizes. By default, the slider has a set width for larger screens, and the images take the full width of the container. ",
        img: img1,
      },
  ];
  return (
    <div className="sidescroll-container">
      {sidescroll.map((eachobj) => {
        return (
          <div className="sidescroll-item">
            <img src={eachobj.img} alt="" />
            <div className="item-desc">
            <p>{eachobj.name}</p>
            <p>⭐⭐⭐⭐⭐</p>
            <b><p>$199.00</p></b>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideScroll;
