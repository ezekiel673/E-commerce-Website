import { useState } from "react"
import cart from './assets/images/icon-cart.svg'

const Content = ({ setCartCount }) => {
    const [quantity, setQuantity] = useState(0)

    const increment = () => setQuantity(q => q + 1)
    const decrement = () => setQuantity(q => (q > 0 ? q - 1 : 0))

    const addToCart = () => {
        if (quantity > 0) {
            setCartCount(prev => prev + quantity)
            setQuantity(0) // reset after adding
        }
    }

    return(
        <main >
            <h3 style={h3Styles}>sneaker company</h3>
            <h1 style={{margin:'0.5em 0 0.5em 0', width:'70%', fontSize:'3em'}}>Fall Limited Edition Sneakers</h1>
            <p style={{margin:'0 0 0.75em 0', lineHeight: '1.75', color: 'var(--dg_blue)', width:'70%'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="price" style={{display: 'flex', gap:'1em', marginBottom:'2.5em'}}>
                <div > 
                    <div style={{fontSize:'1.75em', fontWeight:'bolder'}}> $125.00</div>
                    <div style={{textDecoration:'line-through', color: 'var(--dg_blue)', fontWeight:'700'}}>$250.00</div>
                </div>
                <div style={{display: 'flex', alignItems:'center', justifyContent:'center', background:'var(--Black)', color:'var(--White)', borderRadius:'0.3em', width:'70px', height:'32px', fontSize:'1.15em', }}> 50% </div>
            </div>
            <div className="order" style={{display:'flex', gap:'1em'}}>
                <div className="increment_button" style={{background:'var(--lg_blue)', borderRadius:'16px', width:'250px',height:'60px', display: 'flex', gap:'4em',alignItems:'center', justifyContent:'center' }}>
                    <button onClick={decrement} style={{color:'var(--Orange)', fontSize:'2.5em', background:'var(--lg_blue)', fontWeight:'500'}}>-</button>
                    <div style={{fontWeight:'bold'}}>{quantity}</div>
                    <button onClick={increment} style={{color:'var(--Orange)', fontSize:'1.5em', background:'var(--lg_blue)', fontWeight:'600'}}>+</button>
                </div>
                <button onClick={addToCart} className="add_to_cart" style={{background:'var(--Orange)', borderRadius:'16px', width:'250px',height:'60px', display: 'flex', gap:'1em',alignItems:'center', justifyContent:'center' }}>
                    <img src={cart} alt="cart"  style={{filter: 'brightness(0) saturate(100%)'}} />
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
