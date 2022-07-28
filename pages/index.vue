<template>
  <div class="content">
    <Brands class="content_filter"/>
    <Container></Container>
  </div>
</template>

<script>
export default {
    name: "IndexPage",
}
</script>

<style lang="postcss" scoped>
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 5px;

      margin-top: 25px;
      height: auto;
      &_filter {
        margin-right: 25px;
      }
    }
</style>
