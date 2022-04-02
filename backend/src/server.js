const app=require('./index')

const connect= require('./configs/db')

app.listen(8080,async()=>{
    await connect();
    console.log('listening on port 8080')
})