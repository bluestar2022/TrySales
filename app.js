const expressHHH = require('express');
const app = expressHHH();
const PORT = 3000;
const mongooseHHH = require('mongoose');
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello Hisham!');
});

// app.listen(PORT, () => {
//     console.log(`Server is running on page ${PORT}`);
// });

mongooseHHH
    .connect(process.env.MongoDB_ConnectionString)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`connection to mongo db is successful: http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
