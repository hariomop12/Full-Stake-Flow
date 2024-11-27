import express from "express";

const app = express();

app.get("/jokes", (req, res) => {
  res.send("Haa Bhai Server Start hai server.js se");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get("/api/jokes", (req, res) => {
  const jokes = [
    { name: "Jock 1", title: "1st joke", content: "Jock 1 content" },
    { name: "Jock 2", title: "2nd joke", content: "Jock 2 content" },
    { name: "Jock 3", title: "3rd joke", content: "Jock 3 content" },
    { name: "Jock 4", title: "4th joke", content: "Jock 4 content" },
    { name: "Jock 5", title: "5th joke", content: "Jock 5 content" },
    { name: "Jock 6", title: "6th joke", content: "Jock 6 content" },
    { name: "Jock 7", title: "7th joke", content: "Jock 7 content" },
    { name: "Jock 8", title: "8th joke", content: "Jock 8 content" },
    { name: "Jock 9", title: "9th joke", content: "Jock 9 content" },
    { name: "Jock 10", title: "10th joke", content: "Jock 10 content" },
  ];
  res.send(jokes);
});
