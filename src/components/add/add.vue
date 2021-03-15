<template>
  <div class="wenjuan"  ref="wj">
    <form id="wenjuan" name="wenjuan">
      <div id="title">
        <h4>标题</h4>
        <input
          type="text"
          :value="title"
          id="title"
          name="title"
          maxlength="30"
        />
      </div>
      <div id="intro">
        <h4>简介</h4>
        <textarea
          id="intro"
          :value="intro"
          name="intro"
          cols="30"
          rows="6"
          maxlength="140"
        >
请输入</textarea
        >
      </div>
    <div
      class="item"
      :data-qid="item.id"
      v-for="(item, index) in content"
      :key="index"
    >
      <div class="qtite" v-if="item.mode === 1">
        [单选]<input type="text" name="qTitle" v-model="item.title" maxlength="50">
        <div v-for="(item2, index2) in item.options" :key="index2">
          <input
            type="radio"
            :name="'q' + item2.id ? item2.id : index2"
            :data-id="item2.id ? item2.id : index2"
          /><input type="text" :name="index2" v-model="item2.title" maxlength="50">
          <br />
        </div>
        <div class="iAdd">
            <button type="button" @click="addo(index)" :data-name="index">
              添加选项
            </button>
          </div>
      </div>
      <div class="qtite" v-else-if="item.mode === 2">
        [多选]<input type="text" name="qTitle" v-model="item.title" maxlength="50">
        <div v-for="(item2, index2) in item.options" :key="index2">
          <input
            type="checkbox"
            :name="'q' + item2.id ? item2.id : index2"
            :data-id="item2.id ? item2.id : index2"
          /><input type="text" :name="index2" v-model="item2.title" maxlength="50">
          <br />
        </div>
         <div class="iAdd">
            <button type="button" @click="addo(index)" :data-name="index">
              添加选项
            </button>
          </div>
      </div>
      <div class="qtite" v-else-if="item.mode === 3">
        [简答]<input type="text" name="qTitle" v-model="item.title" maxlength="50">
        <textarea
          cols="30"
          rows="6"
          maxlength="140"
          :name="'q' + item.id ? item.id : index"
          :data-id="item.id ? item.id : index"
        ></textarea>
      </div>
    </div>
    </form>
     <div id="qAdd">
      <div id="qType">
        <tr>
          <td><input type="radio" name="qType" value=1 v-model="addqi" /></td>
          单选
        </tr>
        <tr>
          <td><input type="radio" name="qType" value=2 v-model="addqi" /></td>
          多选
        </tr>
        <tr>
          <td><input type="radio" name="qType" value=3 v-model="addqi" /></td>
          简答
        </tr>
      </div>

      <button @click="addq">添加问题</button>
    </div>
    <a id="upload" href="?c=Wenjuan&a=index">保存</a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      wid: '',
      title: '',
      intro: '',
      content: [],
      addqi: 1,
      height: 0
    }
  },
  methods: {
    addq () {
      this.content.push({title: '', mode: parseInt(this.addqi), options: []})
    },
    rmq (index) {
      this.content.splice(index, 1)
    },
    addo (index) {
      this.content[index].options.push({title: ''})
    },
    rmo (index) {
      this.content[index].options.splice(index, 1)
    },
    getH () {
      return this.$refs.wj.clientHeight
    }
  },
  watch: {
    height () {
      this.$emit('refresh', this.height)
    }
  },
  created () {
    console.log(this.$router.query)
  },
  updated () {
    var curH = this.getH()
    if (this.height !== curH) {
      this.height = curH
    }
  },
  mounted () {
    this.height = this.getH()
  }
}
</script>
<style lang='less' scoped>
@import url('../../assets/css/wenjuan.css');
.wenjuan {
    min-height: 100%;
}
form > div{
    border:2px solid orange;
}
</style>
