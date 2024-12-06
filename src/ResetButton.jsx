import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  function handleClick() {
    setCount(0);
  }
  return (
    <button onClick={handleClick} className="reset-btn-icon">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
