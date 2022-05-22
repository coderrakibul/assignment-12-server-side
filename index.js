const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
    res.send('Hello From Server!')
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})