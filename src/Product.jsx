import "./product.css"
import Price from "./Price";

function Product({title, idx}){
    const oldPrice = ["12,495", "11,900", "1,599", "599"];
    const newPrice  = ["8,999", "9,199", "899", "278"];
    const description = ["8,000 DPI", "intutive surface", "designed for ipad pro", "wireless"];
        return (
        <div className="Product">
            <h4>{title}</h4>
            <h5>{description[idx]}</h5>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}

export default Product;