/*
 * @Author: kuanggf
 * @Date: 2022-03-15 12:24:11
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-17 20:26:59
 * @Description: file content
 */
module.exports = function main(bank) {
  bank.on('upload', (files) => {
    console.log('receive:', files)
  })

  let loaded = 100
  const timer = setInterval(() => {
    if (loaded === 10000) {
      clearInterval(timer)
      return
    }
    loaded += 100
    bank.emit('progress', [
      {
        name: '前端路径.jpg',
        path: '/Users/kuangguanghu/Desktop/前端路径.jpg',
        size: 1279378,
        lastModified: 1538898523451,
        webkitRelativePath: '',
        type: 'image/jpeg',
        total: 10000,
        loaded
      },
      {
        name: '前端路径2.png',
        path: '/Users/kuangguanghu/Desktop/前端路径.jpg',
        size: 1279378,
        lastModified: 1538898523451,
        webkitRelativePath: '',
        type: 'image/png',
        total: 10000,
        loaded
      },
      {
        name: '前端路径3.jpg',
        path: '/Users/kuangguanghu/Desktop/前端路径.jpg',
        size: 1279378,
        lastModified: 1538898523451,
        webkitRelativePath: '',
        type: 'image/jpeg',
        total: 10000,
        loaded
      },
      {
        name: '前端路径4.png',
        path: '/Users/kuangguanghu/Desktop/前端路径.jpg',
        size: 1279378,
        lastModified: 1538898523451,
        webkitRelativePath: '',
        type: 'image/png',
        total: 10000,
        loaded
      }
    ])
  }, 100)
}
