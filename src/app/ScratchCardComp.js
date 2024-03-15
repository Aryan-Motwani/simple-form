"use client";
import React, { useRef } from "react";
import ScratchCard, { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v2";

import * as IMG from "./img.jpg";

const ScratchCardComp = () => {
  const ref = useRef < ScratchCard > null;

  const onClickReset = () => {
    ref.current && ref.current.reset();
  };

  return (
    <div>
      <button onClick={onClickReset}>Reset</button>
      <ScratchCard
        ref={ref}
        width={320}
        height={226}
        image={
          <image
            src={
              "https://m.media-amazon.com/images/I/71Jzezm8CBL._AC_UF1000,1000_QL80_.jpg"
            }
          />
        }
        finishPercent={80}
        onComplete={() => console.log("complete")}
        brushSize={40}
        customBrush={CUSTOM_BRUSH_PRESET}
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

export default ScratchCardComp;
