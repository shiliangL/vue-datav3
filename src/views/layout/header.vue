<template>
  <nav class="navigation_bar">
    <router-link
      :to="item.path"
      :key="item.path"
      v-for="item in navigation"
    >
      <button v-text="item.title"></button>
    </router-link>
  </nav>
</template>

<script>

import { useRouter, useRoute } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const router = useRouter()
    const route = useRoute()

    console.log(router, route)

    const list = router.options.routes.find(item => item.path === '/viewAuto')
    const viewAuto = list ? list.children.map(item => ({ title: item.name, path: '/viewAuto/' + item.path })) : []

    const navigation = [
      { title: 'dashboard', path: '/' },
      ...viewAuto
    ]
    return {
      navigation
    }
  }
})
</script>

<style scoped lang="scss">
.navigation_bar {
  margin: 10px 10px;
}

.router-link-active,
.router-link-exact-active{
  button{
    background-color: #fc2f70;
  }
}

button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  padding-right: 1.2em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  clip-path: polygon(0 0, 90% 0%, 100% 100%, 0% 100%);
}

button::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center center;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

button:hover {
  cursor: pointer;
}

button:active {
  opacity: 0.78;
}

button:hover::before {
  transform-origin: center center;
  transform: scaleX(1);
}
</style>
