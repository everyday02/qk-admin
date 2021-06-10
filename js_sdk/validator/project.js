
// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema



const validator = {
  "project_no": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      },
      {
        "maxLength": 30
      }
    ],
    "label": "项目编号"
  },
  "title": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      },
      {
        "maxLength": 30
      }
    ],
    "label": "项目标题"
  },
  "desc": {
    "rules": [
      {
        "format": "string"
      },
      {
        "maxLength": 1000
      }
    ],
    "label": "项目简介"
  },
  "rate": {
    "rules": [
      {
        "format": "int"
      },
      {
        "maxLength": 5
      }
    ],
    "label": "评星"
  },
  "tags": {
    "rules": [
      {
        "format": "string"
      },
      {
        "maxLength": 200
      }
    ],
    "label": "标签"
  },
  "platform": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "归属平台标识"
  },
  "href": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "链接地址"
  },
  "user_id": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "创建用户id"
  },
  "username": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "创建人"
  },
  "avatar": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "用户头像"
  },
  "view_count": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "浏览数"
  },
  "bookmark_count": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "收藏数"
  },
  "comment_count": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "评论数"
  },
  "status": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "defaultValue": 0,
    "label": "项目状态"
  },
  "created_at": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "date"
      }
    ],
    "label": "创建日期"
  },
  "updated_at": {
    "rules": [
      {
        "format": "date"
      }
    ],
    "label": "更新日期"
  }
}

const enumConverter = {}

export { validator, enumConverter }
