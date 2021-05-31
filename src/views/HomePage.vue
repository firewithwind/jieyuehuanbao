<template>
  <div>
    <div class="title">山东捷越环保有限公司</div>
    <div class="category">
      <div v-for="item in categoryList" :key="item.title" class="category-item">
        <!-- <van-icon :name="item.icon" /> -->
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        categoryList: [
          {
            title: '产品展示',
            icon: 'icon-app',
            route: ''
          },
          {
            title: '新闻资讯',
            icon: '',
            route: ''
          },
          {
            title: '联系我们',
            icon: '',
            route: ''
          }
        ]
      }
    },
    methods: {}
}
</script>
<style>
.title {
  line-height: 50px;
  font-size: 24px;
  font-weight: 700;
  margin: 0 10px;
  border-bottom: 1px solid #2c3e50;
}
.category {
  display: flex;
  justify-content: space-around;
  height: 30px;
  font-size: 14px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.van-icon {
  height: 30px;
  width: 30px;
  font-size: 30px;
  line-height: 30px !important;
}
</style>
