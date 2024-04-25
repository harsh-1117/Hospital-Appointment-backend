import app from "./app.js";
import cloudinary from "cloudinary";
// require("../backend/database/dbConnection.js");

cloudinary.v2.config({
  cloud_name: "dxp1xing8",
  api_key: 811742837585546,
  api_secret: "fSrF4mdJuntK4HEteyEZeHYjHD4",
});

app.listen(4000, () => {
  console.log(`Server listening at port ${4000}`);
});
