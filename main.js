
document.getElementById("myButton").addEventListener("click", function() {
  basicFetch();
  this.style.display = "none"; 
  document.getElementById("presshere").style.display = "none"; 
});
async function basicFetch() {
  const output = document.getElementById("basicOutput");
  output.innerHTML = "Loading...";

  try {
       
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );


    console.log(response.products);

    output.innerHTML = `
  <div class="card">
    <img src="${response.products[0].images[0]}" alt="Product image" width="200">
    <h3>Essence Mascara Lash Princess</h3>
    <p>description: ${JSON.stringify(response.products[0].description)}</p>
    <p>category: ${JSON.stringify(response.products[0].category)}</p>
    <p>price: ${JSON.stringify(response.products[0].price)}</p>
  </div>

  <div class="card">
    <img src="${response.products[1].images[0]}" alt="Product image" width="200">
    <h3>Essence Mascara Lash Princess</h3>
    <p>description: ${JSON.stringify(response.products[1].description)}</p>
    <p>category: ${JSON.stringify(response.products[1].category)}</p>
    <p>price: ${JSON.stringify(response.products[1].price)}</p>
  </div>

  <div class="card">
    <img src="${response.products[2].images[0]}" alt="Product image" width="200">
    <h3>Essence Mascara Lash Princess</h3>
    <p>description: ${JSON.stringify(response.products[2].description)}</p>
    <p>category: ${JSON.stringify(response.products[2].category)}</p>
    <p>price: ${JSON.stringify(response.products[2].price)}</p>
  </div>

  <div class="card">
    <img src="${response.products[3].images[0]}" alt="Product image" width="200">
    <h3>Essence Mascara Lash Princess</h3>
    <p>description: ${JSON.stringify(response.products[3].description)}</p>
    <p>category: ${JSON.stringify(response.products[3].category)}</p>
    <p>price: ${JSON.stringify(response.products[3].price)}</p>
  </div>
`;

      

  } catch (err) {
    console.log(err);
  }
}


