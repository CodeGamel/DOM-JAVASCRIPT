let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts(){
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
        <h2>${product.name}<h2>
        <p>Price:$${product.price.toFixed(2)}</p>
        <p>@{product.description}</p>
        `;
    
        productContainer.appendChild(productDiv);
    });
}

window.addEventListener('load',displayProducts);