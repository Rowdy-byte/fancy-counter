import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({ setCount }) {
  return (
    <div className="button-container">
      <CountButton />
      <CountButton />
    </div>
  );
}

function CountButton() {
  return (
    <button onClick={() => setCount((prev) => prev + 1)} className="count-btn">
      <PlusIcon className="count-btn-icon" />
    </button>
  );
}
