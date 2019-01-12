<template>
<div class="sticky-axis">
  <div class="sticky-axis-nav-line"></div>
  <!-- 锚点 -->
  <div :id="'anchor'+index"
    :style="{marginTop: -(top+46*index)+'px', marginBottom: (top+46*index)+'px'}">
  </div>
  <div class="sticky-axis-nav-node" :ref="'navWrap'+index">
    <a :href="'#anchor'+index" :ref="'nav'+index">
      <img :src="navImg"/>
    </a>
  </div>
  <div class="sticky-axis-content">
    <div class="sticky-axis-header">
      <span>{{navText}}</span>
    </div>
    <slot></slot>
  </div>
</div>
</template>
<script>
export default {
  name: 'NavStickyAxisSlot',
  props: {
    navImg: {
      type: String,
      required: true
    },
    navText: {
      type: String,
      default: ''
    },
    index: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      top: this.$parent.$props.top
    }
  }
}
</script>
<style scoped lang='scss'>
.sticky-axis {
  position: relative;
  padding: 16px 0 0px 64px;
  &:last-child {
    padding-bottom: 16px;
  }
  .sticky-axis-nav-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 22px;
    border-left: 1px solid #EAEAEF;
  }
  .sticky-axis-nav-node {
    position: absolute;
    left: 0;

    a {
      display: inline-block;
      width: 36px;
      height: 36px;
      border: 1px solid #EAEAEF;
      border-radius: 22px;
      padding: 4px;
      background-color: #fff;
      z-index: 5;
    }
    img {
      width: 36px;
      height: 36px;
    }
  }
  .sticky-axis-content {
    .sticky-axis-header {
      font-size: 20px;
      line-height: 44px;
      font-weight: bold;
    }
  }
}
</style>
