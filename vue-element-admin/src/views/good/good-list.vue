<template>
<div class="app-container">
  <div class="filter">
    <el-row>
      <el-col :span="24">
        <el-input
          style='width:120px;'
          v-model="filter.name"
          placeholder="商品名称"
          clearable
        />
        <CateSelect style="width:120px;" />
        <el-date-picker
          style='width:300px;'
          clearable
          v-model="filter.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" icon="el-icon-edit" @click='skipToForm'>新增</el-button>
      </el-col>
    </el-row>
  </div>

  <div class="table" style="marginTop:20px;">
    <el-table
      :data="goodArr"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="序号"
        sortable
        width='80'
        :sort-method='(a,b)=>(a.id-b.id)'
        align='center'>
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        align='center'
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        align='center'
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="地址">
      </el-table-column>
      <el-table-column
        prop="handle"
        align='center'
        label="操作">
        <template>
          <div>
            <el-button size='mini' type="info">审核</el-button>
            <el-button size='mini' type="primary">编辑</el-button>
            <el-button size='mini' type="danger">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <div class="page" style="marginTop:60px;">
    <el-pagination
      @size-change="sizeChange"
      @current-change="pageChange"
      :current-page="filter.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      background
      :total="400">
    </el-pagination>
  </div>

</div>
</template>


<script>
import CateSelect from './components/CateSelect'
export default {
  name: 'GoodList',
  components: { CateSelect },
  data() {
    return {
      filter: {
        name: '',
        cate: '',
        date: [],
        page: 1
      },

      goodArr: [
        {
          id: 1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: 2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            id: 3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
      ]
    }
  },
  methods: {
    pageChange() {},
    sizeChange() {},
    skipToForm() { this.$router.push('/good/add') }
  }
}
</script>

<style lang="scss" scoped>
</style>
