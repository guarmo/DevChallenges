const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const config = require("config");
const connectDB = require("./config/db");
const path = require("path");

// Connect to db
connectDB();

// Add api header
app.get("/*", function (req, res, next) {
  res.header("x-api-key", config.get("catApiKey"));
  next();
});

app.use(express.json({ extended: false }));
// Routes
app.use("/api", require("./routes/cats"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
