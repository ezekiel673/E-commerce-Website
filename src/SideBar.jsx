import { useState } from "react";

import product1 from "./assets/images/image-product-1.jpg";
import product2 from "./assets/images/image-product-2.jpg";
import product3 from "./assets/images/image-product-3.jpg";
import product4 from "./assets/images/image-product-4.jpg";

import product_thumbnail1 from "./assets/images/image-product-1-thumbnail.jpg";
import product_thumbnail2 from "./assets/images/image-product-2-thumbnail.jpg";
import product_thumbnail3 from "./assets/images/image-product-3-thumbnail.jpg";
import product_thumbnail4 from "./assets/images/image-product-4-thumbnail.jpg";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const products = [product1, product2, product3, product4];
  const thumbnails = [
    product_thumbnail1,
    product_thumbnail2,
    product_thumbnail3,
    product_thumbnail4,
  ];

  return (
    <section style={SectionStyles}>
      <img src={products[activeIndex]} alt="Main product" style={img1Styles} />

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

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor:
                  activeIndex === index
                    ? "hsla(0, 0%, 100%, 0.25)" 
                    : "hsla(0, 0%, 100%, 0.25)",
                opacity: activeIndex === index || hoverIndex === index ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            />
          </div>
        ))}
      </div>
    </section>
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
};

const shoeGalleryStyles = {
  display: "flex",
  gap: "1.5em",
  alignSelf: "flex-start",
};

export default SideBar;
