const express = require('express');
const cors = require('cors');
const app = express();
const port = 3043;

app.use(cors());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
