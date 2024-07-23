import React from "react";
// import { motion } from "framer-motion";
import "./MyWorks.css";

const works = [
  {
    title: "Money transfer screens",
    imageUrl: "/bank-app.png",
    behanceUrl: "https://www.behance.net/gallery/200163207/Money-Transfer-Bank-App",
  },
  {
    title: "JEKAJO",
    imageUrl: "/music-app.png",
    behanceUrl: "https://www.behance.net/gallery/159510245/Music-APP-Case-Study",
  },
  {
    title: "Dee Pet",
    imageUrl: "a-pet-app.png",
    behanceUrl: "https://www.behance.net/gallery/159604439/A-Pet-Care-Service-Case-Study",
  },
  {
    title: "Food Delivery Screens",
    imageUrl: "/food-app.png",
    behanceUrl: "https://www.behance.net/gallery/174612403/A-Simple-Food-Delivery-App",
  },
  {
    title: "Adira's Health",
    imageUrl: "/women-app.png",
    behanceUrl: "https://www.behance.net/gallery/159593465/Women-Hormonal-Health-Case-Study",
  },
  {
    title: "Budi",
    imageUrl: "budi-app.png",
    behanceUrl: "https://www.behance.net/gallery/159741903/BudiHangout-Case-Study",
  },
];

const MyWorks = () => {
  return (
    <div className="my-works">
      <h2>My Works</h2>
      <div className="work-list">
        {works.map((work, index) => (
          <div className="work-item-wrapper">
            <div key={index} className="work-item">
              <img src={work.imageUrl} alt={work.title} />
            </div>
            <div className="work-title">
              <h4>{work.title}</h4>
              <a
                href={work.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="behance-link-btn">View UI Design</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
