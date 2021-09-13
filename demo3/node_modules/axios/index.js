const obj = {
    get(){
        console.log('从服务器获取数据');
    },
    post(){
        console.log('提交数据');
    },
};

module.exports = obj;