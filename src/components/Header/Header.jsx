import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { NAV_LINKS } from "../../data/nav";
import Magnetic from "../common/Magnetic/Magnetic";
import "./Header.scss";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
        <div className="header__inner">
          <Link
            to="home"
            spy
            offset={-80}
            className="header__logo"
            onClick={closeMenu}
          >
            JAE<span>WOO</span>
          </Link>

          <nav className="header__nav header__nav--desktop">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    spy
                    offset={-80}
                    onSetActive={() => setActiveSection(link.id)}
                    className={`header__nav-link ${
                      activeSection === link.id ? "is-active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Magnetic strength={0.4}>
            <Link to="contact" offset={-80} className="header__cta">
              Let's Talk
            </Link>
          </Magnetic>

          <button
            type="button"
            className={`header__burger ${isMenuOpen ? "is-open" : ""}`}
            aria-label="메뉴 토글"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Rendered as a header sibling (not a child) so the header's
          backdrop-filter (when scrolled) can't turn this fixed-position
          panel's containing block into the header's own short box. */}
      <nav className={`header__nav-mobile ${isMenuOpen ? "is-open" : ""}`}>
        <ul>
          {NAV_LINKS.map((link, index) => (
            <li key={link.id} style={{ transitionDelay: `${index * 0.06}s` }}>
              <Link to={link.id} offset={-80} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
