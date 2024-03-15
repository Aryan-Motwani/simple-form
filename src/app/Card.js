"use client";
import React, { useRef } from "react";
import ScratchCard from "react-scratchcard-v2";

import * as IMG from "../../public/vercel.svg";
import MyImageComponent from "./MyImageComponent";

const Card = () => {
  const ref = useRef < ScratchCard > null;
  const onClickReset = () => {
    ref.current && ref.current.reset();
  };
  return (
    <div>
      {/* <MyImageComponent /> */}
      <button onClick={onClickReset}>Reset</button>
      <ScratchCard
        width={320}
        height={226}
        image={IMG}
        finishPercent={80}
        onComplete={() => console.log("complete")}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Scratch card</h1>
        </div>
      </ScratchCard>
    </div>
  );
};

export default Card;
