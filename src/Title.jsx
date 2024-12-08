export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked && (
        <span>
          Limit! Buy <b>Pro</b> for &gt;5
        </span>
      )}
      {!locked && <span>Fancy Counter</span>}
    </h1>
  );
}
