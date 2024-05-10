import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

(async() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})();