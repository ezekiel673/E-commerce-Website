import { useState } from "react"
import cart from './assets/images/icon-cart.svg'

const Content = ({ setCartItems, activeIndex }) => {
    const [quantity, setQuantity] = useState(0)
    const [hoveredBtn, setHoveredBtn] = useState(null)
    const [activeBtn, setActiveBtn] = useState(null)

    const increment = () => setQuantity(q => q + 1)
    const decrement = () => setQuantity(q => (q > 0 ? q - 1 : 0))

    const addToCart = () => {
        if (quantity > 0) {
            const newItem = {
                id: Date.now(), 
                name: "Fall Limited Edition Sneakers",
                price: 125,
                quantity,
                img: activeIndex 
            }
            setCartItems(prev => [...prev, newItem])
            setQuantity(0) 
        }
    }

    const fadeColor = (base, isHovered, isActive) => {
        if (isActive) return "hsl(26, 100%, 45%)"
        if (isHovered) return "hsl(26, 100%, 65%)"
        return base
    }

    return(
        <main className="content">
            <style>
                {`
                  @media (max-width: 500px) {
                    .content {
                      margin-top: 16px;
                    }

                    .content h3,
                    .content h1,
                    .content p {
                      width: 90% !important;
                      margin-left: 16px !important
                    }
                    .price{
                      flex-direction: row !important;
                      align-items: center;
                      width: 90% !important;
                      justify-content: space-between;
                      margin-left: 16px !important

                    }

                    .content h1{
                        font-size:2.2rem !important
                    }
                    .content p{
                        font-size: 14px !important
                    }

                    .order {
                      display: flex;
                      flex-direction: column;
                      gap: 1em;
                      align-items: center;
                    }

                    .increment_button,
                    .add_to_cart {
                      width: 90% !important;
                    }
                  }
                `}
            </style>

            <h3 style={h3Styles}>sneaker company</h3>
            <h1 style={{margin:'0.5em 0 0.5em 0', width:'70%', fontSize:'3em'}}>
              Fall Limited Edition Sneakers
            </h1>
            <p style={{margin:'0 0 0.75em 0', lineHeight: '1.75', color: 'var(--dg_blue)', width:'70%'}}>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>

            {/* Price Section */}
            <div className="price" style={{display: 'flex', flexDirection:'column', gap:'0.75em', marginBottom:'2.5em'}}>
                <div style={{display:'flex', gap: '1em'}}> 
                    <div style={{fontSize:'1.75em', fontWeight:'bolder'}}> $125.00</div>
                    <div style={{
                        display: 'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        background:'var(--Black)',
                        color:'var(--White)',
                        borderRadius:'0.3em',
                        width:'70px',
                        height:'32px',
                        fontSize:'1.15em'
                    }}>
                        50%
                    </div>
                </div>
                <div style={{
                   textDecoration:'line-through', color: 'var(--dg_blue)', fontWeight:'700'
                }}>
                  $250.00
                </div>
            </div>

            <div className="order" style={{display:'flex', gap:'1em'}}>
                <div className="increment_button" style={{
                    background:'var(--lg_blue)',
                    borderRadius:'16px',
                    width:'250px',
                    height:'60px',
                    display: 'flex',
                    gap:'4em',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <button
                        onClick={decrement}
                        onMouseEnter={() => setHoveredBtn("dec")}
                        onMouseLeave={() => setHoveredBtn(null)}
                        onMouseDown={() => setActiveBtn("dec")}
                        onMouseUp={() => setActiveBtn(null)}
                        style={{
                            color: fadeColor("var(--Orange)", hoveredBtn === "dec", activeBtn === "dec"),
                            fontSize:'2.5em',
                            background:'var(--lg_blue)',
                            fontWeight:'500',
                            cursor:'pointer',
                            border:'none',
                            transition:'color 0.3s ease'
                        }}
                    >
                      -
                    </button>

                    <div style={{fontWeight:'bold'}}>{quantity}</div>

                    <button
                        onClick={increment}
                        onMouseEnter={() => setHoveredBtn("inc")}
                        onMouseLeave={() => setHoveredBtn(null)}
                        onMouseDown={() => setActiveBtn("inc")}
                        onMouseUp={() => setActiveBtn(null)}
                        style={{
                            color: fadeColor("var(--Orange)", hoveredBtn === "inc", activeBtn === "inc"),
                            fontSize:'1.5em',
                            background:'var(--lg_blue)',
                            fontWeight:'600',
                            cursor:'pointer',
                            border:'none',
                            transition:'color 0.3s ease'
                        }}
                    >
                      +
                    </button>
                </div>

                <button
                    onClick={() => addToCart(activeIndex)}
                    onMouseEnter={() => setHoveredBtn("cart")}
                    onMouseLeave={() => setHoveredBtn(null)}
                    onMouseDown={() => setActiveBtn("cart")}
                    onMouseUp={() => setActiveBtn(null)}
                    className="add_to_cart"
                    style={{
                        background: fadeColor("var(--Orange)", hoveredBtn === "cart", activeBtn === "cart"),
                        borderRadius:'16px',
                        width:'250px',
                        height:'60px',
                        display: 'flex',
                        gap:'1em',
                        alignItems:'center',
                        justifyContent:'center',
                        cursor:'pointer',
                        border:'none',
                        transition:'background 0.3s ease, transform 0.1s ease',
                        transform: activeBtn === "cart" ? "scale(0.96)" : "scale(1)"
                    }}
                >
                    <img src={cart} alt="cart" style={{filter: 'brightness(0) saturate(100%)'}} />
                    <div style={{fontSize:'var(--Fs)', fontWeight:'600'}}>Add to cart</div>
                </button>
            </div>
        </main>
    )
}

const h3Styles = {
    textTransform:'uppercase',
    color: 'var(--dg_blue)',
    fontSize:'var(--Fs)'
}

export {Content}
