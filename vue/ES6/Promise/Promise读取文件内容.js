//1.引入fs模块
const fs = require('fs')

//2.调用方法读取文件
// fs.readFile('./1.md',(err,data)=>{
// 	//err为错误对象   data为读取出来的结果
// 	//如果出错抛出错误
// 	if(err) throw err;
// 	//如果没有出错，则输出结果
// 	console.log(data.toString());
// })


//这是使用promise封装
const p = new Promise((resolve,reject)=>{
fs.readFile('./1.md',(err,data)=>{
	//如果失败
	if(err) reject(err);
	// 如果成功
  resolve(data);
})
});
p.then((res)=>{
	console.log(res.toString());
},(err)=>{
	console.log('文件读取失败');
})