<template>
  <view class="container">
    <unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" :options="options" collection="project" field="project_no,title,desc,rate,tags,platform,href,user_id,username,avatar,view_count,bookmark_count,comment_count,status,created_at,updated_at" :where="queryWhere" :getone="true" :manual="true">
      <view v-if="error">{{error.message}}</view>
      <view v-else-if="loading">
        <uni-load-more :contentText="loadMore" status="loading"></uni-load-more>
      </view>
      <view v-else-if="data">
      
        <view>
          <text>项目编号:</text>
          
            
              <text>{{data.project_no}}</text>
            
          
        </view>
      
        <view>
          <text>项目标题:</text>
          
            
              <text>{{data.title}}</text>
            
          
        </view>
      
        <view>
          <text>项目简介:</text>
          
            
              <text>{{data.desc}}</text>
            
          
        </view>
      
        <view>
          <text>评星:</text>
          
            
              <text>{{data.rate}}</text>
            
          
        </view>
      
        <view>
          <text>标签:</text>
          
            
              <text>{{data.tags}}</text>
            
          
        </view>
      
        <view>
          <text>归属平台标识:</text>
          
            
              <text>{{data.platform}}</text>
            
          
        </view>
      
        <view>
          <text>链接地址:</text>
          
            
              <text>{{data.href}}</text>
            
          
        </view>
      
        <view>
          <text>创建用户id:</text>
          
            
              <text>{{data.user_id}}</text>
            
          
        </view>
      
        <view>
          <text>创建人:</text>
          
            
              <text>{{data.username}}</text>
            
          
        </view>
      
        <view>
          <text>用户头像:</text>
          
            
              <text>{{data.avatar}}</text>
            
          
        </view>
      
        <view>
          <text>浏览数:</text>
          
            
              <text>{{data.view_count}}</text>
            
          
        </view>
      
        <view>
          <text>收藏数:</text>
          
            
              <text>{{data.bookmark_count}}</text>
            
          
        </view>
      
        <view>
          <text>评论数:</text>
          
            
              <text>{{data.comment_count}}</text>
            
          
        </view>
      
        <view>
          <text>项目状态:</text>
          
            
              <text>{{data.status}}</text>
            
          
        </view>
      
        <view>
          <text>创建日期:</text>
          
            
              <text>{{data.created_at}}</text>
            
          
        </view>
      
        <view>
          <text>更新日期:</text>
          
            
              <text>{{data.updated_at}}</text>
            
          
        </view>
      
      </view>
    </unicloud-db>
    <view class="btns">
      <button type="primary" @click="handleUpdate">修改</button>
      <button type="warn" class="btn-delete" @click="handleDelete">删除</button>
    </view>
  </view>
</template>

<script>
  // 由schema2code生成，包含校验规则和enum静态数据
  import { enumConverter } from '../../js_sdk/validator/project.js';

  export default {
    data() {
      return {
        queryWhere: '',
        loadMore: {
          contentdown: '',
          contentrefresh: '',
          contentnomore: ''
        },
        options: {
          // 将scheme enum 属性静态数据中的value转成text
          ...enumConverter
        }
      }
    },
    onLoad(e) {
      this._id = e.id
    },
    onReady() {
      if (this._id) {
        this.queryWhere = '_id=="' + this._id + '"'
      }
    },
    methods: {
      handleUpdate() {
        // 打开修改页面
        uni.navigateTo({
          url: '../project/edit?id=' + this._id,
          events: {
            // 监听修改页面成功修改数据后, 刷新当前页面数据
            refreshData: () => {
              this.$refs.udb.loadData({
                clear: true
              })
            }
          }
        })
      },
      handleDelete() {
        this.$refs.udb.remove(this._id, {
          success: (res) => {
            // 删除数据成功后跳转到list页面
            uni.navigateTo({
              url: '../project/list'
            })
          }
        })
      }
    }
  }
</script>

<style>
  .container {
    padding: 10px;
  }

  .btns {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  }

  .btns button {
    flex: 1;
  }

  .btn-delete {
    margin-left: 10px;
  }
</style>
