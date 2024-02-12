const loadDoctor = () => {
  fetch("https://docdekhaw.onrender.com/doctorlist/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayDoctor(data);
    })
    .catch((err) => console.log(err));
};

const displayDoctor = (doctors) => {
  const parent = document.getElementById("Doctors");

  doctors?.forEach((doctor) => {
    const div = document.createElement("div");
    div.classList.add("col-lg-3", "col-md-6", "col-sm-6");

    div.innerHTML = `
        <div class="about-block-item mb-5 mb-lg-0">
          <img src="${doctor.image}" alt="" class="img-fluid w-100">
          <h4 class="mt-3">${doctor?.designation[0]}</h4>
          <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
        </div>`;

    parent.appendChild(div);
  });
};
// const loadReview = () => {
//   fetch("https://docdekhaw.onrender.com/doctorreviews/")
//     .then((res) => res.json())
//     .then((data) => displayReview(data))
//     .catch((err) => console.log(err));
// };
// const displayReview = (reviews) => {
//   reviews.forEach((review) => {
//     const parent = document.getElementById("display-review");
//     const div = document.createElement("div");
//     div.classList.add("client-info")
//     div.innerHTML=`
//       <h4>Amazing service!</h4>
//       <span>John Partho</span>
//     </div>
//     <p>
//       They provide great service facilty consectetur adipisicing elit.
//       Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
//       adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet
//       nostrum nemo commodi numquam quod.
//     </p>
//     <i class="icofont-quote-right"></i>
//     `
//   });
//   parent.appendChild(div);
// }
// loadReview();
loadDoctor();
