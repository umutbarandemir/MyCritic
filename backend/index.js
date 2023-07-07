const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

const mongoose = require("mongoose");
const { Double, Int32 } = require("mongodb");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://<username:password>@cluster0.oqvigy9.mongodb.net/`, {
      dbName:'Cluster0',
      useNewUrlParser: true,
      useUnifiedTopology: true,});
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
connectDB();
const userSchema = new mongoose.Schema({
  id: String,
  email: String,
  password: String,
  username: String,
});

const user1 = mongoose.model("User", userSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const users = [];
const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/api/register", async (req, res) => {
  const { email, password, username } = req.body;
  const id = generateID();

  const result = (await user1.find()).filter(
    (user) => user.username === username && user.password === password
  );

  if (result.length === 0) {
    const newUser = { id, email, password, username };
    const deneme = new user1({
      id: newUser.id,
      email: newUser.email,
      password: newUser.password,
      username: newUser.username,
    });
    deneme.save().then(
      () => console.log("added"),
      (err) => console.log(err)
    );
    users.push(newUser);

    return res.json({
      message: "Account created successfully!",
    });
  }

  res.json({
    error_message: "User already exists",
  });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  let result = await user1.find({ username: username, password: password }).exec();

  if (result.length !== 1) {
    return res.json({
      error_message: "Incorrect credentials",
    });
  }

  res.json({
    message: "Login successfully",
    id: result[0].id,
  });
});

const reviewSchema = new mongoose.Schema({
  id: String,
  movieId: String,
  title: String,
  description: String,
  userId: String,
  score: Number,
  likes: [],
});
const Review = mongoose.model("Reviews", reviewSchema);

app.post("/api/create/review", async (req, res) => {
  const { title, id, score, review  } = req.body;
  const reviewId = generateID();
  const newThread = Review({
    id: reviewId,
    title: title,
    userId: id,
    score: score,
    description: review,
    likes: [],
  });
  newThread.save().then(
    () => console.log("added new review."),
    (err) => console.log(err)
  );
  const reviewList = await Review.find().exec();


  res.json({
    message: "Review created successfully!",
    reviews: reviewList,
  });
});

app.get("/api/all/reviews", async (req, res) => {
  const reviewList = await Review.find().exec();
  res.json({
    reviews: reviewList,
  });
});

app.post("/api/review/like", async (req, res) => {
  const { reviewId, userId } = req.body;
  const result = await Review.find({ id: reviewId }).exec();
  const reviewLikes = result[0].likes;
  const authenticateReaction = reviewLikes.filter((user) => user === userId);

  if (authenticateReaction.length === 0) {
    result[0].updateOne({ $push: { likes: userId } }).exec();
    return res.json({
      message: "You've liked the review!",
    });
  }

  res.json({
    error_message: "You can only react once!",
  });
});




