<template>
  <div class="prdWrap">
      <p class="searchResult">총 <span>{{totalItemNum}}</span>건의 상품이 검색되었습니다.</p>
      <ul class="prdList">
          <!-- ListProductItem Area Comp  -->
          <li class="card" is="ListProductItem" v-for="item in storeListData" :item="item" :key="item.id"></li>
      </ul>
      <div id="scrollArea"></div>
  </div>
</template>

<script>
import ListProductItem from '@/components/ListProductItem.vue'
import { mapState } from 'vuex'

export default {
  components: { ListProductItem },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('product', ['storeListData', 'totalItemNum'])
  }

}
</script>

<style>
.prdWrap{position: relative;}
.prdList {position: relative; z-index: 999;}
.prdList:after {content:"";display:block;clear:both;}
.prdList li {float:left;position:relative;width:350px;height:414px;margin:24px 25px 0 0;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);background-color: #fff;}
.prdList li:nth-child(3n) {margin-right:0;}
.prdList .state {position:absolute;left:0;top:0;display:block;width:72px;height:24px;background:#ee1d62;color:#fff;font-weight:700;text-align:center;line-height:24px;}
.prdList .img {display:block;}
.prdList .img img {width: 100%; height: 100%; background-repeat: no-repeat; background-size: cover; background-position: 50%; cursor: pointer;}
.prdList .progress {height:6px;background:#e1e1e1;}
.prdList .progress > div {position:relative;height:6px;background-image:linear-gradient(to right, #5ac3fc, #3d6afe);}
.prdList .progress > div span {position:absolute;right:0;bottom:11px;min-width:62px;height:24px;padding:0 6px;line-height:24px;background:#3d6afe;font-size:12px;color:#fff;font-weight:700;border-radius:4px;}
.prdList .progress > div span:after {position:absolute;right:0;bottom:-4px;content:"";width:0;height:0;border-top:4px solid transparent;border-right:4px solid #3d6afe;border-bottom: 4px solid transparent;}
.prdList .progress > div span.type02 {right:auto;left:100%;text-align: center;}
.prdList .progress > div span.type02:after {right:auto;left:0;border-left:4px solid #3d6afe;border-right:none;}
.prdList .keyword {padding:16px 16px 4px 16px;}
.prdList .keyword span {display:inline-block;padding:0 4px;font-size:12px;color:#666;line-height:24px;border-radius: 5px;background-color: #f7f7f7;}
.prdList .info {padding:0 16px;font-size:0;}
.prdList .info strong {display:inline-block;font-size:30px;color:#3d6afe;line-height:45px;font-weight:700;}
.prdList .info span {display:inline-block;position:relative;margin-left:16px;padding-left:17px;font-sizE:20px;color: rgba(0, 0, 0, 0.87);line-height:29px;font-weight:700;}
.prdList .info span:before {position:absolute;left:0;top:50%;content:"";width:1px;height:14px;margin-top:-7px;background-color: rgba(0, 0, 0, 0.6);}
.prdList .txt {padding:4px 16px 0 16px;color: rgba(0, 0, 0, 0.87);line-height:24px;}
.prdList .btnArea {padding:16px;}
.prdList .btnArea:after {content:"";display:block;clear:both;}
.prdList .btnArea a {float:left;display:block;width:155px;height:40px;margin-left:8px;text-align:center;font-size:14px;border-radius:4px;}
.prdList .btnArea a:first-child {bordeR:1px solid #3d6afe;margin-left:0;color:#3d6afe;line-height:38px;}
.prdList .btnArea a:last-child {color:#fff;font-weight:bold;background:#3d6afe;line-height:40px;}
.prdList .btnArea a.disable {background:#a8a8a8;}
#scrollArea {position: absolute; width: 1100px; height: 50px; bottom: 0px; z-index: 1;}
</style>
