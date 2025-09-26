import { useState } from "react";

import product1 from "./assets/images/image-product-1.jpg";
import product2 from "./assets/images/image-product-2.jpg";
import product3 from "./assets/images/image-product-3.jpg";
import product4 from "./assets/images/image-product-4.jpg";

import product_thumbnail1 from "./assets/images/image-product-1-thumbnail.jpg";
import product_thumbnail2 from "./assets/images/image-product-2-thumbnail.jpg";
import product_thumbnail3 from "./assets/images/image-product-3-thumbnail.jpg";
import product_thumbnail4 from "./assets/images/image-product-4-thumbnail.jpg";

import closeIcon from "./assets/images/icon-close.svg";
import nextIcon from "./assets/images/icon-next.svg";
import prevIcon from "./assets/images/icon-previous.svg";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const products = [product1, product2, product3, product4];
  const thumbnails = [
    product_thumbnail1,
    product_thumbnail2,
    product_thumbnail3,
    product_thumbnail4,
  ];

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <>
      <section style={SectionStyles}>
        <img
          src={products[activeIndex]}
          alt="Main product"
          style={img1Styles}
          onClick={openLightbox}
        />

        <div style={shoeGalleryStyles}>
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
                border:
                  activeIndex === index
                    ? "3px solid var(--Orange)"
                    : "3px solid transparent",
                transition: "all 0.3s ease",
              }}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <img
                src={thumb}
                alt={`thumbnail-${index + 1}`}
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "10px",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "hsla(0, 0%, 100%, 0.25)",
                  opacity: activeIndex === index || hoverIndex === index ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {isLightboxOpen && (
        <div style={overlayStyles}>
          <div style={lightboxStyles}>
            <img
              src={closeIcon}
              alt="close"
              onClick={closeLightbox}
              style={{
                alignSelf: "flex-end",
                cursor: "pointer",
                marginBottom: "1em",
              }}

                onMouseEnter={(e) =>
                (e.currentTarget.style.filter =
                "invert(46%) sepia(91%) saturate(2764%) hue-rotate(357deg) brightness(95%) contrast(101%)")
                }
                onMouseLeave={(e) =>
                (e.currentTarget.style.filter =
                "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg)")
                }
            />

            <div style={{ position: "relative" }}>
              <img
                src={products[activeIndex]}
                alt="lightbox product"
                style={{
                  width: "500px",
                  borderRadius: "16px",
                  display: "block",
                }}
              />

              <button
                onClick={goPrev}
                style={{
                  ...navButtonStyles,
                  left: "-30px",
                }}
              >
                <img src={prevIcon} alt="prev"
                    onMouseEnter={(e) =>
                    (e.currentTarget.style.filter =
                    "invert(46%) sepia(91%) saturate(2764%) hue-rotate(357deg) brightness(95%) contrast(101%)")
                    }
                    onMouseLeave={(e) =>
                    (e.currentTarget.style.filter =
                    "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg)")
                    }
                />
              </button>

              <button
                onClick={goNext}
                style={{
                  ...navButtonStyles,
                  right: "-30px",
                }}
              >
                <img src={nextIcon} alt="next"
                    onMouseEnter={(e) =>
                    (e.currentTarget.style.filter =
                    "invert(46%) sepia(91%) saturate(2764%) hue-rotate(357deg) brightness(95%) contrast(101%)")
                    }
                    onMouseLeave={(e) =>
                    (e.currentTarget.style.filter =
                    "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg)")
                }
                />
              </button>
            </div>

            <div style={shoeGalleryStyles}>
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                    border:
                      activeIndex === index
                        ? "3px solid var(--Orange)"
                        : "3px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <img
                    src={thumb}
                    alt={`thumbnail-${index + 1}`}
                    style={{
                      width: "75px",
                      height: "75px",
                      borderRadius: "10px",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "hsla(0, 0%, 100%, 0.25)",
                      opacity:
                        activeIndex === index || hoverIndex === index ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SectionStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.75em",
};

const img1Styles = {
  width: "70%",
  borderRadius: "16px",
  alignSelf: "flex-start",
  cursor: "pointer",
};

const shoeGalleryStyles = {
  display: "flex",
  gap: "1.5em",
  alignSelf: "flex-start",
};

const overlayStyles = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.75)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

const lightboxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5em",
};

const navButtonStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "white",
  borderRadius: "50%",
  border: "none",
  padding: "1em",
  cursor: "pointer",
};

export default SideBar;

