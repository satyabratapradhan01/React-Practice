import "./product.css"

function Product({title, price}){
        return (
        <div className="Product">
            <h4> Product: {title} </h4>
            <p> Price: {price} </p>
        </div>
    )
}

export default Product;