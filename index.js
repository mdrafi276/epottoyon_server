require("dotenv").config();
const express = require("express");
const cors = require("cors")

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors({
      origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "https://udcbd.web.app",
            "https://udcbd.firebaseapp.com",
      ],
}))

const db = require("./models");

// Routers
const linksRouter = require("./routes/links");
app.use("/old_server/v1/links", linksRouter);

const blogsRouter = require('./routes/blogs')
app.use('/old_server/v1/blogs', blogsRouter)

const usersRouter = require('./routes/users');
app.use('/old_server/v1/users', usersRouter);

const unionsRouter = require('./routes/unions');
app.use('/old_server/v1/unions', unionsRouter);

const divisionsRouter = require('./routes/divisions');
app.use('/old_server/v1/divisions', divisionsRouter);


db.sequelize.sync().then(() => {
      app.listen(port, () => {
            console.log(`UDCBD Server Running on ${port}`);
      })
});
