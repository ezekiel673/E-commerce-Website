import { useState } from "react";
import logo from "../public/logo.svg";
import cartIcon from "./assets/images/icon-cart.svg";
import avatar from "./assets/images/image-avatar.png";
import deleteIcon from "./assets/images/icon-delete.svg";

const links = ["Collections", "Men", "Women", "About", "Contact"];

const Nav = ({ cartItems, setCartItems }) => {
  const [activeLink, setActiveLink] = useState("Collections");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <nav style={navStyles}>
      {/* Logo & Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "5em" }}>
        <div>
          <img src={logo} alt="logo" />
        </div>
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
                    activeLink === link ? "var(--Black)" : "var(--dg_blue)",
                  borderBottom:
                    activeLink === link
                      ? "2px solid var(--Orange)"
                      : "2px solid transparent",
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Actions */}
      <div style={sideNavStyles}>
        {/* Cart */}
        <div style={{ position: "relative" }}>
          <img
            src={cartIcon}
            alt="cart"
            style={{ cursor: "pointer" }}
            onClick={toggleCart}
          />
          {cartItems.length > 0 && (
            <span style={badgeStyles}>{cartItems.length}</span>
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
                        src={item.img}
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

        {/* Avatar */}
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

// ---------------- STYLES ----------------
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

const aStyles = {
  fontSize: "var(--Fs)",
  textDecoration: "none",
  paddingBottom: "8px",
  display: "inline-block",
};

const sideNavStyles = {
  display: "flex",
  alignItems: "center",
  gap: "2.5em",
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
