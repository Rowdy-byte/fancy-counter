import CountButton from "./CountButton";

export default function ButtonContainer({ setCount }) {
  return (
    <div className="button-container">
      <CountButton setCount={setCount} type={"plus"} />
      <CountButton setCount={setCount} type={"minus"} />
    </div>
  );
}
