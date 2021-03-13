<template>
  <div
    id='loginform'
  >
    <table>
      <h2>我的问卷</h2>
      <tr>
        <td><label for='username'>用户名：</label></td>
        <td>
          <input type='text' :value="username" name='username' id='username' maxlength='20' />
        </td>
      </tr>
      <tr>
        <td><label for='password'>密码：</label></td>
        <td>
          <input type='password' :value="password" name='password' id='password' maxlength='32' />
        </td>
      </tr>
      <tr v-if="register">
        <td><label for='password'>确认密码：</label></td>
        <td>
          <input type='password' :value="password2" name='password2' id='password2' maxlength='32' />
        </td>
      </tr>
      <tr>
        <td><label for='verify'>验证码：</label></td>
        <td><input type='verify' :value="verify" name='verify' id='verify' maxlength='4' /></td>
      </tr>
      <tr class='verifyimg'>
        <td>
          <img
            ref='captchaImg'
            style='cursor:pointer'
            width='70'
            :src='captcha'
            @click='getNewcaptcha()'
          />
        </td>
      </tr>
      <tr>
        <td>
          <input type='submit' name='loginbtn' @click="subMiteHandle" id='loginbtn' value='登 录' />
          <input type='reset' name='resetbtn' id='resetbtn' value='清 除' />
          <input v-if="!register" type='reset' @click="register=true"
          value='立即注册' /> <!-- onclick="indow.location.href='?c=User&a=add"-->
          <input v-if="register" type='reset' @click="register=false"
          value='返回' />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { login } from '@/api/base'
import './login.less'
export default {
  data () {
    return {
      username: '',
      password: '',
      password2: '',
      register: false,
      verify: '',
      page: 'login',
      captcha: this.cp.captcha
    }
  },
  mounted: function () {
    console.log('update')
    this.setName(this.page)
  },
  methods: {
    ...mapActions('store', ['setName']),
    getNewcaptcha: function () {
      this.$refs.captchaImg.src = this.captcha + '&' + Math.random()
    },
    subMiteHandle: function () {
      login({
        username: this.username,
        password: this.password,
        verify: this.verify
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang='less' scoped></style>
