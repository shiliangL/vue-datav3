import { createApp } from 'vue'
import CreatePanel from '@/datav/createPanel/index.vue'

function createPanel ({ title, message, confirmBtnText, cancelBtnText }) {
  return new Promise((resolve, reject) => {
    // 实例化组件，createApp第二个参数是props
    const instance = createApp(CreatePanel, {
      title: title || '提示',
      message: message || '确认消息',
      confirmBtnText: confirmBtnText || '确定',
      cancelBtnText: cancelBtnText || '取消',
      onConfirm: () => {
        unmount()
        resolve()
      },
      onCancel: () => {
        unmount()
        // reject(new Error())
      }
    })
    // 卸载组件
    const unmount = () => {
      instance.unmount()
      // setTimeout(() => {
      //   document.body.removeChild(parentNode)
      // }, 200)
    }
    // 创建一个挂载容器
    const parentNode = document.createElement('div')
    document.body.appendChild(parentNode)
    // 挂载组件
    instance.mount(parentNode)
  })
}

export default createPanel
