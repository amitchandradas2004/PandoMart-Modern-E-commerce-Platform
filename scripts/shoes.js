const shoes = () => {
  fetch("./files/shoes.json")
    .then((res) => res.json())
    .then((values) =>
      values.forEach((value) => {
        // console.log(value);
        //  1: Get the container and empty the container
        const shoesContainer = document.getElementById("shoes-container");
        // console.log(bagsContainer);
        // 2: Create the element
        const shoeCard = document.createElement("div");
        shoeCard.innerHTML = ` <div
            class="space-y-2 bg-white p-5 rounded-3xl shadow-md shadow-pink-300 h-full"
          >
            <img src="${value.Image}" alt=" ${value.title}" class="mx-auto" />
            <h2 class="poppins text-xl font-bold text-center">
              ${value.title}
            </h2>
            <p class="inter text-center">
              ${value.info}
            </p>
            <p class="text-center font-bold">$${value.price}</p>
            <div class="text-center">
              <button class="btn btn-neutral rounded-full">
                BUY NOW <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>`;
        // Append the element
        shoesContainer.append(shoeCard);
      }),
    )
    .catch((error) => console.error(error));
};

shoes();
