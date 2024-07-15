import React from "react";
// import { motion } from "framer-motion";
import "./MyWorks.css";

const works = [
  {
    title: "Project 1",
    imageUrl: "path/to/image1.jpg",
    behanceUrl: "https://www.behance.net/project1",
  },
  {
    title: "Project 2",
    imageUrl: "path/to/image2.jpg",
    behanceUrl: "https://www.behance.net/project2",
  },
  {
    title: "Project 1",
    imageUrl: "path/to/image1.jpg",
    behanceUrl: "https://www.behance.net/project1",
  },
  {
    title: "Project 1",
    imageUrl: "path/to/image1.jpg",
    behanceUrl: "https://www.behance.net/project1",
  },
  {
    title: "Project 1",
    imageUrl: "path/to/image1.jpg",
    behanceUrl: "https://www.behance.net/project1",
  },
  {
    title: "Project 1",
    imageUrl: "path/to/image1.jpg",
    behanceUrl: "https://www.behance.net/project1",
  },
];

const MyWorks = () => {
  return (
    <div class="my-works">
      <h2>My Works</h2>
      <div className="work-list">
        {works.map((work, index) => (
          <div key={index} className="work-item">
            <a href={work.behanceUrl} target="_blank" rel="noopener noreferrer">
              <img src={work.imageUrl} alt={work.title} />
              <div className="work-title">{work.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
