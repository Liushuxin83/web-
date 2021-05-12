<template>
  <div>
    <el-table :data="todosList" style="width: 100%">
      <el-table-column label="是否完成" prop="isChecked">
        <template #default="scoped">
          <!-- {{ scoped.row.isChecked }} -->
          <input
            type="checkbox"
            :checked="scoped.row.isChecked"
            @change="handelChange($event, scoped.$index)"
          />
          <!-- <el-checkbox :checked="scoped.row.isChecked"></el-checkbox> -->
        </template>
      </el-table-column>
      <el-table-column prop="title" label="任务" width="500px">
      </el-table-column>
      <el-table-column label="操作" width="200px">
        <template #default="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    todosList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup (props, { emit }) {
    const handleDelete = index => {
      emit('todoDelete', index)
    }
    const handelChange = (e, index) => {
      // console.log(e.target.checked, index)
      const checked = e.target.checked
      emit('handelChange', { checked, index })
    }
    return {
      handleDelete,
      handelChange
    }
  }
})
</script>
<style lang="less" scoped></style>
