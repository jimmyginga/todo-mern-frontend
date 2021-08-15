const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8001;
app.use(express.static(__dirname));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is running');
});
