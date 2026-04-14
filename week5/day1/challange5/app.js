const mongoose = require('mongoose');

// 🔗 Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/taskmaster')
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ Error:", err));

// 📌 Schema
const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, "You must provide a task title"] 
  },
  description: String,
  status: { 
    type: String, 
    enum: ['pending', 'completed'], 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Task = mongoose.model('Task', taskSchema);

// 🟢 Create Task
const createTask = async (data) => {
  try {
    const task = await Task.create(data);
    console.log("✅ Created:", task);
  } catch (err) {
    console.log("❌ Error:", err.message);
  }
};

// 🔵 Get All Tasks
const getTasks = async () => {
  const tasks = await Task.find();
  console.log("📋 Tasks:", tasks);
};

// 🟡 Complete Task
const completeTask = async (id) => {
  await Task.findByIdAndUpdate(
    id,
    { status: 'completed' },
    { runValidators: true }
  );
  console.log("🚀 Task completed!");
};

// 🎮 CLI Commands
const command = process.argv[2];
const arg = process.argv[3];

if (command === "create") {
  createTask({
    title: arg, // example: node app.js create "Learn MongoDB"
  });
}

if (command === "list") {
  getTasks();
}

if (command === "complete") {
  completeTask(arg); // example: node app.js complete ID
}