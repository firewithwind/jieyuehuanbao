<template>
  <div>
    <div class="title">山东捷越环保有限公司</div>
    <div class="category">
      <div v-for="item in categoryList" :key="item.title" :class="{active: item.title === activeTitle}" class="category-item" @click="handleClick(item)">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="detail-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
const categoryList = [
  {
    title: '产品展示',
    icon: '#icon-app',
    route: 'production'
  },
  // {
  //   title: '新闻资讯',
  //   icon: '#icon-file',
  //   route: 'file'
  // },
  {
    title: '联系我们',
    icon: '#icon-telephone',
    route: 'telephone'
  }
]

export default {
    data() {
      return {
        categoryList,
        activeTitle: (categoryList.find(item => `/${item.route}` === this.$route.path) || categoryList[0]).title
      }
    },
    created() {
      // this.$route
    },
    methods: {
      handleClick(item) {
        if (item.title !== this.activeTitle) {
          this.activeTitle = item.title;
          this.$router.push({path: item.route})
        }
      }
    }
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
  margin: 10px 0;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.category-item.active {
  color: #70d486
}
.detail-wrapper {
  border-top: 1px solid #cfcfcf;
  margin: 0 20px;
  padding: 10px 0 50px 0;
}
</style>
