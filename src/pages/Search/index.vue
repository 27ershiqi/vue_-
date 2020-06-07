<template>
  <div>
    <TypeNav/>
    <h2>search</h2>
    <h3>keywrou:{{$route.params.keywrou}}</h3>
    <h3>keywrou2:{{$route.query.keywrou2}}</h3>
    <h3>keywrou3:{{keywrou3}}</h3>
    <h3>keywrou04:{{keywrou4}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keywrou3','keywrou4']
}
</script>

<style lang="less" scoped>

</style>
