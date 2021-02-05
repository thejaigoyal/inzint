// // api url
// const api_url =
//   "https://inzintworkspace.slack.com/archives/D01DX5S94TD/p1612288407000200,[tempParams]";

// // Defining async function
// async function getapi() {
//   // Storing response
//   const response = await fetch(api_url);

//   // Storing data in form of JSON
//   var data = await response.json();
//   console.log(data);
//   if (response) {
//     hideloader();
//   }
//   show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
//   document.getElementById("loading").style.display = "none";
// }

// function sendMail(params) {
//   var tempParams = {
//     from_name: document.getElementById("from name").value,
//     from_email: document.getElementById("from email").value,
//     from_subject: document.getElementById("from subject").value,
//     message: document.getElementById("msg").value
//   };
// }

// let myBtn = document.getElementById("myBtn").addEventListener("click", getData);

// function getDatah() {
//   fetch = "https://ykaxiwqnqb.execute-api.us-east-1.amazonaws.com/dev/contact".then(
//     function (res) {
//       console.log(res.json());
//     }
//   );
// }

// getData();
// console.log("running");

document.getElementById("addPost").addEventListener("submit", addPost);

function addPost(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  fetch("https://ykaxiwqnqb.execute-api.us-east-1.amazonaws.com/dev/contact", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((rejected) => {
      console.log(rejected);
    });
}
