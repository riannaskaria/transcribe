const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
