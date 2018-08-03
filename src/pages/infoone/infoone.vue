<template>
  <div class="infoone">
    {{query}}
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'infoone',
  data () {
    return {
      query: decodeURIComponent(this.getUrlParams('q'))
    }
  },
  watch: {},
  components: {},
  filters: {},
  mounted () {
  },
  methods: {
    getUrlParams (name, url) {
      if (!url) url = location.href;
      name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
      var regexS = '[\\?&]' + name + '=([^&#]*)';
      var regex = new RegExp(regexS);
      var results = regex.exec(url);
      return results == null ? null : results[1];
    }
  }
}
</script>

<style>

</style>
