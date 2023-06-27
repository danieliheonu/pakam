import "dotenv/config";
import app from "./app";
import db from "./config/db";

db();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
