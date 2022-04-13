// import all libraries
const express = require(`express`);
const mongoose = require(`mongoose`);
const cors = require(`cors`);

const app = express();
require(`dotenv`).config();
// setup connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to DB 🔌`))
  .catch(() => console.log(`Couldn't connect to DB ❌`));
// setup middlewares
app.use(cors());
app.use(express.json());
// setup routes
app.use(`/api/pistols`, require(`./routes/pistol`));
// start listening on server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running...`);
});
