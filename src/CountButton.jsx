import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type, locked }) {
  function handleClick(event) {
    type === "plus" && setCount((prev) => (prev < 5 ? prev + 1 : 5));
    type === "minus" && setCount((prev) => (prev > 0 ? prev - 1 : 0));

    event.currentTarget.blur();
  }

  return (
    <button onClick={handleClick} disabled={locked} className="count-btn">
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
    </button>
  );
}
