const loadServices = () => {
  fetch("https://docdekhaw.onrender.com/services")
    .then((res) => res.json())
    .then((data) => displayService(data))
    .catch((err) => console.log(err));
};

const displayService = (services) => {
  services.forEach((service) => {
    const parent = document.getElementById("servicesAll");
    const div = document.createElement("div");
    div.classList.add("col-lg-4", "col-md-6");
    div.innerHTML = `
          <div class="department-block mb-5">
              <img
                src="${service.image}"
                alt=""
                class="img-fluid w-100"
              />
              <div class="content">
                <h4 class="mt-4 mb-2 title-color">${service.name}</h4>
                <p class="mb-4">
                ${service.description.slice(0, 140)}
                </p>
                <a href="department-single.html" class="read-more"
                  >Learn More <i class="icofont-simple-right ml-2"></i
                ></a>
              </div>
            </div>
        `;
    parent.appendChild(div);
  });
};

loadServices();
