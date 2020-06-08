<template>
  <div>
    <TypeNav/>
    <h2>search</h2>
    <h3>keywrou:{{$route.params.keywrou}}</h3>
    <h3>categoryName: {{$route.query.categoryname}}</h3>
    <h3>category1Id: {{$route.query.category1Id}}</h3>
    <h3>category2Id: {{$route.query.category2Id}}</h3>
    <h3>category3Id: {{$route.query.category3Id}}</h3>

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
