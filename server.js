const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/available-slots/:service", (req, res) => {
  //sends back data about available appointment slots
  const service = req.params.service;
  // Fetch or calculate available slots based on the service
  // This is a simplified example
  const slots = [
    { time: "09:00", isAvailable: true },
    { time: "09:30", isAvailable: false }, // Example of a blocked slot
    { time: "10:00", isAvailable: true },
    // ... more slots
  ];

  res.json(slots);
});

app.post("/book-appointment", (req, res) => {
  //handles the booking of an appointment
  const appointmentData = req.body;
  console.log("Received appointment data:", appointmentData);
  // Store the data in a database and handle conflicts if slot is already taken

  res.send("Appointment booked successfully");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
