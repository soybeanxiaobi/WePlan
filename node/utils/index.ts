const { exec } = require('child_process');
/**
 * Node和浏览器所支持模块规范不一样
 */
// 根据路径读取目录下文件 返回结果为string
exports.readDir = function(readPath: String) {
  return new Promise((resolve, reject) => {
    exec(`ls ${readPath} |sort -n`, (err: String, files: any) => {
      if (err) {
        reject(err);
      }
      // 命令行输出为字符串，需要根据回车切割
      const filesArr = files.split(/[\n]/);
      resolve(filesArr);
    });
  });
};

// 使用默认程序打开文件
exports.openFile = function(target: String) {
  return new Promise((resolve, reject) => {
    exec(`open ${target}`, (err: String, files: any) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });
};
