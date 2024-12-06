import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount }) {
  return (
    <button onClick={() => setCount((prev) => prev + 1)} className="count-btn">
      <PlusIcon className="count-btn-icon" />
    </button>
  );
}
