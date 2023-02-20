function sendMail(){
  var paul = {
    name: document.getElementById("name").value ,
    email: document.getElementById("email").value ,
    subject: document.getElementById("subject").value ,
    message: document.getElementById("message").value ,
  };

const serviceId = "service_gd1a07t";
const templateId = "template_g71d2fj";

emailjs
  .send(serviceId,templateId,paul)
  .then(res =>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message sent successfully");
  }
)
.catch((err) => console.log(err));
}