import useMagnetic from "../../../hooks/useMagnetic";
import "./Magnetic.scss";

export default function Magnetic({ children, strength, className }) {
  const ref = useMagnetic(strength);

  return (
    <span ref={ref} className={`magnetic ${className ?? ""}`}>
      {children}
    </span>
  );
}
