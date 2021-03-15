<template>
  <div class="wenjuan">
    <div class="toptitle">
      <h5>{{ title }}</h5>
      <p>{{ intro }}</p>
    </div>
    <div id="wrapper">
      <div class="content">
        <div
          class="item"
          :data-qid="item.id"
          v-for="(item, index) in content"
          :key="index"
        >
          <div class="qtite" v-if="item.mode === 1">
            [单选]{{ item.title }}
            <div v-for="(item2, index2) in item.options" :key="index2">
              <input type="radio" :name="'q' + item2.id" :data-id="item2.id" />
              {{ item2.title }}
              <br />
            </div>
          </div>
          <div class="qtite" v-else-if="item.mode === 2">
            [多选]{{ item.title }}
            <div v-for="(item2, index2) in item.options" :key="index2">
              <input
                type="checkbox"
                :name="'q' + item2.id"
                :data-id="item2.id"
              />
              {{ item2.title }}
              <br />
            </div>
          </div>
          <div class="qtite" v-else-if="item.mode === 3">
            [简答]{{ item.title }}
            <textarea
              cols="30"
              rows="6"
              maxlength="140"
              :name="'q' + item.id"
              :data-id="item.id"
            ></textarea>
          </div>
        </div>
        <div class="item">
          <a id="upload" href="#">提交</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      wid: '',
      title: '问卷题目',
      intro: '问卷简介',
      content: [
        {
          id: '12',
          title: '单选1',
          mode: 1,
          options: [
            {
              id: '12',
              title: '单选1'
            },
            {
              id: '12',
              title: '单选1'
            },
            {
              id: '12',
              title: '单选1'
            },
            {
              id: '12',
              title: '单选1'
            }
          ]
        },
        {
          id: '12',
          title: '单选1',
          mode: 1,
          options: [
            {
              id: '12',
              title: '单选1'
            }
          ]
        },
        {
          id: '12',
          title: '单选1',
          mode: 1,
          options: [
            {
              id: '12',
              title: '单选1'
            }
          ]
        },
        {
          id: '12',
          title: '单选1',
          mode: 1,
          options: [
            {
              id: '12',
              title: '单选1'
            }
          ]
        },
        {
          id: '12',
          title: '单选1',
          mode: 1,
          options: [
            {
              id: '12',
              title: '单选1'
            }
          ]
        },
        {
          id: '12',
          title: '单选1',
          mode: 1,
          options: [
            {
              id: '12',
              title: '单选1'
            }
          ]
        },
        {
          id: '12',
          title: '单选1',
          mode: 1,
          options: [
            {
              id: '12',
              title: '单选1'
            }
          ]
        },
        {
          id: '12',
          title: '单选1',
          mode: 1,
          options: [
            {
              id: '12',
              title: '单选1'
            }
          ]
        },
        {
          id: '12',
          title: '单选1',
          mode: 1,
          options: [
            {
              id: '12',
              title: '单选1'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
.wenjuan{
  min-height: 100%;
  margin:0;
  font-size: 20px;
  text-align: center;
  color: black;
}
.item{
  margin: 0 auto;
  margin-bottom: 10px;
  width:70%;
  text-align: left;
}
#upload{
  display: block;
  width: 100%;
  height: 40px;
  background-color: green;
  text-align: center;
  font-size: 25px;
  color: white;
  text-decoration: none;
}
</style>
