<template></template>

<script setup>
import { ref, reactive } from 'vue';
const dialogVisible = !userInfo.isLogin;
const userInfo = reactive({ isLogin: false, password: '' });

return {
  dialogVisible,
  userInfo,
};
</script>
