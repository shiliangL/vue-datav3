<template>
  <div class="plan-card">
    <h2>Business<span>For business services</span></h2>
    <div class="etiquet-price">
      <p>254.99</p>
      <div></div>
    </div>
    <div class="button-get-plan">
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="svg-rocket"
        >
          <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path>
        </svg>
        <span>START PROJECT</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DatavCard03',
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
 .plan-card {
  background: #fff;
  width: 15rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  border-bottom: 4px solid #000446;
  box-shadow: 0 6px 30px rgba(207, 212, 222, 0.3);
  font-family: "Poppins", sans-serif;
}

.plan-card h2 {
  margin-bottom: 15px;
  font-size: 27px;
  font-weight: 600;
}

.plan-card h2 span {
  display: block;
  margin-top: -4px;
  color: #4d4d4d;
  font-size: 12px;
  font-weight: 400;
}

.etiquet-price {
  position: relative;
  width: 14.46rem;
  margin-left: 15px;
  padding: .2rem 1.2rem;
  border-radius: 5px 0 0 5px;
  background: linear-gradient(-90deg, rgba(0, 210, 255, 0.99), rgba(58, 76, 254, 0.99));
}

.etiquet-price p {
  margin: 0;
  padding-top: .4rem;
  display: flex;
  font-size: 1.9rem;
  font-weight: 500;
  align-items: baseline;
}

.etiquet-price p:before {
  content: "$";
  margin-right: 5px;
  font-size: 15px;
  font-weight: 300;
}

.etiquet-price p:after {
  content: "/ handle";
  margin-left: 5px;
  font-size: 15px;
  font-weight: 300;
}

.etiquet-price div {
  position: absolute;
  bottom: -23px;
  right: 0px;
  width: 0;
  height: 0;
  border-top: 13px solid #24616e;
  border-bottom: 10px solid transparent;
  border-right: 13px solid transparent;
  z-index: 6;
}

.button-get-plan {
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
}

.button-get-plan a {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000446;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: .8rem;
  letter-spacing: .05rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.button-get-plan a:hover {
  transform: translateY(-3%);
  box-shadow: 0 3px 10px rgba(207, 212, 222, 0.9);
}

.button-get-plan .svg-rocket {
  margin-right: 10px;
  width: .9rem;
  fill: currentColor;
}
</style>
