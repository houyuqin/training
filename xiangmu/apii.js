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
   
})
// //使用中间件对要更改数据的操作进行过滤检测
// app.get('/login',async c=>{
//     let sql='SELECT id,username,email FROM users';
//     let ret=await pgdb.query(sql);
//     c.res.body={
//         status:0,
//         data:ret.rows
//     }
// })

// //获取用户详细信息
// app.get('/user',async c=>{
//     let sql='SELECT id,username,email FROM users';
          
//            let ret=await pgdb.query(sql);
//            if(ret.rowCount<=0)
//            {
//                  c.res.body={
//                      status:-1,
//                      errmsg:'failed get users'
//                  }
//            }else{
//                c.res.body={
//                    status:0,
//                    data:ret.rows
//                }
//            }
    
// })
// //创建新用户
// app.post('/user',async c=>{
//    let sql ='INSERT INTO users(username,email,passwd)'
//           +' VALUES($1,$2,$3)';
//           //创建新用户的数据在body属性中，是POST请求
//     let ret=await pgdb.query(sql,[
//         c.body.username,c.body.email,c.body.passwd
//     ]);
//     if (ret.rowCount<=0)
//     {
//         c.res.body={
//             status:-1,
//             errmsg:'create user failed'
//         }
//     }else{
//         c.res.body={
//      status:0,
//      data:'ok'
//         }
//     }
// })


// //更新用户信息
// app.put('/user/:id',async c=>{
//     //示例：只更新email字段
//     let sql='UPDATE users SET email=$1 WHERE id=$2';

//     let ret=await pgdb.query(sql,[
//         c.body.email,c.param.id
//     ])
//     if(ret.rowCount<=0)
//     {
//         c.res.body={
//             status:-1,
//             errmsg:'update failed'
//         }
//     }else{
//        c.res.body={
//            status:0,
//            data:'ok'
//        }
//     }
// });
// app.delete('/user/:id',async c=>{
//     let sql='DELETE FROM users WHERE id=$1';
//     let ret=await pgdb.query(sql,[
//         c.param.id
//     ])
//     if(ret.rowCount<=0)
//     {
//         c.res.body={
//             status:-1,
//             errmsg:'can not delete user'
//         }
//     }else{
//        c.res.body={
//            status:0,
//            data:'ok'
//        }
//     }
    
// })
//运行一个服务
//app.daemon(8005);
app.run(8005)


/*
1.接口返回值需要封装成函数统一处理
2.未作分层处理：控制器和模型层未分离
3.不要为了分层而分层，要考虑业务需求
4.请求数据未作格式检测处理：是否为空，格式是否合法等。


检测数据格式、权限验证、会话处理更操作皆可使用中间件进行拆分，
方便开发和后期维护

*/