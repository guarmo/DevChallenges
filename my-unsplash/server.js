const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect DB
connectDB();

const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/photos", require("./routes/photos"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
