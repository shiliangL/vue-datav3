<template>
  <button>
    Sign in with Twitter
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          fill="#fff"
          d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
        ></path>
      </svg>
    </span>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Decorator05',
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  max-width: 320px;
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 0.875rem 72px 0.875rem 1.75rem;
  background-color: #039be5;
  background-image: linear-gradient(to top right, #039be5, #29b6f6);
  color: #ffffff;
  font-size: 15px;
  line-height: 1.25rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.5rem;
  gap: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: none;
  transition: all 0.6s ease;
  animation: pulse512 3.5s infinite;
  & span {
    background-color: rgb(3 155 229);
    display: grid;
    position: absolute;
    right: 0;
    place-items: center;
    width: 3rem;
    height: 100%;
  }

  & span svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    box-shadow: 0 4px 30px rgba(4, 175, 255, 0.1),
    0 2px 30px rgba(11, 158, 255, 0.06);
  }

  &:active {
    opacity: 0.55;
  }
}

@keyframes pulse512 {
  0% {
    box-shadow: 0 0 0 0 #25defe66;
  }

  70% {
    box-shadow: 0 0 0 14px rgb(218 103 68 / 0%);
  }

  100% {
    box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
  }
}
</style>
