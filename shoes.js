const bags = () => {
  fetch("./shoes.json")
    .then((res) => res.json())
    .then((values) =>
      values.forEach((value) => {
        console.log(value);
        //  1: Get the container and empty the container
        const bagsContainer = document.getElementById("bags-container");
        // console.log(bagsContainer);
        // 2: Create the element
        const bagCard = document.createElement("div");
        bagCard.innerHTML = ` <div
            class="space-y-2 bg-white p-5 rounded-3xl shadow-md shadow-pink-300 h-full"
          >
            <img src="${value.Image}" alt=" ${value.title}" />
            <h2 class="poppins text-xl font-bold text-center">
              ${value.title}
            </h2>
            <p class="inter text-center">
              ${value.info}
            </p>
            <p class="text-center font-bold">$${value.price}</p>
            <div class="text-center">
              <button class="btn btn-neutral">
                BUY NOW <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>`;
        bagsContainer.append(bagCard);
      }),
    )
    .catch((error) => console.error(error));
};

bags();
