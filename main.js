function func() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour >= 11) {
    var roll = document.getElementById("rollnumber").value;
    var name = document.getElementById("name").value;
    // var Roll = document.getElementById("rollnumber").value;
    // var Roll = document.getElementById("rollnumber").value;
    window.open("result.html?name=" + name + "&roll=" + roll);// Suggested code may be subject to a license. Learn more: ~LicenseLog:4165416822.
    javascript
    const data = {
      name: name,
      rollnumber: roll,
      password: "password"
    };
    const jsonData = JSON.stringify(data);
    fetch("data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: jsonData
    }).then(response => {
      if (response.ok) {
        console.log("Data stored successfully");
      } else {
        console.error("Failed to store data");
      }
    });

  }
  else {
    alert("Result will be diclared soon!..")
  }
}
