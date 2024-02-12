const loadReview = () => {
  fetch("https://docdekhaw.onrender.com/doctorreviews/")
    .then((res) => res.json())
    .then((data) => displayReview(data));
};

const displayReview = (reviews) => {
  reviews.forEach((review) => {
    const parent = document.getElementById("review");
    const li = document.createElement("li");
    li.classList.add("slide-visible");
    li.innerHTML = `
      <div class="card shadow h-100">
              <div class="ratio ratio-16x9">
                <img
                  src="/theme/umar-ben-ZGQKW-nIW8o-unsplash.jpg"
                  class="card-img-top"
                  loading="lazy"
                  alt="..."
                />
              </div>
              <div class="card-body p-3 p-xl-5">
                <h3 class="card-title h5">${review.reviewer}</h3>
                <p class="card-text">
                  ${review.body}
                </p>
                <div><h5>Doctor:</h5><p>${review.doctor}</p></div>
              </div>
            </div>
      `;
    parent.appendChild(li);
  });
};

const loadTime = () => {
  fetch("https://docdekhaw.onrender.com/doctoravailable_time/")
    .then((res) => res.json())
    .then((data) => displayTime(data));
};
const displayTime = (times) => {
  times.forEach((time) => {
    const parent = document.getElementById("time-container");
    const li = document.createElement("li");
    li.classList.add("d-flex", "justify-content-between");
    li.innerHTML = `
    ${time.name}
    `;
    parent.appendChild(li);
  });
};
loadTime();
loadReview();
