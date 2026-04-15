const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  const { post } = req.body;
  console.log({ post });
  res.json({ 
    message: `I received your POST request. This is what you sent me: ${post}` 
  });
});

app.listen(5001, () => {   // ← بدل 5000 لـ 5001
  console.log('Listening on port 5001');
});