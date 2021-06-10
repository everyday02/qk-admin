<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validate-trigger="submit" err-show-type="toast">
      <uni-forms-item name="project_no" label="项目编号" required>
  <uni-easyinput placeholder="项目编号，自动生成，更好记" v-model="formData.project_no" trim="both" />
</uni-forms-item>
<uni-forms-item name="title" label="项目标题" required>
  <uni-easyinput v-model="formData.title" trim="both" />
</uni-forms-item>
<uni-forms-item name="desc" label="项目简介">
  <uni-easyinput v-model="formData.desc" />
</uni-forms-item>
<uni-forms-item name="rate" label="评星">
  <uni-easyinput type="number" v-model="formData.rate" />
</uni-forms-item>
<uni-forms-item name="tags" label="标签">
  <uni-easyinput v-model="formData.tags" trim="both" />
</uni-forms-item>
<uni-forms-item name="platform" label="归属平台标识">
  <uni-easyinput type="number" v-model="formData.platform" />
</uni-forms-item>
<uni-forms-item name="href" label="链接地址">
  <uni-easyinput v-model="formData.href" trim="both" />
</uni-forms-item>
<uni-forms-item name="user_id" label="创建用户id" required>
  <uni-easyinput v-model="formData.user_id" />
</uni-forms-item>
<uni-forms-item name="username" label="创建人">
  <uni-easyinput v-model="formData.username" />
</uni-forms-item>
<uni-forms-item name="avatar" label="用户头像">
  <uni-easyinput v-model="formData.avatar" />
</uni-forms-item>
<uni-forms-item name="view_count" label="浏览数">
  <uni-easyinput type="number" v-model="formData.view_count" />
</uni-forms-item>
<uni-forms-item name="bookmark_count" label="收藏数">
  <uni-easyinput type="number" v-model="formData.bookmark_count" />
</uni-forms-item>
<uni-forms-item name="comment_count" label="评论数">
  <uni-easyinput type="number" v-model="formData.comment_count" />
</uni-forms-item>
<uni-forms-item name="status" label="项目状态">
  <uni-easyinput type="number" v-model="formData.status" />
</uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" @click="submit">提交</button>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../../js_sdk/validator/project.js';

  const db = uniCloud.database();
  const dbCollectionName = 'project';

  function getValidator(fields) {
    let reuslt = {}
    for (let key in validator) {
      if (fields.indexOf(key) > -1) {
        reuslt[key] = validator[key]
      }
    }
    return reuslt
  }

  export default {
    data() {
      return {
        formData: {
  "project_no": "",
  "title": "",
  "desc": "",
  "rate": null,
  "tags": "",
  "platform": null,
  "href": "",
  "user_id": "",
  "username": "",
  "avatar": "",
  "view_count": null,
  "bookmark_count": null,
  "comment_count": null,
  "status": 0,
  "created_at": null,
  "updated_at": null
},
        formOptions: {},
        rules: {
          ...getValidator(["project_no","title","desc","rate","tags","platform","href","user_id","username","avatar","view_count","bookmark_count","comment_count","status","created_at","updated_at"])
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      /**
       * 触发表单提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.submit().then((res) => {
          this.submitForm(res)
        }).catch((errors) => {
          uni.hideLoading()
        })
      },

      submitForm(value) {
        // 使用 clientDB 提交数据
        db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            icon: 'none',
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      }
    }
  }
</script>

<style>
  .uni-container {
    padding: 15px;
  }

  .uni-input-border,
  .uni-textarea-border {
    width: 100%;
    font-size: 14px;
    color: #666;
    border: 1px #e5e5e5 solid;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .uni-input-border {
    padding: 0 10px;
    height: 35px;

  }

  .uni-textarea-border {
    padding: 10px;
    height: 80px;
  }

  .uni-button-group {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }

  .uni-button {
    width: 184px;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    line-height: 1;
    margin: 0;
  }
</style>
