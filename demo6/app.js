const fs = require('fs');
const path = './upload';

fs.stat('./upload', (err, data) => {
    if(err) {
        // 执行创建目录
        mkdir(path);
        return;
    }
    if(data.isDirectory()) {
        console.log('upload目录存在');
    }else{
        // 为防止有无后缀名同名文件，所以首先删除文件
        fs.unlink(path, err => {
            if(!err) {
                // 执行创建目录
                mkdir(path);
            }else{
                console.log('请检查传入的数据是否正确！');
            }
        });        
    }
});

// 创建目录的方法
const mkdir = dir => {
    fs.mkdir(dir, err => {
        if(err) {
            console.log(err);
            return;
        }
    });
}