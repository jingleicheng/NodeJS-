/*
1.  fs.stat   检测是文件还是目录
2.  fs.mkdir    创建目录
3.  fs.writeFile    创建写入文件
4.  fs.appendFile   追加文件内容
5.  fs.readFile   读取文件
6.  fs.readdir  读取目录
7.  fs.rename   重命名
8.  fs.rmdir    删除目录
9.  fs.unlink   删除文件
*/
const fs = require('fs');

// 1.  fs.stat   检测是文件还是目录
    /*

    fs.stat('./html', (err, data) => {
        if(err){
            console.log(err);
            return;
        }

        console.log(`是文件${data.isFile()}`);
        console.log(`是目录${data.isDirectory()}`);
    });

    */

    /*

    fs.stat('./package.json', (err, data) => {
        if(err){
            console.log(err);
            return;
        }

        console.log(`是文件${data.isFile()}`);
        console.log(`是目录${data.isDirectory()}`);
    });

    */

// 2.  fs.mkdir    创建目录

    /*

    fs.mkdir('./css', err => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('创建成功');
    });

    */


// 3.  fs.writeFile    创建写入文件
// 如果以前存在这个文件，则会创建文件之后写入相应的信息，如果以前不存在这个文件，则会直接覆盖原文件的信息
/**
 * filename  (String)  文件名称
 * data （String | Buffer） 将要写入的内容，可以使用 字符串 或 buffer 数据
 * options  (Object)    option 数组对象，包含：
 *      · encoding  (String)    可选值，默认'utf-8'，当 data 使 buffer 时，该值应该为
 *      · mode  （Number）      文件读写权限,默认值 438
 *      · flag  （String）      默认值‘w’
 * callback {Function}  回调，传递一个异常参数err
 * 
 */
    /*

    fs.writeFile('./html/index.html', '你好nodejs', err => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('创建写入文件成功!');
    });

    */

    /*

        fs.writeFile('./html/index.html', '你好nodejs 哈哈哈哈', err => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('创建写入文件成功!');
        });

    */

//  4.  fs.appendFile   追加文件内容
//  可以增加换行符

    /*

    fs.appendFile('./css/base.css', 'body{color:red}', err => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('appendFile 成功');
    });

    */

    /*
    
    fs.appendFile('./css/base.css', 'h3{color:red}\n', err => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('appendFile 成功');
    });

    */



// 5.  fs.readFile   读取文件

    /*

    fs.readFile('./html/index.html', (err, data) => {
        if(err) {
            console.log(err);
            return;
        }

        console.log(data);
        console.log(data.toString());  // 把 buffer 转换成 String 类型
    });

    */
    //  no such file or directory, open 'D:\学习文件\前端\nodeJS学习\哔哩哔哩学习\demo5\aaa\index.html
    /*
    
    fs.readFile('./aaa/index.html', (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
    
        console.log(data);
        console.log(data.toString());  // 把 buffer 转换成 String 类型
    });
    
    */

// 6.  fs.readdir  读取目录

    /*

    fs.readdir('./html', (err, data) => {
        if(err) {
            console.log(err);
            return;
        }

        console.log(data);
    });

    */

// 7.  fs.rename   重命名    功能:1、表示重命名 2、表示移动文件

    /*
    // 重命名
    fs.rename('./css/aaa.css', './css/index.css', err => {
        if(err) {
            console.log(err);
            return;
        }

        console.log('重命名成功');
    });

    */

    /*

    fs.rename('./css/index.css', './html/index.css', err => {
        if(err) {
            console.log(err);
            return;
        }

        console.log('移动文件成功');
    })

    */

// 8.  fs.rmdir    删除目录
// 删除目录的时候要保证目录中没有其他的文件或目录，不然删除不了
/*

fs.rmdir('./aaaa', (err)=>{
    if(err) {
        console.log(err);
        return;
    }

    console.log('删除目录成功');
});

*/



// 9.  fs.unlink   删除文件

/*

fs.unlink('./aaaa/index.html', err => {
    if(err) {
        console.log(err);
        return;
    }

    console.log('删除文件成功');
});

*/

    


    


 




