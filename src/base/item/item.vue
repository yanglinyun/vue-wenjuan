<template>
<div class="item" @click="itemHandle">
    <div>
        <h2 style="margin-top:0;">{{ title }}</h2>
        <p>{{ intro }}</p>
    </div>
    <div class="control" v-if="itemStatus!=='plaza'" >
          <button class="edit" @click.stop="editH">修改</button>
          <button class="chart" @click.stop="statH">统计</button>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      require: true
    },
    intro: {
      type: String,
      require: true
    },
    wid: {
      type: Number,
      require: true
    }
  },
  methods: {
    editH () {
      this.$router.push({name: 'add', params: {id: this.wid}})
    },
    statH () {
      this.$router.push({name: 'stat', params: {id: this.wid}})
    },
    itemHandle () {
      if (this.itemStatus !== 'plaza') {
        this.editH()
      } else {
        this.$router.push({name: 'wenjuan', params: {id: this.wid}})
      }
    }
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters('store', ['itemStatus'])
  }
}
</script>
<style lang="less" scoped>
.item{
    text-align:left;
    margin:5px;
    border:2px solid #000;
    display: flex;
    justify-content: space-between;
    .control{
        font-size: 0;
        button{
            height: 100%;
            width: 50px;
            margin: 0;
        }
    }
}
</style>
