const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 5000;

// Add CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const data = [
    { id: 1, name: '张三', age: 27 },
    { id: 2, name: '李四', age: 30 },
    { id: 3, name: '王五', age: 35 },
    { id: 4, name: 'cc', age: 20 },
    { id: 5, name: 'mm', age: 22 },
    { id: 6, name: 'aa', age: 24 }
];

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});