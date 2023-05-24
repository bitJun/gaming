<template>
  <div class="register_header">
    <div class="register_header_tip">
      <span>试玩账号3天不登录系统自动清除，需重新注</span>
    </div>
  </div>
  <div class="register_main">
    <div class="register_main_nav"></div>
    <div class="register_main_info">
      <div class="register_main_info_title">
        <div class="register_main_info_title_detail">请在以下填写您的注册信息</div>
      </div>
      <el-form :model="form" label-width="100px">
        <el-form-item label="用户账号：">
          <el-col :span="11">
            <el-input v-model="form.name" />
          </el-col>
          <el-col :span="11" style="padding-left: 30px;color: #898989;font-size: 16px;">由6-8个数字字符组成</el-col>
        </el-form-item>
        <el-form-item label="登录密码：">
          <el-col :span="11">
            <el-input v-model="form.pwd" />
          </el-col>
          <el-col :span="11" style="padding-left: 30px;color: #898989;font-size: 16px;">6位数以上</el-col>
        </el-form-item>
        <el-form-item label="确认密码：">
          <el-col :span="11">
            <el-input v-model="form.repwd" />
          </el-col>
          <el-col :span="11" style="padding-left: 30px;color: #898989;font-size: 16px;">密码二次确认</el-col>
        </el-form-item>
        <el-form-item label="盘口：">
          <el-col :span="11">
            <el-select v-model="form.value" class="m-2">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="信用额度：">
          <el-col :span="11">
            <el-input v-model="form.name" />
          </el-col>
          <el-col :span="11" style="padding-left: 30px;color: #898989;font-size: 16px;">最大1000000（一百万）</el-col>
        </el-form-item>
        <el-form-item label="投注限额：">
          <el-col :span="11">
            <el-input v-model="form.name" />
          </el-col>
          <el-col :span="11" style="padding-left: 30px;color: #898989;font-size: 16px;">最大200000（二十万）</el-col>
        </el-form-item>
        <el-form-item class="bu_line first">
          <div class="submit" @click="onSubmit"></div>
        </el-form-item>
        <el-form-item class="bu_line">
          <div class="login" @click="doLogin()"></div>
          <span>如果您已有账号，可点击登录进入</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div class="register_footer">
    <div class="register_footer_main">Copyright ? 2014-2015 All Rights Reserved.</div>
  </div>
</template>
<script setup>
import {
  ref,
  reactive,
  onMounted
} from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const form = reactive({
  name: '',
  value: '',
  pwd: '',
  repwd: ''
})
const options = [
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'B',
    label: 'B',
  },
  {
    value: 'C',
    label: 'C',
  },
  {
    value: 'D',
    label: 'D',
  }
]
const onSubmit = () => {
  console.log('submit!')
}
const doLogin =() => {
  router.push({
    path: '/login',
  })
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
