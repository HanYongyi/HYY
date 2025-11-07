<script>
  import config from './config'
  export default {
    onLaunch: function() {
      this.initApp()
    },
    methods: {
      // 初始化应用
      initApp() {
        // 初始化应用配置
        this.initConfig()
      },
      initConfig() {
        this.globalData.config = config
      }
    }
  }
</script>

<style lang="scss">
  @import '@/static/scss/index.scss'
</style>
