import * as dotenv from "dotenv";
import atob from 'atob'

dotenv.config();

export default {
  port: process.env.PORT,
  db: {
    uri: atob(
      "bW9uZ29kYitzcnY6Ly9kaXZ5YW5zaDpkaXYyMTkwMkBjbHVzdGVyMC5iZmJycC5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5"
    ), //atob(process.env.DB_URI),
  },
};

