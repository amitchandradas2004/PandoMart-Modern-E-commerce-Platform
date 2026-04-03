const sendbtn = document
  .getElementById("sendbtn")
  .addEventListener("click", function () {
    console.log("sendbtn clicked");
    const sendinput = document.getElementById("sendinput").value.trim();
    console.log(sendinput.value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //It’s a regex pattern used to validate email structure—ensuring there’s text before and after @, and a domain with a dot (like .com).
    if (sendinput.value === "") {
      alert("Email is required!");
      return;
    }
    if (!emailPattern.test(sendinput)) {
      alert("Please enter a valid email!");
      return;
    } else {
      alert("You have succesfully sent your email to us!!!");
    }
  });
