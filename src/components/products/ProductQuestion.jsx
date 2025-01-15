import React, { useEffect, useState } from "react";

const ProductQuestion = ({ rawData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [questionsAndAnswers, setQueandAns] = useState([]);
  useEffect(() => {
    setQueandAns(extractData(rawData));
  }, [rawData]);
  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="qa-container">
      {questionsAndAnswers.map((item, index) => (
        <div key={index} className="qa-item">
          <div
            className="qa-question"
            onClick={() => toggleAnswer(index)}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              padding: "10px",
              borderBottom: "1px solid #ccc",
              backgroundColor: activeIndex === index ? "#f0f8ff" : "#fff",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{item.question}</span>
              <div className="MuiGrid-root platinumrx-rfnosa">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  fontSize="1rem"
                  viewBox="0 0 20 20"
                  className="Searchbar_Arrow__nqAkQ"
                >
                  <path
                    stroke="#F44D4D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m7.5 5 5 5-5 5"
                    transform={
                      activeIndex === index ? "rotate(90, 10, 10)" : "none"
                    }
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          {activeIndex === index && (
            <div className="MuiTypography-root">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const extractData = (rawData) => {
  const lines = rawData.split("|");

  const QAarray = lines
    .map((line) => {
      const parts = line.split(":::");

      if (parts.length === 2) {
        return {
          question: parts[0].trim().replace(/^Q\.\s*/, ""),
          answer: parts[1].trim(),
        };
      } else {
        return null;
      }
    })
    .filter(Boolean);
  // console.log("Lines :", QAarray);
  return QAarray;
};

export default ProductQuestion;
