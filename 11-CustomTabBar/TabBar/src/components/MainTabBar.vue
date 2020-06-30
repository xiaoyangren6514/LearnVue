<template>
  <div class='main-tab-bar'>
      <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
          <img slot="item-icon" src="~assets/img/tabbar/ic_tab_loan.png" alt />
          <img slot="item-icon-active" src="~assets/img/tabbar/ic_tab_loan_checked.png" alt />
          <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
          <img slot="item-icon" src="~assets/img/tabbar/ic_tab_repay.png" alt />
          <img slot="item-icon-active" src="~assets/img/tabbar/ic_tab_repay_checked.png" alt />
          <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
          <img slot="item-icon" src="~assets/img/tabbar/ic_tab_loan.png" alt />
          <img slot="item-icon-active" src="~assets/img/tabbar/ic_tab_loan_checked.png" alt />
          <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
          <img slot="item-icon" src="~assets/img/tabbar/ic_tab_mine.png" alt />
          <img slot="item-icon-active" src="~assets/img/tabbar/ic_tab_mine_checked.png" alt />
          <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
  name: 'MainTabBar',
  data(){
    return {}
  },
  components: {
      TabBar,
      TabBarItem
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style  scoped>
</style>
