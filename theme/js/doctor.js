const loadDoctor = () => {
  fetch("https://docdekhaw.onrender.com/doctorlist/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Log the data here if needed
      displyDoctors(data);
    })
    .catch((err) => console.log(err));
};

const displyDoctors = (doctors) => {
  const parent = document.getElementById("doctors-card");

  doctors?.forEach((doctor) => {
    const li = document.createElement("li");
    li.classList.add("slide-visible");

    li.innerHTML = `
        <div class="card shadow h-100">
        <div class="ratio ratio-16x9">
          <img
            src=${doctor.image}
            class="card-img-top"
            loading="lazy"
            alt="..."
          />
        </div>
        <div class="card-body p-3 p-xl-5">
          <h3 class="card-title h5">${doctor?.user}</h3>
          <p class="card-text">
          specialized:
          ${doctor?.designation[0]}
          </p>
          <p>
            ${
              doctor?.specialization
                ?.map(
                  (item) =>
                    `<button class="btn btn-info btn-sm p-1 m-2">${item}</button>`
                )
                .join("") || "No specialization available"
            }
          </p>
       <a target="_blank" class="btn btn-primary btn-sm text-white" href="docDetails.html?doctorId=${
         doctor.id
       }">Details</a>
        </div>
      </div>`;

    parent.appendChild(li);
  });
};


loadDoctor();
