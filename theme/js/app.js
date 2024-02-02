const loadReview = () => {
  fetch("https://docdekhaw.onrender.com/doctorreviews/")
    .then((res) => res.json())
    .then((data) => displayReview(data));
};

const displayReview = (reviews) => {
  reviews.forEach((review) => {
    const parent = document.getElementById("review-container");
    const div = document.createElement("div");
    div.classList.add("testimonial-block", "style-2", "gray-bg");
    div.innerHTML = `
      <i class="icofont-quote-right"></i>

      <div class="testimonial-thumb">
        <img
          src="images/team/test-thumb1.jpg"
          alt=""
          class="img-fluid"
        />
      </div>

      <div class="client-info">
        <p>
             ${review.body.slice(0, 100)}
            </p>
            <h6>${review.rating}</h6>
      </div>`;
    parent.appendChild(div);
  });
};
loadReview();
