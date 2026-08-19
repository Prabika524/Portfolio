export default function DecoDots({ dots = [] }) {
  return (
    <>
      {dots.map((d, i) => (
        <span
          key={i}
          className="deco-dot hidden sm:block"
          style={{
            width: d.size,
            height: d.size,
            top: d.top,
            left: d.left,
            right: d.right,
            bottom: d.bottom,
          }}
        />
      ))}
    </>
  );
}
