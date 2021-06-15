<template>
    <div>
      <div v-for="item in telInfos" :key="item.title" class="info">
        <span>{{item.title}}:</span>
        <span class="ml10">{{item.text}}</span>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
          telInfos: [
            {
              title: '联系人',
              text: '刘经理'
            },
            {
              title: '手机号',
              text: '13021711152'
            },
            {
              title: '地址',
              text: '山东省济南市章丘区刁镇街道人工湖向西200米'
            },
            {
              title: '淘宝店铺'
            }
          ]
        }
    }
}
</script>
<style scoped>
.info {
  text-align: left;
}
.ml10 {
  margin-left: 10px;
}
</style>
