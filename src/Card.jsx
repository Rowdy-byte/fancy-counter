import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";
import { useState } from "react";
import { useEffect } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    function handelKeyDown(event) {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    }
    window.addEventListener("keydown", handelKeyDown);

    return () => {
      window.removeEventListener("keydown", handelKeyDown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton setCount={setCount} type={"plus"} locked={locked} />
        <CountButton setCount={setCount} type={"minus"} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
