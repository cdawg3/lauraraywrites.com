function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_adfvr1c";
  const templateID = "template_oybntit";

  emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("service").value = "";
    document.getElementById("message").value = "";
    console.log(res.status);
  });
}
