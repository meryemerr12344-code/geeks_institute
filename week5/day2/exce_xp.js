//excercice
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", userSchema);


// Post Schema
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Post = mongoose.model("Post", postSchema);


// Run Test
const run = async () => {

  try {

    // create user
    const user = await User.create({
      name: "Lina",
      email: "lina@gmail.com"
    });

    console.log("User Created:", user);

    // create post
    const post = await Post.create({
      title: "Mongoose is Awesome",
      content: "Learning relationships in MongoDB",
      author: user._id
    });

    console.log("Post Created:", post);

    // populate author
    const postWithAuthor = await Post
      .findOne({ title: "Mongoose is Awesome" })
      .populate("author");

    console.log("Post Title:", postWithAuthor.title);
    console.log("Author Name:", postWithAuthor.author.name);

  } catch (error) {
    console.log(error);
  }

};

run();

//excercice 2
/*const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  updatedAt: Date
});


// Middleware Pre Save
studentSchema.pre("save", function(next) {

  this.updatedAt = Date.now();

  next();

});

const Student = mongoose.model("Student", studentSchema);


// Run Test
const run = async () => {

  try {

    const student = new Student({
      name: "Ali"
    });

    await student.save();

    console.log("Student saved:", student);

  } catch (error) {
    console.log(error);
  }

};

run();*/