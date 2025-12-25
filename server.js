document.addEventListener("DOMContentLoaded", () => {
  const slots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM"
  ];

  const slotList = document.getElementById("slots");
  const confirmationBox = document.getElementById("confirmation");

  // Render slots
  slots.forEach(time => {
    const li = document.createElement("li");
    li.textContent = time;

    const btn = document.createElement("button");
    btn.textContent = "Book";
    btn.addEventListener("click", () => bookSlot(time, btn));

    li.appendChild(btn);
    slotList.appendChild(li);
  });

  function bookSlot(time, button) {
    // Disable button to prevent double booking
    button.disabled = true;
    button.textContent = "Booked";

    // Show confirmation
    confirmationBox.textContent = `✅ Appointment confirmed for ${time}`;
    confirmationBox.classList.remove("hidden");
  }
});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/appointments', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
// Routes
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');

app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
