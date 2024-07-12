let templateId = "template_kc5c6gp";
let emailServiceId = "service_jthbvg9";
(function () {
  emailjs.init({ publicKey: "yub9YZVdmF3MCT_9f" });
})();

const contactForm = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitBtn = document.querySelector(".submit");

const resetValues = () => {
  name.value = "";
  email.value = "";
  message.value = "";
};

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  submitBtn.textContent = "LOADING...";
  submitBtn.setAttribute("disabled", true);
  emailjs
    .sendForm(emailServiceId, templateId, this)
    .then(() => {
      alert("Thank you for your message. I will get back to you soon.");
    })
    .catch(() => {
      alert("Failed to send the message. Please try again later.");
    })
    .finally(() => {
      submitBtn.textContent = "SUBMIT";
      submitBtn.removeAttribute("disabled", true);
      resetValues();
    });
});
