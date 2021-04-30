const { app } = require('./core'); 
const { db, update } = require('./db');


app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */


/************ DAMMSUGAREN *************/

// On/off
app.get('/vacuum/status/:status', (req,res) => {
    //om status sätts som on i URL:en kommer dammsugaren att sättas igång med hjälp av params. Skriver man off i URL:en kommer dammsugaren att stängas av, skriver man något annat kommer man få tillbaka ett meddelande om att skriva "on" eller "off"
    if(req.params.status === "on"){
        req.params.status = true
        res.send("Dammsugare på")
    } else if(req.params.status === "off"){
        req.params.status = false
        res.send("Dammsugare av")
    }else{
        res.send("Välj rätt kommando, 'on' eller 'off'")
    }

    //Hämtar alla devices från vår databas "db"
    db.get('devices')
    //Hittar det specifika ID:et "VAC1"
    .find({id: "VAC1" })
    //Tilldelar true/false till dammsugaren som man får från params.
    .assign({ on : req.params.status })
    //Value gör så vi kan läsa datan vi får tillbaka
    .value();

    //Uppdaterar med den nya infon från assign
    update();
})




/************* AC:N ************/

// On/off

app.get('/ac/status/:status', (req,res) => {
    //om status sätts som on i URL:en kommer AC:n att sättas igång med hjälp av params. Skriver man off i URL:en kommer AC:n att stängas av, skriver man något annat kommer man få tillbaka ett meddelande om att skriva "on" eller "off"
    if(req.params.status === "on"){
        req.params.status = true
        res.send("AC på")
    } else if(req.params.status === "off"){
        req.params.status = false
        res.send("AC av")
    } else{
        res.send("Välj rätt kommando, 'on' eller 'off'")
    }

    //Hämtar alla devices från vår databas "db"
    db.get('devices')
    //Hittar det specifika ID:et "AC1"
    .find({id: "AC1" })
     //Tilldelar true/false till AC:n som man får från params.
    .assign({ on : req.params.status })
    //Value gör så vi kan läsa datan vi får tillbaka
    .value();

     //Uppdaterar med den nya infon från assign
    update();
})

//Temp

app.get('/ac/temp/:temp', (req,res) => {
    //Hämtar alla devices från vår databas "db"
    db.get('devices')
    //Hittar det specifika ID:et "AC1"
    .find({id: "AC1" })
    //Tilldelar temperaturen från params till AC:n 
    .assign({ temperature : req.params.temp })
    //Value gör så vi kan läsa datan vi får tillbaka
    .value();

    //Uppdaterar med den nya infon från assign
    update();

    //Får tillbaka meddelande om att AC:n har tempen från params.
    res.send(`AC har nu tempen ${req.params.temp} C`)
})


/****************** GARDINER ****************/

//On/off

app.get('/blinds/status/:status', (req,res) => {
    //om status sätts som down i URL:en kommer gardinen att gå ner med hjälp av params. Skriver man up i URL:en kommer gardinen att gå upp, skriver man något annat kommer man få tillbaka ett meddelande om att skriva "down" eller "up"
    if(req.params.status === "down"){
        req.params.status = true
        res.send("Rullgardiner nerdragna")
    } else if(req.params.status === "up"){
        req.params.status = false
        res.send("Rullgardiner uppdragna")
    } else{
        res.send("Välj rätt kommando, 'down' eller 'up'")
    }

    //Hämtar alla devices från vår databas "db"
    db.get('devices')
    //Hittar det specifika ID:et "BLI1"
    .find({id: "BLI1" })
     //Tilldelar true/false till gardinen som man får från params.
    .assign({ on : req.params.status }) 
    //Value gör så vi kan läsa datan vi får tillbaka
    .value();

    //Uppdaterar med den nya infon från assign
    update();
})



/****************** KAMERA ****************/

//On/off

app.get('/cam/status/:status', (req,res) => {
    //om status sätts som on i URL:en kommer kameran att sättas igång med hjälp av params. Skriver man off i URL:en kommer kameran att stängas av, skriver man något annat kommer man få tillbaka ett meddelande om att skriva "on" eller "off"
    if(req.params.status === "on"){
        req.params.status = true
        res.send("Kamera på")
    } else if(req.params.status === "off"){
        req.params.status = false
        res.send("Kamera av")
    } else{
        res.send("Välj rätt kommando, 'on' eller 'off'")
    }

    //Hämtar alla devices från vår databas "db"
    db.get('devices')
    //Hittar det specifika ID:et "CAM1"
    .find({ id: "CAM1" })
    //Tilldelar true/false till kamera som man får från params.
    .assign({ on : req.params.status }) 
    //Value gör så vi kan läsa datan vi får tillbaka
    .value();

    //Uppdaterar med den nya infon från assign
    update();
})





/****************** HÖGTALARE ****************/

//On/off

app.get('/speaker/status/:status', (req,res) => {
    //om status sätts som on i URL:en kommer högtalaren att sättas igång med hjälp av params. Skriver man off i URL:en kommer högtalaren att stängas av, skriver man något annat kommer man få tillbaka ett meddelande om att skriva "on" eller "off"
    if(req.params.status === "on"){
        req.params.status = true
        res.send("Högtalare på")
    } else if(req.params.status === "off"){
        req.params.status = false
        res.send("Högtalare av")
    } else{
        res.send("Välj rätt kommando, 'on' eller 'off'")
    }

    //Hämtar alla devices från vår databas "db"
    db.get('devices')
    //Hittar det specifika ID:et "SPE1"
    .find({id: "SPE1" })
    //Tilldelar true/false till högtalare som man får från params.
    .assign({ on : req.params.status })
    //Value gör så vi kan läsa datan vi får tillbaka
    .value();

    //Uppdaterar med den nya infon från assign
    update();
})



/****************** LAMPOR ****************/

//On/off
app.get('/lights/:number/status/:status', (req,res) => {
    //om status sätts som on i URL:en kommer lampan att sättas igång med hjälp av params. Skriver man off i URL:en kommer lampan att stängas av, skriver man något annat kommer man få tillbaka ett meddelande om att skriva "on" eller "off"
    if(req.params.status === "on"){
        req.params.status = true
        res.send(`Lampa ${req.params.number}  på`)
    } else if(req.params.status === "off"){
        req.params.status = false
        res.send(`Lampa ${req.params.number} av`)
    } else{
        res.send("Välj rätt kommando, 'on' eller 'off'")
    }

    //vårt nummer från params som kommer sättas tillsammans med "LIG" för att hämta id:et
    let number = 'LIG' + req.params.number

    //Hämtar alla devices från vår databas "db"
    db.get('devices')
    //Hittar det specifika ID:et vi får från vår number variabel som hämtas info från params
    .find({id: number })
    //Tilldelar true/false till lampa som man får från params.
    .assign({ on : req.params.status })
    //Value gör så vi kan läsa datan vi får tillbaka
    .value();

    //Uppdaterar med den nya infon från assign
    update();
})

//Brightness

app.get('/lights/:number/brightness/:bright', (req,res) => {

    //vårt nummer från params som kommer sättas tillsammans med "LIG" för att hämta id:et
    let number = 'LIG' + req.params.number

    //Hämtar alla devices från vår databas "db"
    db.get('devices')
    //Hittar det specifika ID:et vi får från vår number variabel som hämtas info från params
    .find({id: number })
    //Tilldelar brightness till lampa som man får från params. Mellan 0-1
    .assign({ brightness : req.params.bright })
    //Value gör så vi kan läsa datan vi får tillbaka
    .value();

    //Uppdaterar med den nya infon från assign
    update();
    //Får tillbaka meddelande om att lampan har ljusstyrkan som hämtas från från params.
    res.send(`Lampa ${req.params.number} har ljusstyrka: ${req.params.bright}`)
})



/****************** DÖRR ****************/

//Open/locked

app.get('/lock/status/:status', (req,res) => {
    //om status sätts som open i URL:en kommer dörren att öppnas med hjälp av params. Skriver man locked i URL:en kommer dörren att låsas, skriver man något annat kommer man få tillbaka ett meddelande om att skriva "on" eller "off"
    if(req.params.status === "open"){
        req.params.status = true
        res.send("Upplåst")
    } else if(req.params.status === "locked"){
        req.params.status = false
        res.send("Låst")
    } else{
        res.send("Välj rätt kommando, 'on' eller 'off'")
    }

    //Hämtar alla devices från vår databas "db"
    db.get('devices')
    //Hittar det specifika ID:et "LOC1"
    .find({id: "LOC1" })
    //Tilldelar true/false till dörren som man får från params.
    .assign({ locked : req.params.status }) 
    //Value gör så vi kan läsa datan vi får tillbaka
    .value();

    //Uppdaterar med den nya infon från assign
    update();
})