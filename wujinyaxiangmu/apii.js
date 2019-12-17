const titbit=require('titbit');
const pg=require('pg'); 

var app=new titbit({
    debug:true
   // daemon:true
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

app.get('/stdmine/:usr',async c=>{
    let sql='SELECT wusername,wsex,wphonenumber,wclass,wschool,weixinnumber,code,pwd,coo FROM stdinfo WHERE usr=$1';
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

app.post('/stdmine/:usr',async (ctx,next)=>{
    ctx.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(ctx.body);
    let sql ='UPDATE stdinfo set wusername=$1,wsex=$2,wclass=$3,wschool=$4,weixinnumber=$5,code=$6,coo=$7 where wphonenumber=$8';
    let ret=await pgdb.query(sql,[
        body.wusername,body.wsex,body.wclass,body.wschool,body.weixinnumber,body.code,body.coo,ctx.param.usr
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

















//获取用户详细信息
app.get('/user',async c=>{
    let sql='SELECT id,username,email FROM users';
          
           let ret=await pgdb.query(sql);
           if(ret.rowCount<=0)
           {
                 c.res.body={
                     status:-1,
                     errmsg:'failed get users'
                 }
           }else{
               c.res.body={
                   status:0,
                   data:ret.rows
               }
           }
    
})
//创建新用户
app.post('/user',async c=>{
   let sql ='INSERT INTO users(username,email,passwd)'
          +' VALUES($1,$2,$3)';
          //创建新用户的数据在body属性中，是POST请求
    let ret=await pgdb.query(sql,[
        c.body.username,c.body.email,c.body.passwd
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


//更新用户信息
app.put('/user/:id',async c=>{
    //示例：只更新email字段
    let sql='UPDATE users SET email=$1 WHERE id=$2';

    let ret=await pgdb.query(sql,[
        c.body.email,c.param.id
    ])
    if(ret.rowCount<=0)
    {
        c.res.body={
            status:-1,
            errmsg:'update failed'
        }
    }else{
       c.res.body={
           status:0,
           data:'ok'
       }
    }
});
app.delete('/user/:id',async c=>{
    let sql='DELETE FROM users WHERE id=$1';
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
           data:'ok'
       }
    }
    
})
//运行一个服务
app.run(8006);


/*
1.接口返回值需要封装成函数统一处理
2.未作分层处理：控制器和模型层未分离
3.不要为了分层而分层，要考虑业务需求
4.请求数据未作格式检测处理：是否为空，格式是否合法等。


检测数据格式、权限验证、会话处理更操作皆可使用中间件进行拆分，
方便开发和后期维护

*/