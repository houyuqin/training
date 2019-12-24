const titbit=require('titbit');
const pg=require('pg'); 
const express=require('express')
const qs = require('qs');

var app=new titbit({
    debug:true
   // daemon:true
});
var pgdb=new pg.Pool({
    host:'127.0.0.1',
    port:5432,
    user:'zhouxuan',
    password:'czwhcloud1234+',
    database:'zhouxuan'
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

//增加作业
app.post('/taskt',async (ctx,next) => {
     //获取post提交的数据
     ctx.setHeader('Content-Type','text/plain ')
var body=JSON.parse(ctx.body)
 let sql ='INSERT INTO taskt(id,title,time,author,content)'
 +' VALUES($1,$2,$3,$4,$5)';
 //创建新用户的数据在body属性中，是POST请求
let ret=await pgdb.query(sql,[
body.id,body.title,body.time,body.author,body.content
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
  });

//获取作业
app.get('/taskt',async c=>{
    let sql='SELECT id,title,time,author,content FROM taskt';
    let ret=await pgdb.query(sql);
    c.res.body=ret.rows
   
});

app.run(8005);