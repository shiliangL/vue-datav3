// 引入自动引入modules中文件
const files =
    import.meta.globEager('@/datav/*/index.vue')
    // import.meta.globEager('@/datav/*/*.vue')

const modules = []

Object.keys(files).forEach((c) => {
  const module = files[c].default
  // 组件内部需要定义组件的name才会注册
  if (module.name) modules.push(module)
})

export default function (App) {
  if (!modules.length) return
  modules.forEach(item => {
    App.component(item.name, item)
  })
  console.log(modules, '全局组件datav组件')
}
