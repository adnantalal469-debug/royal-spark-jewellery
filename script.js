const productContainer = document.getElementById("products");

products.forEach(product => {

productContainer.innerHTML += `

<div class="card">

<img src="${product.image}">

<h2>${product.name}</h2>

<p>${product.price}</p>

<p>${product.reviews}</p>

<p>${product.delivery}</p>

<button onclick="viewProduct(${product.id})">
View Product
</button>

</div>

`;

});

function viewProduct(id){

localStorage.setItem("productId",id);

window.location.href = "product.html";

}
