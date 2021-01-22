function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("from name").value,
    from_email: document.getElementById("from email").value,
    message: document.getElementById("msg").value
  };
  emailjs
    .send("service_d4lm2cn", "template_ftnuzpd", tempParams)
    .then(function (res) {
      console.log("sucess", res.status);
    });
}
