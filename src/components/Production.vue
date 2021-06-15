<template>
  <div class="production-wrapper">
    <div class="production-item" v-for="item in productions" :key="item.name">
      <img class="production-pic" :src="item.img" />
      <p>{{item.name}}</p>
    </div>
  </div>
</template>
<script>
import productions from '../data/production';

export default {
    data() {
        return {
          productions
        }
    }
}
</script>
<style scoped>
.production-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.production-pic {
  width: 120px;
  height: 120px;
}
.production-item {
  width: 45%;
  flex: 0 1 auto;
}
</style>
