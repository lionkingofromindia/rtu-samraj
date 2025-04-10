function func() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour >= 12) {
    // Get the roll number and name from the input fields
    var roll = document.getElementById("rollnumber").value;
    var name = document.getElementById("name").value;
    
    // Open result.html with the parameters in the URL
    window.open("result.html?name=" + encodeURIComponent(name) + "&roll=" + encodeURIComponent(roll));

    // Remove extraneous text ("javascript") if any; it's not needed in code

    // Prepare data to be sent to data.json
    const data = {
      name: name,
      rollnumber: roll,
      password: "password"
    };

    const jsonData = JSON.stringify(data);

    // Post the JSON data using fetch
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
    }).catch(error => {
      console.error("Error during fetch:", error);
    });

  } else {
    alert("Result will be declared soon!..");
    console.log("Current hour:", currentHour);
  }
}
