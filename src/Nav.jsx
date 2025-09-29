import { useState, useEffect } from "react";
import logo from "../public/logo.svg";
import cartIcon from "./assets/images/icon-cart.svg";
import avatar from "./assets/images/image-avatar.png";
import deleteIcon from "./assets/images/icon-delete.svg";
import closeIcon from "./assets/images/icon-close.svg";
import menuIcon from "./assets/images/icon-menu.svg";

import product_thumbnail1 from "./assets/images/image-product-1-thumbnail.jpg";
import product_thumbnail2 from "./assets/images/image-product-2-thumbnail.jpg";
import product_thumbnail3 from "./assets/images/image-product-3-thumbnail.jpg";
import product_thumbnail4 from "./assets/images/image-product-4-thumbnail.jpg";

const links = ["Collections", "Men", "Women", "About", "Contact"];
const productThumbs = [
  product_thumbnail1,
  product_thumbnail2,
  product_thumbnail3,
  product_thumbnail4,
];

const Nav = ({ cartItems, setCartItems, activeIndex }) => {
  const [activeLink, setActiveLink] = useState("Collections");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isMobile = windowWidth <= 500;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={navStyles}>
      <div style={{ display: "flex", alignItems: "center", gap: "2em" }}>
        {isMobile ? (
          <>
            {/* Mobile: show hamburger if menu closed, close icon if menu open */}
            {!isMobileMenuOpen && (
              <img
                src={menuIcon}
                alt="menu"
                style={{ cursor: "pointer" }}
                onClick={toggleMobileMenu}
              />
            )}
            {isMobileMenuOpen && (
              <div style={mobileMenuOverlay}>
                <img
                  src={closeIcon}
                  alt="close"
                  style={{ cursor: "pointer", width:'20px', marginBottom: "2em" }}
                  onClick={toggleMobileMenu}
                />
                <ul style={mobileUlStyles}>
                  {links.map((link) => (
                    <li key={link} style={{ marginBottom: "1.5em" }}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveLink(link);
                          toggleMobileMenu();
                        }}
                        style={{
                          ...aStyles,
                          fontWeight: "700",
                          color: 
                            activeLink === link
                              ? "var(--Orange)"
                              : "var(--Black)",
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Hide logo when menu is open */}
            {!isMobileMenuOpen && (
              <img src={logo} alt="logo" style={{ height: "20px" }} />
            )}
          </>
        ) : (
          <>
            {/* Desktop */}
            <img src={logo} alt="logo" />
            <ul style={ulStyles}>
              {links.map((link) => (
                <li key={link} style={{ position: "relative" }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLink(link);
                    }}
                    style={{
                      ...aStyles,
                      color:
                        activeLink === link
                          ? "var(--Black)"
                          : "var(--dg_blue)",
                      borderBottom:
                        activeLink === link
                          ? "2px solid var(--Orange)"
                          : "2px solid transparent",
                      marginBottom: "-1px",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Side nav (cart + avatar) always visible */}
      <div style={sideNavStyles}>
        <div style={{ position: "relative" }}>
          <img
            src={cartIcon}
            alt="cart"
            style={{ cursor: "pointer" }}
            onClick={toggleCart}
          />
          {totalQuantity > 0 && (
            <span style={badgeStyles}>{totalQuantity}</span>
          )}

          {isCartOpen && (
            <div style={dropdownStyles}>
              <h4 style={{ margin: "0 0 1em 0" }}>Cart</h4>
              <div
                style={{
                  height: "1px",
                  background: "rgba(0,0,0,0.1)",
                  marginBottom: "1em",
                }}
              ></div>
              {cartItems.length === 0 ? (
                <p
                  style={{
                    textAlign: "center",
                    color: "var(--dg_blue)",
                    padding: "2em 0",
                  }}
                >
                  Your cart is empty.
                </p>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                  }}
                >
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1em",
                      }}
                    >
                      <img
                        src={productThumbs[activeIndex]}
                        alt={item.name}
                        style={{ width: "50px", borderRadius: "8px" }}
                      />
                      <div>
                        <p style={{ margin: 0 }}>{item.name}</p>
                        <p style={{ margin: 0, fontSize: "0.9em" }}>
                          ${item.price} x {item.quantity}{" "}
                          <strong>${item.price * item.quantity}</strong>
                        </p>
                      </div>
                      <img
                        src={deleteIcon}
                        alt="delete"
                        style={{ cursor: "pointer" }}
                        onClick={() => removeFromCart(item.id)}
                      />
                    </div>
                  ))}
                  <button style={checkoutBtn}>Checkout</button>
                </div>
              )}
            </div>
          )}
        </div>

        <img
          src={avatar}
          alt="avatar"
          onClick={() => setActiveLink("avatar")}
          style={{
            width: "40px",
            borderRadius: "50%",
            cursor: "pointer",
            border:
              activeLink === "avatar" ? "1px solid var(--Orange)" : "none",
          }}
        />
      </div>
    </nav>
  );
};

// ✅ styles
const navStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1em 2em",
  borderBottom: "1px solid rgba(0,0,0,0.08)",
  position: "relative",
};

const ulStyles = {
  display: "flex",
  gap: "24px",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const mobileUlStyles = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
};

const mobileMenuOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "70%",
  background: "white",
  padding: "2em 1.5em",
  display: "flex",
  flexDirection: "column",
  zIndex: 1000,
  boxShadow: "2px 0 20px rgba(0,0,0,0.15)",
};

const aStyles = {
  fontSize: "var(--Fs)",
  textDecoration: "none",
  paddingBottom: "8px",
  display: "inline-block",
};

const sideNavStyles = {
  display: "flex",
  alignItems: "center",
  gap: "2em",
};

const badgeStyles = {
  position: "absolute",
  top: "-6px",
  right: "-10px",
  background: "var(--Orange)",
  color: "white",
  fontSize: "0.7em",
  padding: "2px 6px",
  borderRadius: "50%",
  fontWeight: "600",
};

const dropdownStyles = {
  position: "absolute",
  top: "3em",
  right: 0,
  width: "320px",
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  padding: "1em",
  zIndex: 10,
};

const checkoutBtn = {
  background: "var(--Orange)",
  color: "white",
  border: "none",
  borderRadius: "10px",
  padding: "1em",
  cursor: "pointer",
  fontWeight: "600",
};

export default Nav;
