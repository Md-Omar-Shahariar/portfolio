import React from "react";
import { useParams } from "react-router-dom";
import project1a from "../../assets/card image/card1ss/Screenshot 2022-06-10 163253.png";
import project1b from "../../assets/card image/card1ss/Screenshot 2022-06-10 163359.png";
import project1c from "../../assets/card image/card1ss/Screenshot 2022-06-10 163603.png";
import project2a from "../../assets/card image/card2ss/Screenshot 2022-06-10 165835.png";
import project2b from "../../assets/card image/card2ss/Screenshot 2022-06-10 165949.png";
import project2c from "../../assets/card image/card2ss/Screenshot 2022-06-10 170100.png";
import project3a from "../../assets/card image/card3ss/Screenshot 2022-06-10 174200.png";
import project3b from "../../assets/card image/card3ss/Screenshot 2022-06-10 174242.png";
import project3c from "../../assets/card image/card3ss/Screenshot 2022-06-10 174322.png";
import project4a from "../../assets/card image/card4ss/Screenshot 2022-06-10 175537.png";
import project4b from "../../assets/card image/card4ss/Screenshot 2022-06-10 175605.png";
import project4c from "../../assets/card image/card4ss/Screenshot 2022-06-10 175632.png";

const SingleProject = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="min-vh-100 container">
      <div className="py-5">
        {id == 1 && (
          <>
            <h1 className="aboutme text-center py-3">SEA Tech</h1>
            <div className="d-flex justify-content-center align-items-center pb-5">
              <div className="ml"></div>
              <div className="mi"></div>
              <div className="mr"></div>
            </div>
            <div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  Login
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project1a}
                  alt=""
                />
              </div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  Reviews
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project1b}
                  alt=""
                />
              </div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  Manage All Orders
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project1c}
                  alt=""
                />
              </div>
            </div>
            <div className="py-3">
              <h3 className="aboutme pb-2">Description:</h3>
              <h5>
                MERN Stack Website for ManuFacturer Company with payment gateway
              </h5>
            </div>
            <div className="pb-5">
              <h3 className="aboutme">Features:</h3>
              <ul className="aboutme py-3">
                <li>You Can Pay With Your Card</li>
                <li>There Are Two Type Of Role For User</li>
                <li>Admin Can manage Orders And Add Product or delete</li>
                <li>You Can Toggle Mode dark and Light</li>
                <li>For User Access JWT Is used</li>
              </ul>
            </div>
          </>
        )}
        {id == 2 && (
          <>
            <h1 className="aboutme text-center py-3">Royal CARS</h1>
            <div className="d-flex justify-content-center align-items-center pb-5">
              <div className="ml"></div>
              <div className="mi"></div>
              <div className="mr"></div>
            </div>
            <div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  Inventory
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project2a}
                  alt=""
                />
              </div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  Login
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project2b}
                  alt=""
                />
              </div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  My Items
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project2c}
                  alt=""
                />
              </div>
            </div>
            <div className="py-3">
              <h3 className="aboutme pb-2">Description:</h3>
              <h5>MERN Stack Website for Managing a Warehouse</h5>
            </div>
            <div className="pb-5">
              <h3 className="aboutme">Features:</h3>
              <ul className="aboutme py-3">
                <li>Heroku to Host server</li>
                <li>JWT for user login track</li>
                <li>React firebase hook for authentication</li>
                <li>Email password and gmail based login</li>
                <li>Database Mongodb</li>
              </ul>
            </div>
          </>
        )}
        {id == 3 && (
          <>
            <h1 className="aboutme text-center py-3">Travel Baba</h1>
            <div className="d-flex justify-content-center align-items-center pb-5">
              <div className="ml"></div>
              <div className="mi"></div>
              <div className="mr"></div>
            </div>
            <div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  My Services
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project3a}
                  alt=""
                />
              </div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  Service Info
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project3b}
                  alt=""
                />
              </div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  Gallery
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project3c}
                  alt=""
                />
              </div>
            </div>
            <div className="py-3">
              <h3 className="aboutme pb-2">Description:</h3>
              <h5>React Website for Single Service Provider</h5>
            </div>
            <div className="pb-5">
              <h3 className="aboutme">Features:</h3>
              <ul className="aboutme py-3">
                <li>User can log in with email / google/ github/ facebook</li>
                <li>If user want to hire then first has to login</li>
                <li>After login redirect to previous page</li>
                <li>Reset password module</li>
                <li>Toast to show reset password notification</li>
              </ul>
            </div>
          </>
        )}
        {id == 4 && (
          <>
            <h1 className="aboutme text-center py-3">Baby Care</h1>
            <div className="d-flex justify-content-center align-items-center pb-5">
              <div className="ml"></div>
              <div className="mi"></div>
              <div className="mr"></div>
            </div>
            <div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  DashBoard
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project4a}
                  alt=""
                />
              </div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  Review
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project4b}
                  alt=""
                />
              </div>
              <div
                className="border shadow mb-3 p-3 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h3 className="text-center aboutme border-bottom py-3 ">
                  About
                </h3>
                <img
                  style={{ width: "100%", maxHeight: "500px" }}
                  src={project4c}
                  alt=""
                />
              </div>
            </div>
            <div className="py-3">
              <h3 className="aboutme pb-2">Description:</h3>
              <h5>React Website for Child Care product</h5>
            </div>
            <div className="pb-5">
              <h3 className="aboutme">Features:</h3>
              <ul className="aboutme py-3">
                <li>User can log in with email / google/ github/ facebook</li>
                <li>If user want to hire then first has to login</li>
                <li>After login redirect to previous page</li>
                <li>Reset password module</li>
                <li>Toast to show reset password notification</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
