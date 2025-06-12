let express = require('express'); 
let app = express(); 
let port = 3000; 
app.get('/', (req,res)=>{      
    res.send('HOLA DESDE EL SERVIDOR')
})

app.get('/api/contactos', (req,res)=>{     
    res.json([
        {nombre: 'Andres', correo: 'andres@gmail.com'},
        {nombre: 'Daniel', correo: 'daniel@gmail.com'}
    ])
})

app.listen(port, () => {
    console.log('Servidor corriendo en el localhost')
})