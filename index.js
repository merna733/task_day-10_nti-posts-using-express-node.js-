import express from "express";

const app = express();
app.use(express.json());

let posts = [
  { id: 1, title: "title1", body: "body1" },
  { id: 2, title: "title2", body: "body2" },
  { id: 3, title: "title3", body: "body3" },
  { id: 4, title: "title4", body: "body4" }
];

// GET all posts
app.get("/posts", (req, res) => {
  res.json({ posts });
});

// UPDATE a post by ID
app.put("/posts/:id", (req, res) => {
  const id = req.params.id;
  const found = posts.find((ele) => ele.id == id);

  if (found) {
    found.body = req.body.body;
    found.title = req.body.title;
    res.json({ message: "updated successful" });
  } else {
    res.json({ message: "Not found Post" });
  }
});

// DELETE a post by ID
app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  posts = posts.filter((post) => post.id != id);
  res.json({ message: "deleted successful" });
});

// Start the server
app.listen(3000, () => {
  console.log("server Running");
});
