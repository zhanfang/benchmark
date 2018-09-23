/**
 * @file fs stat benchmark
 * @author zhanfang (fzhanxd@gmail.com)
 */

const Suite = require('../suite');

// const fsManager = swan.getFileSystemManager();
// const NO_SUCH_FILE_OR_DIRECTORY = 'no such file or directory';
// const DEMO_DIR_PATH = swan.env.USER_DATA_PATH + '/demo456/';
// const DEMO_FILE_PATH = swan.env.USER_DATA_PATH + '/demo456/demo456.txt';
// const NOT_EXIST_DIR_PATH = swan.env.USER_DATA_PATH + '/demo456/notExistDir/';
// const NOT_EXIST_FILE_PATH = swan.env.USER_DATA_PATH + '/demo456/notExistFile.txt';

// function prepareForStatApi() {
//     // 若demo文件夹及demo.txt文件不存在，则创建该文件夹及该文件
//     try {
//         fsManager.accessSync(DEMO_DIR_PATH);
//     }
//     catch (e) {
//         console.log('3333', e.message);
//         if (e.message.indexOf(NO_SUCH_FILE_OR_DIRECTORY) > -1) {
//             fsManager.mkdirSync(DEMO_DIR_PATH);
//         }

//     }
//     try {
//         fsManager.accessSync(DEMO_FILE_PATH);
//     }
//     catch (e) {
//         if (e.message.indexOf(NO_SUCH_FILE_OR_DIRECTORY) > -1) {
//             fsManager.writeFileSync(DEMO_FILE_PATH, 'swan is a good sdk~', 'utf-8');
//         }

//     }
//     // 为了测试文件不存在的情况，若notExistDir文件夹或notExistDir.txt存在，则删除该文件夹/文件
//     try {
//         fsManager.accessSync(NOT_EXIST_DIR_PATH);
//         fsManager.rmdirSync(NOT_EXIST_DIR_PATH);
//     }
//     catch (e) {
//         // assert(false);
//     }
//     try {
//         fsManager.accessSync(NOT_EXIST_FILE_PATH);
//         fsManager.unlinkSync(NOT_EXIST_FILE_PATH);
//     }
//     catch (e) {
//         // assert(false);
//     }
// }

// prepareForStatApi();

const suite = new Suite();

suite
    .add('fs stat', function () {
        console.log(11111);
    })
    .add('123', function () {
        console.log(2222);
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({
        async: true
    });
