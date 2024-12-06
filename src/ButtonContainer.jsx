import CountButton from "./CountButton";

export default function ButtonContainer({ setCount }) {
  return (
    <div className="button-container">
      <CountButton setCount={setCount} />
      <CountButton setCount={setCount} />
    </div>
  );
}
