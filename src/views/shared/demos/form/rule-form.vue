<template>
  <div>
    <a-alert
      message="验证表单"
      description="动态验证表单"
      type="info"
      show-icon
      style="margin-bottom: 12px"
    />
    <a-card>
      <schema-form ref="dynamicForm" :form-schema="formSchema">
        <template #operate-button>
          <a-button type="primary" @click="confirm"> 确定 </a-button>
        </template>
      </schema-form>
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Alert, message } from 'ant-design-vue'
import { SchemaForm } from '@/components/JSON-schema-form'
import { getFormSchema } from './form-schema'

/**
 * @description 验证表单
 */
export default defineComponent({
  name: 'RuleForm',
  components: { [Alert.name]: Alert, SchemaForm },
  setup() {
    const dynamicForm = ref<InstanceType<typeof SchemaForm>>()

    // 点击提交
    const confirm = () => {
      dynamicForm.value?.validate().then(() => message.success('验证通过！'))
    }

    return {
      dynamicForm,
      confirm,
      formSchema: getFormSchema(dynamicForm)
    }
  }
})
</script>

<style lang="scss" scoped>
.btn-rows {
  button {
    margin-right: 12px;
  }
}
</style>
