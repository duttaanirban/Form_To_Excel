const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

let data = []; // Array to hold form data

app.post('/submit', (req, res) => {
    const { name, email, phone, age, city, address, gender } = req.body;

    // Push received data to array
    data.push({ name, email, phone, age, city, address, gender });

    // Create a new workbook and add the data
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Create a file name and save the workbook
    const filePath = path.join(__dirname, 'data.xlsx');
    xlsx.writeFile(workbook, filePath);

    res.json({ message: 'Data saved!', filePath: '/data.xlsx' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
