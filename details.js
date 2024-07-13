const getProduct = async () => {
    let params = new URLSearchParams(window.location.search)
    let id = params.get('id')
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return data
}
const displayProduct = async () => {
    const product = await getProduct()
    console.log(product)
    const result =  `
    <h1>${product.title}</h1>
    <img src="${product.image}" alt="${product.title}">
    <p>${product.description}</p>
    <strong>Price: $${product.price}</strong>
    `
    document.querySelector('.product').innerHTML = result
}
displayProduct()