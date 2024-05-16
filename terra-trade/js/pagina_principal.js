document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("Formulario");
    const propertiesContainer = document.getElementById("properties-container");


    form.addEventListener("submit", function(event) {
        event.preventDefault();


        const name = document.getElementById("property-name").value;
        const address = document.getElementById("property-address").value;
        const neighborhood = document.getElementById("property-neighborhood").value;
        const price = document.getElementById("property-price").value;
        const image = document.getElementById("property-image").value;


        addProperty(name, address, neighborhood, price, image);


        // Limpiar el formulario después de agregar la propiedad
        form.reset();
    });


    function addProperty(name, address, neighborhood, price, image) {
        const propertyDiv = document.createElement("div");
        propertyDiv.classList.add("property");


        const imageElement = document.createElement("img");
        imageElement.src = image;
        imageElement.alt = name;


        const nameElement = document.createElement("h2");
        nameElement.textContent = name;


        const addressElement = document.createElement("p");
        addressElement.textContent = "Dirección: " + address;


        const neighborhoodElement = document.createElement("p");
        neighborhoodElement.textContent = "Barrio: " + neighborhood;


        const priceElement = document.createElement("p");
        priceElement.textContent = "Precio: $" + price;


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            propertiesContainer.removeChild(propertyDiv);
        });


        propertyDiv.appendChild(deleteButton);
        propertyDiv.appendChild(imageElement);
        propertyDiv.appendChild(nameElement);
        propertyDiv.appendChild(addressElement);
        propertyDiv.appendChild(neighborhoodElement);
        propertyDiv.appendChild(priceElement);


        propertiesContainer.appendChild(propertyDiv);
    }
});
