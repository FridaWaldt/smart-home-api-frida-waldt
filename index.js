const { app } = require('./core'); 
const { db, update } = require('./db');


app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */

/* 
app.get('/lampor', (req, res) => {
    console.log(req.query)

    db.get('devices')
    .find({type: "Light", id: req.query.id })
    .assign({ on : req.query.on }) // Turn on the device and change brightness
    .value();

    update();
    res.send("Lampa tänd")
})
 */

// Dammsugaren

app.get('/dammsugare/:status', (req,res) => {
    if(req.params.status === "on"){
        req.params.status = true
    } else{
        req.params.status = false
    }

    db.get('devices')
    .find({id: "VAC1" })
    .assign({ on : req.params.status }) // Turn on the device 
    .value();

    update();
    res.send("Dammsugare på")
})


// AC:n

app.get('/AC', (req,res) => {
    db.get('devices')
    .find({id: "AC1" })
    .assign({ on : true }) // Turn on the device 
    .value();

    update();
    res.send("AC på")
})
