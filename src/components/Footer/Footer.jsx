import { Link } from "react-scroll";
import { FiArrowUp } from "react-icons/fi";
import { NAV_LINKS } from "../../data/nav";
import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <Link to="home" smooth duration={600} className="footer__logo">
            JAE<span>WOO</span>
          </Link>

          <nav className="footer__nav">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link to={link.id} smooth duration={600} offset={-80}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link to="home" smooth duration={600} className="footer__top-btn" aria-label="맨 위로">
            <FiArrowUp />
          </Link>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} Jaewoo Cho. All rights reserved.</p>
          <p>Designed &amp; Built with React + SCSS</p>
        </div>
      </div>
    </footer>
  );
}
