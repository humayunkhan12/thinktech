// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDOyf1HSmKSsECZklFGedrlckTWlgCe4aY",
  authDomain: "form-d9294.firebaseapp.com",
  projectId: "form-d9294",
  storageBucket: "form-d9294.appspot.com",
  messagingSenderId: "551556593304",
  appId: "1:551556593304:web:07f7cead3562b3e76ac2ed"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
