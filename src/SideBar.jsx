import product1 from './assets/images/image-product-1.jpg'
import product_thumbnail1 from './assets/images/image-product-1-thumbnail.jpg'
import product_thumbnail2 from './assets/images/image-product-2-thumbnail.jpg'
import product_thumbnail3 from './assets/images/image-product-3-thumbnail.jpg'
import product_thumbnail4 from './assets/images/image-product-4-thumbnail.jpg'

const SideBar = () => {
    return(
        <section style={SectionStyles}>
            <img src={product1} alt="product1" style={img1Styles} />
            <div className="shoe-gallery" style={shoeGalleryStyles}>
                <img src={product_thumbnail1} className= 'gallery-img' alt="" />
                <img src={product_thumbnail2} className= 'gallery-img' alt=""  />
                <img src={product_thumbnail3} className= 'gallery-img' alt="" />
                <img src={product_thumbnail4} className= 'gallery-img' alt="" />
            </div>
        </section>
    )
}

const SectionStyles = {
    display:'flex',
    flexDirection:' column',
    alignItems: 'center',
    gap:'1.75em'
}


const img1Styles = {
    width:'70%',
    borderRadius:'16px',
    alignSelf: 'flex-start'
}
const shoeGalleryStyles = {
    display: 'flex',
    gap:'1.5em',
    alignSelf: 'flex-start'

}

export default SideBar