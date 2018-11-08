import express from "express";

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.get("/", (req, resp) => resp.send("hello world!"));

// eslint-disable-next-line no-console
app.listen(port, host, () => console.log(`Listening on port ${host}:${port}`));
