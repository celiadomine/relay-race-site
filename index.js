const PORT = 3003;

const express = require("express");

const app = express();

app.use(express.static("./"));

app.listen(PORT, () => {
    console.log(`listening ${PORT}`);
});
