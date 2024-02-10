document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const form = event.target;
    if (form.checkValidity()) {
      form.reportValidity();
      form.submit();
    } else {
      form.reportValidity();
    }
  });