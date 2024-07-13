let templateId = "template_kc5c6gp";
let emailServiceId = "service_jthbvg9";
let errorColorCode = "rgb(202, 86, 86)";
let successColorCode = "rgb(76, 157, 76)";

(function () {
  emailjs.init({ publicKey: "yub9YZVdmF3MCT_9f" });
})();

const contactForm = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitBtn = document.querySelector(".submit");

const toast = document.querySelector(".toast_notification");

const resetValues = () => {
  name.value = "";
  email.value = "";
  message.value = "";
};

const handleToast = (text, bgColor) => {
  toast.textContent = text;
  toast.style.backgroundColor = bgColor;
  toast.classList.add("toast_notification_open");
  setTimeout(() => {
    toast.classList.remove("toast_notification_open");
  }, [4000]);
};

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  submitBtn.textContent = "...";
  submitBtn.setAttribute("disabled", true);
  emailjs
    .sendForm(emailServiceId, templateId, this)
    .then(() => {
      handleToast(
        "Thank you for your message. I will get back to you soon.",
        successColorCode
      );
    })
    .catch(() => {
      handleToast(
        "Failed to send the message. Please try again later",
        errorColorCode
      );
    })
    .finally(() => {
      submitBtn.textContent = "SUBMIT";
      submitBtn.removeAttribute("disabled", true);
      resetValues();
    });
});
