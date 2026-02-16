const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const url = "https://fakestoreapi.com/products";

const fetchProducts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

fetchProducts();

const displayProducts = (products) => {
  const productContainer = document.getElementById("product-container");
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
       <div class=" bg-white rounded-lg shadow-md">
            <img
              src="${product.image}"
              alt="${product.title}"
              class="w-full h-64 object-contain bg-[#E5E7EB]  mb-4 rounded"
            />
            <div class="flex items-center justify-between p-4 mb-2">
              <button
                class="text-[#4F39F6] text-sm bg-[#E0E7FF] py-1 px-2 rounded-2xl font-semibold"
              >
                ${product.category}
              </button>
              <p class="text-sm">
                <span class="text-[#FDC700] p-1"
                  ><i class="fa-solid fa-star"></i></span
                > ${product.rating.rate} (${product.rating.count})
              </p>
            </div>
            <h3 class="text-lg font-semibold px-4 mb-2">${product.title.slice(0, 20)}...</h3>
            <p class="text-gray-700 px-4 mb-2">$${product.price}</p>
            <div class="flex items-center justify-between p-4 mt-4">
              <button
                class="border border-[#4F39F6] text-gray-700 px-6 py-1 rounded-md hover:bg-[#3b2dc1] hover:text-white transition duration-300"
              >
                <a href="#" class="flex gap-2 items-center justify-center"
                  ><i class="ri-eye-line"></i><span>Details</span>
                </a>
              </button>
              <button
                class="bg-[#4F39F6] px-8 py-1 rounded-md hover:bg-[#3b2dc1] text-white transition duration-300"
              >
                <a href="#" class="flex items-center justify-center gap-2"
                  ><i class="ri-shopping-cart-line"></i><span>Add</span></a
                >
              </button>
            </div>
          </div>
    `;
    productContainer.appendChild(productCard);
  });
};
