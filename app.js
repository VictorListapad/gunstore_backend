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
app.use(`/api/rifles`, require(`./routes/rifle`));
app.use(`/api/ammunition`, require(`./routes/ammunition`));
app.use(`/api/gear`, require(`./routes/gear`));
app.use(`/api/auth`, require(`./routes/user`));
app.use(`/api/gearComments`, require(`./routes/gearComment`));
app.use(`/api/pistolComments`, require(`./routes/pistolComment`));
app.use(`/api/rifleComments`, require(`./routes/rifleComment`));
app.use(`/api/ammunitionComments`, require(`./routes/ammunitionComment`));
app.use(`/api/gearReviews`, require(`./routes/gearReview`));
app.use(`/api/ammunitionReviews`, require(`./routes/ammunitionReview`));
app.use(`/api/pistolReviews`, require(`./routes/pistolReview`));
// start listening on server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running...`);
});
