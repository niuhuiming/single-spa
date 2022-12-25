<template>
  <div>
    About<br />
    The page you see uses the conMsg method located in utils, please check the information in the console.
  </div>
</template>

<script>
export default {
  name: 'About',
  async mounted() {
    const utilsModule = await window.System.import("@ncwu/utils");
    if (utilsModule) {
      const res = utilsModule.logMsg('Vue2');
      console.log(res);
    }
  }
}
</script>

<style>

</style>