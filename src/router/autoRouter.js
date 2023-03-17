// 引入自动引入modules中文件

const Layout = () =>
  import('@/views/layout/index.vue')

const files =
    import.meta.globEager('@/viewAuto/*/index.vue')

const modules = {
  // redirect: '/dashboard',
  path: '/viewAuto',
  component: Layout,
  children: []
}

// meta: { title: '404', hideTabs: true }
Object.keys(files).forEach((c) => {
  const module = files[c].default
  const pathName = c.replace('/src/viewAuto/', '').replace('/index.vue', '')
  // const pathName = c.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
  if (pathName) {
    modules.children.push({
      path: pathName,
      name: pathName,
      meta: module.meta,
      component: module
    })
  }
})

export default modules
