const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const app = require("./app");
const databaseConnection = require("./config/database");
const cloudinary = require("cloudinary");

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Connect to Database
databaseConnection();

// Start the Server
app.listen(process.env.PORT, () => {
    console.log(`✅ Server is running on port ${process.env.PORT}`);
});
