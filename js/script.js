const testimonials = [
  {
    id: 1,
    name: "Tanya Sinclair",
    job: "UX Engineer",
    text: `“ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”`,
    img: "./images/image-tanya.jpg",
  },
  {
    id: 1,
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    text: `“ If you want to lay the best foundation possible I’d recommend
            taking this course. The depth the instructors go into is incredible.
            I now feel so confident about starting up as a professional
            developer. ”`,
    img: "./images/image-john.jpg",
  },
  {
    id: 1,
    name: "Silva McLaren",
    job: "Full-stact Web Developer",
    text: `“ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint fugit
          deleniti nemo iusto, nihil quod enim maxime
          voluptates placeat praesentium voluptate voluptas architecto
          cupiditate sit est dolore.”`,
    img: "./images/image-silva.jpeg",
  },
  {
    id: 1,
    name: "Bill Fridayson",
    job: "Interior Graphics Designer",
    text: `“ Debitis veniam officia accusantium ab eum eos ipsum a
          at, voluptatem nemo ea quibusdam mollitia! Ipsa sapiente voluptatibus
          dicta beatae molestiae commodi corporis quas suscipit, libero debitis
          iste.”`,
    img: "./images/image-bill.jpeg",
  },
  {
    id: 1,
    name: "Mike Goodman",
    job: "Senior Back-end Developer",
    text: `“ Debitis veniam officia accusantium ab eum eos ipsum a
          at, voluptatem nemo ea quibusdam mollitia! Ipsa sapiente voluptatibus
          dicta corporis quas suscipit, libero debitis
          iste doloribus dolor quibusdam alias.”`,
    img: "./images/image-mike.jpeg",
  },
];

// select elements

const profileImg = document.querySelector(".profile-img");
const profileText = document.querySelector(".profile-text");
const profileName = document.querySelector(".profile-name");
const profileJob = document.querySelector(".profile-job");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

// set first item
let currentProfile = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showNextProfile();
});

function showNextProfile() {
  let profile = testimonials[currentProfile];
  profileImg.src = profile.img;
  profileText.innerHTML = profile.text;
  profileName.innerHTML = profile.name;
  profileJob.innerHTML = profile.job;
}

// show next profile
nextBtn.addEventListener("click", () => {
  nextBtn.parentElement.classList.toggle("clicked");
  currentProfile++;
  if (currentProfile >= testimonials.length) {
    currentProfile = 0;
  }
  showNextProfile();
});

// show prev profile
prevBtn.addEventListener("click", () => {
  prevBtn.parentElement.classList.toggle("clicked");
  currentProfile--;
  if (currentProfile < 0) {
    currentProfile = testimonials.length - 1;
  }
  showNextProfile();
});
