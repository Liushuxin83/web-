const fs = require('fs');

//这个是回调地狱的方式读取多个文件
// fs.readFile('./1.md',(err,data1)=>{
// 	fs.readFile('./2.md',(err,data2)=>{
// 		fs.readFile('./3.md',(err,data3)=>{
// 			let result = data1 + '\n' + data2 +'\n'+ data3;
// 			console.log(result);
// 		})
// 	})
// })

//使用promise读取多个文件
const p = new Promise((reslove, reject) => {
    fs.readFile('./1.md', (err, data) => {
        reslove(data)
    })
});
p.then(res => {
    // console.log(res.toString());
    return new Promise((resolve, reject) => {
        fs.readFile('./2.md', (err, data) => {
            resolve([res, data])
        })
    })
}).then(res => {
    return new Promise((resolve, reject) => {
        fs.readFile('./3.md', (err, data) => {
            res.push(data)
            resolve(res)
        })
    })
}).then(res => {
    // console.log(res instanceof Array);
		// console.log(Array.isArray(res));
		console.log(res.join('-'));
})