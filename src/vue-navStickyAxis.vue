<template>
<div>
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'NavStickyAxis',
  data () {
    return {
      busy: false
    }
  },
  props: {
    top: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onScroll() {
      if (this.busy) return
      this.busy = true

      this.$children.forEach((item, index) => {
        let nav = item.$refs['nav' + index]
        let navWrap = item.$refs['navWrap' + index]
        if (!nav || !navWrap) return

        if (navWrap.getBoundingClientRect().top < (this.top + 46 * index)) {
          nav.style.top = (this.top + 46 * index) + 'px'
          nav.style.position = 'fixed'
        } else {
          nav.style.position = ''
        }
      })

      this.busy = false
    }
  },
  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestory () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>
<style scoped lang='scss'>

</style>
