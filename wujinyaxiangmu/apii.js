const titbit=require('titbit');
const pg=require('pg'); 

var app=new titbit({
    //debug:true
    daemon:true
});
var pgdb=new pg.Pool({
    host:'127.0.0.1',
    port:5432,
    user:'wujinya',
    password:'czwhcloud1234+',
    database:'wujinya'
})
app.use(async (c, next) =>{
    c.setHeader('Access-Control-Allow-Origin',  '*');
    c.setHeader('Content-Type','application/json ')
    c.setHeader('Access-Control-Allow-Methods', [
          'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'
      ]);
    await next(c);
});
app.options('/*', async c =>{});


app.get('/stdmine',async c=>{
    let sql='SELECT * FROM stdinfo';
    let ret=await pgdb.query(sql);
    c.res.body=ret.rows
  
})
app.get('/teamine',async c=>{
    let sql='SELECT * FROM teainfo';
    let ret=await pgdb.query(sql);
    c.res.body=ret.rows
  
})
app.get('/stdmine/:id',async c=>{
    let sql='select * FROM stdinfo WHERE wphonenumber=$1'; 
    let ret=await pgdb.query(sql,[
        c.param.id
    ])
    if(ret.rowCount<=0)
    {
        c.res.body={
            status:-1,
            errmsg:'can not delete user'
        }
    }else{
       c.res.body={
           status:0,
           data:ret.rows
       }
    }    
})
app.get('/teamine/:id',async c=>{
    let sql='select * FROM teainfo WHERE wphonenumber=$1'; 
    let ret=await pgdb.query(sql,[
        c.param.id
    ])
    if(ret.rowCount<=0)
    {
        c.res.body={
            status:-1,
            errmsg:'can not delete user'
        }
    }else{
       c.res.body={
           status:0,
           data:ret.rows
       }
    }    
})
app.get('/stdmine/:usr',async c=>{
    let sql='SELECT wusername,wsex,wphonenumber,wclass,wschool,weixinnumber,code,pwd,coo,stdtouxiang FROM stdinfo WHERE usr=$1';
    let ret=await pgdb.query(sql,[c.param.usr]);
    c.res.body=ret.rows  
})
app.get('/teamine/:usr',async c=>{
    let sql='SELECT * FROM teainfo WHERE usr=$1';
    let ret=await pgdb.query(sql,[c.param.usr]);
    c.res.body=ret.rows  
})

app.post('/stdmine',async (ctx,next)=>{
    ctx.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(ctx.body);
    let sql ='INSERT INTO stdinfo(wusername,wsex,wclass,wschool,weixinnumber,pwd,wphonenumber,code,coo)'
            +'VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)';
    console.log(body.wphonenumber);
    let ret=await pgdb.query(sql,[
        body.wusername,body.wsex,body.wclass,body.wschool,body.weixinnumber,body.pwd,body.wphonenumber,body.code,body.coo
    ]);
    if (ret.rowCount<=0)
    {
        ctx.res.body={
            status:-1,
            errmsg:'create user failed'
        }
    }else{
        ctx.res.body={
            status:0,
            data:'ok'
        }
    }

})

app.post('/teamine',async (ctx,next)=>{
    ctx.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(ctx.body);
    let sql ='INSERT INTO teainfo(wusername,wsex,xueli,wsubject,weixinnumber,pwd,wphonenumber,code,coo)'
            +'VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)';
    console.log(body.wphonenumber);
    let ret=await pgdb.query(sql,[
        body.wusername,body.wsex,body.xueli,body.wsubject,body.weixinnumber,body.pwd,body.wphonenumber,body.code,body.coo
    ]);
    if (ret.rowCount<=0)
    {
        ctx.res.body={
            status:-1,
            errmsg:'create user failed'
        }
    }else{
        ctx.res.body={
            status:0,
            data:'ok'
        }
    }

})
app.post('/stdmine/:usr',async (ctx,next)=>{
    ctx.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(ctx.body);
    console.log(body);
    let sql ='UPDATE stdinfo set wusername=$1,wsex=$2,wclass=$3,wschool=$4,weixinnumber=$5,code=$6,coo=$7,stdtouxiang=$8 where wphonenumber=$9';
    let ret=await pgdb.query(sql,[
        body.wusername,body.wsex,body.wclass,body.wschool,body.weixinnumber,body.code,body.coo,body.stdtouxiang,ctx.param.usr
    ]);
    if (ret.rowCount<=0)
    {
        ctx.res.body={
            status:-1,
            errmsg:'create user failed'
        }
    }else{
        ctx.res.body={
            status:0,
            data:'ok'
        }
    }
})

app.post('/teamine/:usr',async (ctx,next)=>{
    ctx.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(ctx.body);
    console.log(body);
    let sql ='UPDATE teainfo set wusername=$1,wsex=$2,xueli=$3,wsubject=$4,weixinnumber=$5,code=$6,coo=$7,teatouxiang=$8 where wphonenumber=$9';
    let ret=await pgdb.query(sql,[
        body.wusername,body.wsex,body.xueli,body.wsubject,body.weixinnumber,body.code,body.coo,body.teatouxiang,ctx.param.usr
    ]);
    if (ret.rowCount<=0)
    {
        ctx.res.body={
            status:-1,
            errmsg:'create user failed'
        }
    }else{
        ctx.res.body={
            status:0,
            data:'ok'
        }
    }
})

app.get('/nicheng/:usr',async c=>{
    let sql='SELECT * FROM stdinfo';
    let ret=await pgdb.query(sql);
    c.res.body={
        status:'success',
        data:ret.rows
    }
})

app.get('/return',async c=>{
    let sql='SELECT * FROM return';
    let ret=await pgdb.query(sql);
    c.res.body=ret.rows
  
})

app.delete('/return',async c=>{
    c.body=JSON.parse(c.body);
    console.log(c.body);
    let sql = 'DELETE FROM return WHERE wphonenumber=$1';
    let ret = await pgdb.query(sql,[
        c.body.wphonenumber
    ])
    if(ret.rowCount<=0){
        c.res.body = {
            status:-1,
            errmsg:'can not delete teacher'
        }
    }else{
        c.res.body = {
            status:0,
            data:'ok'
        }; 
    }      
})

app.post('/return',async (ctx,next)=>{
    ctx.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(ctx.body);
    let sql ='INSERT INTO return(wusername,wcontent,wphonenumber)'
          +' VALUES($1,$2,$3)';
    let ret=await pgdb.query(sql,[
        body.wusername,body.wcontent,body.wphonenumber
    ]);
    if (ret.rowCount<=0)
    {
        ctx.res.body={
            status:-1,
            errmsg:'create user failed'
        }
    }else{
        ctx.res.body={
            status:0,
            data:'ok'
        }
    }
})

app.daemon(8006);