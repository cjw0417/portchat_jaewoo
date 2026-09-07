import "./Marquee.scss";

export default function Marquee({ items }) {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[0, 1].map((rep) => (
          <ul className="marquee__group" key={rep} aria-hidden={rep === 1}>
            {items.map((item) => (
              <li key={item}>
                <span>{item}</span>
                <span className="marquee__dot">•</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
