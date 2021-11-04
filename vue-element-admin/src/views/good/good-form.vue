<template>
<div class="app-container">
  <div class="form" style="max-width: 60%;">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm">
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="商品描述" prop="desc">
        <el-input
          type="textarea"
          :rows="3"
          v-model="ruleForm.desc">
        </el-input>
        <!-- <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select> -->
      </el-form-item>
      <el-form-item label="商品品类" required>
        <CateSelect />
      </el-form-item>
      <el-form-item label="是否热销" prop="hot">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input-number v-model="ruleForm.price" controls-position="right" :min="0" />
      </el-form-item>
      <el-form-item label="商品图片" prop="img">
        <SingleImage />
      </el-form-item>
    </el-form>
  </div>

  <div class="btns">
    <el-button type="primary" disabled @click="submitForm">添加</el-button>
    <el-button>取消</el-button>
  </div>
</div>
</template>

<script>
import CateSelect from './components/CateSelect'
import SingleImage from '@/components/Upload/SingleImage'
export default {
  name: 'GoodForm',
  components: { CateSelect, SingleImage },
  data() {
    return {
      ruleForm: {
        img: '',
        name: '',
        price: '',
        desc: '',
        hot: false
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 2, message: '商品名称不能少于两个字', trigger: 'blur' },
          { max: 8, message: '商品名称不能多于八个字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      console.log('提交', this.ruleForm)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding-bottom: 80px;
}
.btns {
  position: fixed;
  bottom: 0;
  height: 60px;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: white;
  text-align: center;
  line-height: 60px;
  border-top: 1px solid #eee;
}
</style>
<style>
.image-preview {
  display: none;
}
</style>
