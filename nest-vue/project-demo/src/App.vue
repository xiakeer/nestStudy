<template>
  <el-form
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 400px"
  >
    <el-form-item label="账号" :label-position="itemLabelPosition">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="密码" :label-position="itemLabelPosition">
      <el-input v-model="formLabelAlign.password" />
    </el-form-item>
    <el-form-item label="验证码" :label-position="itemLabelPosition">
      <div>
        <el-input v-model="formLabelAlign.code" />
        <img @click="resetCode" :src="codeUrl" alt="">
      </div>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormItemProps, FormProps } from 'element-plus'

const labelPosition = ref<FormProps['labelPosition']>('right')
const itemLabelPosition = ref<FormItemProps['labelPosition']>('')
const formLabelAlign = reactive({
  name: '',
  password: '',
  code: '',
})

const codeUrl = ref<string>('/api/user/code')

const resetCode = () => codeUrl.value = codeUrl.value + '?' + Math.random()
const submit = () => {
  fetch('/api/user/create', {
    method: 'post',
    body: JSON.stringify(formLabelAlign),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json()).then(res => {
    console.log(res);
  })
}

</script>