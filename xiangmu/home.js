const titbit=require('titbit');
const pg=require('pg'); 
const mdb = require('./initdb');
const fs = require('fs');
const funcs = require('./functions');


var app=new titbit({
    debug:true
    // daemon:true
});
var pgdb=new pg.Pool({
    host:'127.0.0.1',
    port:5432,
    user:'houyuqin',
    password:'czwhcloud1234+',
    database:'houyuqin'
})

var _dbpath = './mddata';

app.use(async (c, next) =>{
    c.setHeader('Access-Control-Allow-Origin',  '*');
    c.setHeader('Access-Control-Allow-Methods', [
          'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'
      ]);
    await next(c);
});
app.options('/*', async c =>{});

app.get('/tearcm',async c=>{
    let sql = 'SELECT * FROM goodteacher';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})

app.get('/course/chinese',async c=>{
    let sql = 'SELECT * FROM chinese';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/math',async c=>{
    let sql = 'SELECT * FROM math';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/english',async c=>{
    let sql = 'SELECT * FROM english';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/physical',async c=>{
    let sql = 'SELECT * FROM physical';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/chemistry',async c=>{
    let sql = 'SELECT * FROM chemistry';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/bios',async c=>{
    let sql = 'SELECT * FROM bios';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/political',async c=>{
    let sql = 'SELECT * FROM political';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/history',async c=>{
    let sql = 'SELECT * FROM history';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/geography',async c=>{
    let sql = 'SELECT * FROM geography';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/exec',async c=>{
    let sql = 'SELECT * FROM painting';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/vedio',async c=>{
    let sql = 'SELECT * FROM vediorcm';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.post('/question',async c=>{
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO question(pid,had,side,request,hadclass,require,disadvans)'
           +' VALUES($1,$2,$3,$4,$5,$6,$7)';
     let ret=await pgdb.query(sql,[
         body.name,
         body.one,
         body.two,
         body.three,
         body.four,
         body.five,
         body.six
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create user failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})
app.post('/mylove',async c=>{
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO mylove(vedio,class,price,usernum)'
           +' VALUES($1,$2,$3,$4)';
     let ret=await pgdb.query(sql,[
         body.vedio,
         body.class,
         body.price,
         body.usernum
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create mylove failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})

app.post('/bought',async c=>{
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO bought(vedio,class,price,time,usernum)'
           +' VALUES($1,$2,$3,$4,$5)';
     let ret=await pgdb.query(sql,[
         body.vedio,
         body.class,
         body.price,
         body.time,
         body.usernum
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create bought failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})
app.post('/tobuy',async c=>{
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO tobuy(vedio,class,price,time,usernum)'
           +' VALUES($1,$2,$3,$4,$5)';
     let ret=await pgdb.query(sql,[
         body.vedio,
         body.class,
         body.price,
         body.time,
         body.usernum
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create bought failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})
app.get('/mylove',async c=>{
    // c.setHeader('Content-Type','text/plain ');
    // var body=JSON.parse(c.body)
    //console.log(body);
    let sql ='SELECT * FROM mylove'
     let ret=await pgdb.query(sql);

    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/bought',async c=>{
    let sql ='SELECT * FROM bought';
     let ret=await pgdb.query(sql);
     c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/tobuy',async c=>{
    let sql ='SELECT * FROM tobuy';
     let ret=await pgdb.query(sql);
     c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/question',async c=>{
    let sql ='SELECT * FROM question';
     let ret=await pgdb.query(sql);
     c.res.body={
        status:0,
        data:ret.rows
    }
})
// app.get('/tearcm',async c=>{
//     let sql = 'SELECT * FROM goodteacher';
//     let ret = await pgdb.query(sql);
//     c.res.body={
//         status:0,
//         data:ret.rows
//     }
// })
// app.get('/vedio',async c=>{
//     let sql = 'SELECT * FROM vediorcm';
//     let ret = await pgdb.query(sql);
//     c.res.body={
//         status:0,
//         data:ret.rows
//     }
// })

app.run(8000);
