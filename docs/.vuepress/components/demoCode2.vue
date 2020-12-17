<template>
  <div class="code2">
    <div class="code">
      <div class="code--bar">
        <div class="icon red"></div>
        <div class="icon yellow"></div>
        <div class="icon green"></div>
        <span class="title">{{titleShow}}</span>
      </div>
      <div v-show="isShow" class="code--demo">
        <div class="code-content">
          <slot></slot>
        </div>
      </div>
      <div v-show="!isShow" class="code--code">
        <slot name="codeText"></slot>
      </div>
    </div>
    <div class="code--buttons">
      <div
        class="btn"
        @click="doChange"
        :class="isShow ? 'normal': 'active'">
        {{ isShow ? 'Show Source' : 'Show Example' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Demo'
    }
  },
  computed: {
    titleShow() {
      if (this.isShow) {
        return this.title
      } else {
        return `Source: ${this.title}`
      }
    }
  },

  data() {
    return {
      isShow: true,
      codeTextBtn: 'Expand'
    }
  },
  methods: {
    doChange() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="less">
.code2 {
  .code {
    background-color: #fff;
    background-clip: content-box;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 15px 40px rgba(0,0,0,.2);
    .code--bar {
      position: relative;
      height: 30px;
      background-image: linear-gradient(#f1f1f1,#e1e1e1);
      border-bottom: 1px solid #aaa;
      border-radius: 6px 6px 0 0;
      .icon {
        float: left;
        width: 12px;
        height: 12px;
        margin: 9px 4px 0;
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 50%;
      }
      .red {
        margin-left: 14px;
        background-color: #eb6a5d;
      }
      .yellow {
        background-color: #f5c250;
      }
      .green {
        background-color: #0bd417;
      }
      .title {
        position: absolute;
        left: 50%;
        width: 300px;
        margin: 0 auto;
        color: #777;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        transform: translateX(-50%);
      }
    }

    .code--demo {
      .code-content {
        padding: 20px 30px;
      }
    }
  }

  .code--buttons {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    .btn {
      width: 140px;
      height: 40px;
      font-size: 14px;
      line-height: 40px;
      background: #f9f9f9;
      position: relative;
      border-radius: 32px;
      text-align: center;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
    }

    .normal {
      box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
      &:hover {
        opacity: 0.6;
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
      }
      &:active {
        opacity: 1;
        box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
        color: #3eaf7c;
      }
    }

    .active {
      opacity: 1;
        box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
        color: #3eaf7c;
        &:hover {
        opacity: 1;
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>