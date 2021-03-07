const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// 有时候可在目录下依次使用以下命令生成私钥和公钥，然后加密使用私钥，解密使用公钥
// openssl
// > genrsa -out private.key 1024
// > rsa -in private.key -pubout -out public.key
process.env.SECRET_KEY = "secret";
app.use(express.json())
app.get("/",(req,res) => {
  res.send("hello express")
})

const Sequelize = require("sequelize");
// 创建连接
const sequelize = new Sequelize("node_sql","root","hongwei",{
    host:"localhost",
    dialect:"mysql",
    port: 3306,
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000
    }
})

sequelize.authenticate().then(() => {
    console.log("连接数据库成功~");
  }).catch(err => {
    console.log("连接数据库失败~", err);
  });
  
// new Sequelize(database, [username=null], [password=null], [options={}])

// const sequelize = new Sequelize('mysql://root:hongwei@localhost:3306/node_sql', {})

const db = {}
db.sequelize = sequelize

//定义表结构
const Users = db.sequelize.define(
  'users',
  {
      id:{
          type:Sequelize.INTEGER, //  int类型
          primaryKey:true,    //  主键
          autoIncrement:true, //  自增
      },
      name:{
          type:Sequelize.STRING,  //  字符串
      },
      email:{
          type:Sequelize.STRING,  //  字符串
      },
      password:{
          type:Sequelize.STRING,  //  字符串
      },
      created:{
          type:Sequelize.DATE,  //  时间类型
          defaultValue:Sequelize.NOW, //  默认值 当前时间
      }
  },{
      timestamps:false,   //  不自动加上createdAt和updatedAt
  }
)

app.get("/register",(req,res) => {
  const userData = {
      name:req.query.name,
      email:req.query.email,
      password:req.query.password,
      created:new Date()
  }
  //  存之前先查
  Users.findOne({where:{email:userData.email}}).then( (user) => {
      if (!user) {
          //  加密
          bcrypt.hash(req.query.password,10,(err,hash) => {
              //  hash 加密后的内容
              userData.password = hash
              Users.create(userData)
              .then( user => {
                  res.json({status:user.email + " registered"})
              })
              .catch( err => res.send("error: "+ err))
          })
      }else {
          //  数据库存在
          res.json({status:"user already exists"});
      }
  }).catch( err => res.send("error: "+err))
})

app.post("/login",(req,res) => {
  // console.log(req.body)
  //  拿到数据去表里查
  Users.findOne({where:{email:req.body.email}}).then( user => {
      //  查到用户
      if (user) {
          //  匹配密码
          if (bcrypt.compareSync(req.body.password,user.password)) {
              // res.send("登录成功")
              //  生成token
              delete user.dataValues.password;    //  删除密码字段
              let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                  expiresIn:1440
              })
              //解密token
            //   var decoded = jwt.decode(token,process.env.SECRET_KEY);
            // console.log(decoded);
              res.json({msg:"login success",token})
          }else {
              res.send("password is incorrect")
          }
      } else {
          res.status(400).json({error:"user does not exists"})
      }
  }).catch( err => res.send("error: "+ err))
})

app.listen(5000,() => {
  console.log("Server is running on port 5000...")
})