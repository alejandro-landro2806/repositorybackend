require('dotenv').config()
const http = require('http')

function requestController(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Despliegue Node.js</title>

            <style>
                body{
                    margin:0;
                    padding:0;
                    font-family: Arial, Helvetica, sans-serif;
                    background: linear-gradient(135deg, #0f172a, #1e293b);
                    color:white;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                }

                .container{
                    text-align:center;
                    background:#111827;
                    padding:40px;
                    border-radius:20px;
                    box-shadow:0 0 20px rgba(0,0,0,0.4);
                    width:400px;
                }

                h1{
                    color:#38bdf8;
                    margin-bottom:10px;
                }

                p{
                    font-size:18px;
                    color:#cbd5e1;
                }

                .badge{
                    margin-top:20px;
                    display:inline-block;
                    background:#22c55e;
                    padding:10px 20px;
                    border-radius:10px;
                    font-weight:bold;
                }
            </style>
        </head>

        <body>

            <div class="container">
                <h1> Proyecto Desplegado en Render</h1>

                <p>
                    Aplicación Node.js funcionando correctamente
                </p>

                <div class="badge">
                    Backend + Frontend Activo
                </div>
            </div>

        </body>
        </html>
    `)
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
    console.log("Aplicación corriendo en puerto: " + PORT)
})