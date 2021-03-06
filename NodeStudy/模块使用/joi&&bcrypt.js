// 创建用户集合
// 引入mongoose第三方模块
const mongoose = require('mongoose');
// 导入bcrypt,与crypto不同的是它的salt就保存在token之中
// 验证密码的方式是比较加密前和加密后，适用于不需要解密的数据
// 如果您在服务器上使用bcrypt，则建议使用异步模式。
// 这是因为bcrypt完成的散列是CPU密集型的，所以同步版本将阻止事件循环，并阻止你的应用程序服务于任何其他入站请求或事件。
const bcrypt = require('bcrypt');
// 引入joi模块
const Joi = require('joi');
// 创建用户集合规则
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 20
	},
	email: {
		type: String,
		// 保证邮箱地址在插入数据库时不重复
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	// admin 超级管理员
	// normal 普通用户
	role: {
		type: String,
		required: true
	},
	// 0 启用状态
	// 1 禁用状态
	state: {
		type: Number,
		default: 0
	}
});

// 创建集合
const User = mongoose.model('User', userSchema);

async function createUser () {
	const salt = await bcrypt.genSalt(10);
	const pass = await bcrypt.hash('123456', salt);
	// bcrypt.compare('123456', result).then(res=>console.log(res))
	await User.create({
		username: 'iteheima',
		email: 'itheima@itcast.cn',
		password: pass,
		role: 'admin',
		state: 0
	});
}

createUser();

// 验证用户信息
const validateUser = user => {
	// 定义对象的验证规则
	const schema = {
		username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证规则')),
		email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
		password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
		role: Joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
		state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
	};

	// 实施验证
	return Joi.validate(user, schema);
}

// 将用户集合做为模块成员进行导出
module.exports = {
	User,
	validateUser
}