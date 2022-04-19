import React, { useEffect, useState } from "react";
import "../scss/main.scss";
import AdviceNumber from "./AdviceNumber";
import AdviceText from "./AdviceText";

const AdviceCard = () => {
  const [AdviceAPI, setAdviceAPI] = useState({ id: "", advice: "" });

  const getDataAPI = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdviceAPI({ ...data.slip });
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <AdviceNumber adviceId={AdviceAPI.id} />
        <AdviceText adviceText={AdviceAPI.advice} />
      </div>
      <div className="divider"></div>
      <button
        className="btn loading"
        onClick={() => window.location.reload()}
      ></button>
    </div>
  );
};

export default AdviceCard;
