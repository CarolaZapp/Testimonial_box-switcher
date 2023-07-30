const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const userRole = document.querySelector(".role");

// normaly from database .... //

const testimonials = [
  // normaly from database .... //
{
  name: "Baumreihe",
  position: "Lindlar",
  photo: "./images/20210718_111755.jpg",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa dicta quisquam blanditiis corrupti! Repellat excepturi voluptates sed! Saepe facere aspernatur optio ratione placeat. Quae obcaecati accusantium eum hic, aliquam dolores vel animi. Numquam eum nemo quos ex, cumque officiis recusandae optio alias vitae mollitia odit doloribus eos. Itaque, ex.",
},
{
  name: "Sommerwiese",
  position: "Lindlar",
  photo: "./images/20210718_111744.jpg",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa dicta quisquam blanditiis corrupti! Repellat excepturi voluptates sed! Saepe facere aspernatur optio ratione placeat. Quae obcaecati accusantium eum hic, aliquam dolores vel animi. Numquam eum nemo quos ex, cumque officiis recusandae optio alias vitae mollitia odit doloribus eos. Itaque, ex.",
},
{
  name: "Käferholz",
  position: "Lindlar",
  photo: "./images/20200920Käferholz2.jpg",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa dicta quisquam blanditiis corrupti! Repellat excepturi voluptates sed! Saepe facere aspernatur optio ratione placeat. Quae obcaecati accusantium eum hic, aliquam dolores vel animi. Numquam eum nemo quos ex, cumque officiis recusandae optio alias vitae mollitia odit doloribus eos. Itaque, ex.",
},
{
  name: "Hummerbuden",
  position: "Helgoland",
  photo: "./images/IMG_1821.JPG",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa dicta quisquam blanditiis corrupti! Repellat excepturi voluptates sed! Saepe facere aspernatur optio ratione placeat. Quae obcaecati accusantium eum hic, aliquam dolores vel animi. Numquam eum nemo quos ex, cumque officiis recusandae optio alias vitae mollitia odit doloribus eos. Itaque, ex.",
},
{
  name: "Lange Anna",
  position: "Helgoland",
  photo: "./images/IMG_1967.JPG",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa dicta quisquam blanditiis corrupti! Repellat excepturi voluptates sed! Saepe facere aspernatur optio ratione placeat. Quae obcaecati accusantium eum hic, aliquam dolores vel animi. Numquam eum nemo quos ex, cumque officiis recusandae optio alias vitae mollitia odit doloribus eos. Itaque, ex.",
},
{
  name: "Düne mit Leuchtturm",
  position: "Helgoland",
  photo: "./images/IMG_2109.JPG",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa dicta quisquam blanditiis corrupti! Repellat excepturi voluptates sed! Saepe facere aspernatur optio ratione placeat. Quae obcaecati accusantium eum hic, aliquam dolores vel animi. Numquam eum nemo quos ex, cumque officiis recusandae optio alias vitae mollitia odit doloribus eos. Itaque, ex.",
},

]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text} = testimonials[idx]

  testimonial.innerHTML = text 
  userImage.src = photo
  userName.innerHTML = name
  userRole.innerHTML = position

  idx++

  if(idx > testimonials.length -1) {
    idx= 0
  }

}

setInterval(updateTestimonial, 10000)

