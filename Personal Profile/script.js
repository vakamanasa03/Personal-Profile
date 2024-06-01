function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
  
    if (email === "") {
      alert("Please enter your email address.");
      return false;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (message === "") {
      alert("Please enter your message.");
      return false;
    }
  
    // Submit the form if all validations pass (assuming a form submission method exists)
    // You might use something like:
    // document.getElementById('contactForm').submit();
    alert("Your message has been sent!");
    return true;
  }
  
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }