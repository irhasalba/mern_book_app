const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(cors())

app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
