import remove from 'lodash/remove';
// 对数组进行名字数字的排序
export function sortVideo(data: any) {
  // 使用ls命令返回的是字符串,需要手动切割,并过滤掉非mp4文件
  console.log('sort data', data);
  const fileArr = data.split('');
  console.log('fileArr', fileArr);
  return fileArr;
}
