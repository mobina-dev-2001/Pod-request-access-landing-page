document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("emailInput");
  const submitMsg = document.getElementById("submitMsg");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
      submitMsg.textContent = "Oops! Please add your email";
      submitMsg.style.color = "var(--red)";
      emailInput.style.border = "2px solid var(--red)";
    } else if (!emailValidate(emailValue)) {
      submitMsg.textContent = "Oops! Please check your email";
      submitMsg.style.color = "var(--red)";
      emailInput.style.border = "2px solid var(--red)";
    } else {
      submitMsg.textContent = "Thank you! Request submitted";
      submitMsg.style.color = "var(--green)";
      emailInput.value = "";
    }
  });

  const emailValidate = (email) => {
    const emailRegex =
      /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  emailInput.addEventListener("input", () => {
    submitMsg.textContent = "";
    emailInput.style.border = "none";
  });
});
