<template>
  <div class="flexslider">
    <div class="topContent">
      <div class="topContent_main">
        <div class="topContent_main_nav">
          <a class="topContent_main_nav_item">收藏试玩区</a> | 
          <a class="topContent_main_nav_item">保存到桌面</a>
        </div>
        <img
          src="@/assets/images/close.png"
          class="topContent_main_close"
        />
      </div>
    </div>
    <div class="login_main">
      <div class="login_main_info">
        <div class="login_main_info_form">
          <div class="login_main_info_form_control username">
            <span></span>
            <input type="text" placeholder="请输入您的账号" class="login_main_info_form_control_value" />
          </div>
          <div class="login_main_info_form_control password">
            <span></span>
            <input type="password" class="login_main_info_form_control_value" />
          </div>
          <div class="login_main_info_form_actions">
            <div class="enter"></div>
            <div class="reg"></div>
          </div>
          <div class="login_main_info_form_action">
            <div class="test"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">Copyright © 2014-2015 All Rights Reserved.</div>
  </div>
</template>
<script setup>
import {
  ref,
  reactive,
  onMounted
} from 'vue';
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
