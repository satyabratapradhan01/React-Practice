import Product from "./product";

function productTab() {

    const styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
};


    return (
        <div style={styles}>
            <Product title= "Logitech MX Master" idx={0} />
            <Product title= "Apple Pencile (2nd gen)" idx={1} />
            <Product title= "Zebronics Zeb-trnsformer" idx={2} />
            <Product title= "Petronice Toad 23" idx={3} />
        </div>

    )
}

export default productTab;