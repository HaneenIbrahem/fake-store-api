const getProducts = async () => {
    const {data} = await axios.get("https://fakestoreapi.com/products")
    return data
}

const displayProducts = async ()=>{
    const products = await getProducts();
        const result = products.map((product)=>{
            return `
                <div class="product">
                    <h2>${product.title}</h2>
                    <img src="${product.image}" alt="${product.title}">
                    <strong>Price: $${product.price}</strong>
                    <a href='./details.html?id=${product.id}' class='details-button'>details</a>
                </div>
            `
        }).join('')
        document.querySelector(".products").innerHTML = result;
}
displayProducts();