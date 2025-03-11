import Product from "./product";

function productTab() {
    return (
        <>
            <Product title="Phone" price={30000} />
            <Product title="Laptop" price={40000} />
            <Product title="pan" price={10} />
        </>

    )
}

export default productTab;