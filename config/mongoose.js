//mongoose.js
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://suzan369:ThEirIs898@nodesawsan.aedml2q.mongodb.net/?retryWrites=true&w=majority')
.then(res =>{console.log('DB is connected')})
.catch(err => {console.log(err)});
