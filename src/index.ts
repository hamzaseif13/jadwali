import { AppDataSource } from "./config/DataSource";
// @ts-ignore
import cors from "cors";
import express, { Express } from "express";
import path from "path";
import { searchRouter } from "./routers/searchRouter";
import { generateRouter } from "./routers/generateRouter";
import compression from "compression";
import { feedbackRouter } from "./routers/feedbackRouter";
import { sectionsRouter } from "./routers/sectionsRouter";
import { lastUpdatedRouter } from "./routers/lastUpdatedRouter";
AppDataSource.initialize()
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));
const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(compression());
app.use(express.json());
app.use(cors());
app.use(searchRouter);
app.use(generateRouter);
app.use(feedbackRouter);
app.use(sectionsRouter);
app.use(lastUpdatedRouter);

app.get("/", (req, res) => {
  res.redirect(301, "https://mango-field-0a8429b10.3.azurestaticapps.net/");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
