require("dotenv").config();
const express = require("express");
const cors = require("cors");
const linksRouter = require("./routes/links");
const blogsRouter = require("./routes/blogs");
const usersRouter = require("./routes/users");
const unionsRouter = require("./routes/unions");
const divisionsRouter = require("./routes/divisions");
const districtsRouter = require("./routes/districts");
const upzillasRouter = require("./routes/upzillas");
const unionInfosRouter = require("./routes/union_infos");
const applicationsRouter = require("./routes/applications");
const oarishesRouter = require("./routes/oarishes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "https://udcbd.web.app",
            "https://udcbd.firebaseapp.com",
            "https://eprottoyon.com"
        ],
    })
);

const db = require("./models");

// Routers
app.use("/old_server/v1/links", linksRouter);
app.use("/old_server/v1/blogs", blogsRouter);
app.use("/old_server/v1/users", usersRouter);
app.use("/old_server/v1/unions", unionsRouter);
app.use("/old_server/v1/divisions", divisionsRouter);
app.use("/old_server/v1/districts", districtsRouter);
app.use("/old_server/v1/upazillas", upzillasRouter);
app.use("/old_server/v1/union-infos", unionInfosRouter);
app.use("/old_server/v1/applications", applicationsRouter);
app.use("/old_server/v1/oarishes", oarishesRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`UDCBD Server Running on ${port}`);
    });
});
