// 模拟异步数据调用接口
export function getCourses() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{name: 'web全栈'},{name: 'web高级'}])
    }, 2000);
  })
}