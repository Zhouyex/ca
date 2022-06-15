<template>
  <div class="tree-drag">
    <el-tree
      :data="treeData1"
      ref="tree1"
      class="tree" 
      node-key="id"
      draggable 
      default-expand-all
      :allow-drop="returnFalse"
      @node-drag-start="handleDragstart"
      @node-drag-end="handleDragend"
    ></el-tree>
    
    <el-tree
      :data="treeData2" 
      ref="tree2"
      class="tree" 
      node-key="id"
      draggable
      default-expand-all
      :allow-drop="returnTrue"
      @node-drag-enter = "aa"
    ></el-tree>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",  
  data() {
    return {
      treeData1: [{
        id: 1,
        label: "一级 1",
        children: [{
          id: 4,
          label: "二级 1-1",
          children: [{id: 9,label: "三级 1-1-1"}]
        }],
      }],
      treeData2: [{
        id: 2,
        label: "一级 1",
        children: [{
          id: 5,
          label: "二级 1-1",
          children: [{id: 8,label: "三级 1-1-1"}],
        }],
      }],
    };
  },
  methods: {
    handleDragstart (node, event) {
        
      this.$refs.tree2.$emit('tree-node-drag-start', event, {node: node});
      console.log(this.$refs.tree2,'1111')
    },
    handleDragend (draggingNode, endNode, position, event) {
      this.$refs.tree2.$emit('tree-node-drag-end', event);
    },
    returnTrue () {
      return true;
    },
    returnFalse () {
      return false;
    },
    aa(a,b,c){
        console.log(a,'aa')
        console.log(b,'bb')
        console.log(c,'cc')
    }
  }
};
</script>

<style scoped>
.tree {
  display: inline-block;
  vertical-align: top;
  width: 30%;
  height: 400px;
  border: 1px solid #999;
}
</style>
