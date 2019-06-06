<template>
  <div>
    <vue-preview
      :list="list"
      :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
      :previewBoxStyle="{border: '1px solid #eee'}"
      :tapToClose="true"
      @close="closeHandler"
      @destroy="destroyHandler"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: "http://04imgmini.eastday.com/mobile/20190605/2019060513_b80da30566ca407689c9cb579a355b94_3899_cover_mwpm_03200403.jpg",
          w: 600,
          h: 600
        },
        {
          src: "http://03imgmini.eastday.com/mobile/20190605/20190605132730_9d1e11ad142240d7ca7300cfe371855a_3_mwpm_03200403.jpg",
          w: 1200,
          h: 900
        },
        {
          src: "http://02imgmini.eastday.com/mobile/20190605/20190605132000_c2e17c021cd92c277dba48e08a42b006_4_mwpm_03200403.jpg",
          w: 1200,
          h: 900
        }
      ]
    }
  },
  methods: {
    // 即将关闭的时候，调用这个处理函数
    closeHandler() {
      console.log('closeHandler')
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log('destroyHandler')
    }
  }
}
</script>