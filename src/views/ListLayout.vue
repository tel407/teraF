<template>
<div class="wrap" >
    <!-- ListFilter Area Comp  -->
    <ListFilter msg="필터영역"/>
    <div class="inArea productArea">
        <!-- ListProducts Area Comp  -->
        <ListProducts msg="제품리스트 영역"  />
    </div>
</div>

</template>

<script>
import ListFilter from '@/components/ListFilter.vue'
import ListProducts from '@/components/ListProducts.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ListLayout',
  components: { ListFilter, ListProducts },
  data () {
    return {
      filterData: []
    }
  },
  mounted () {
    this.fetchData()
    this.addEvent()
  },
  methods: {
    ...mapActions('product', ['fetchData', 'nextData']),
    addEvent () {
      this.goTopScroll()
      window.addEventListener('scroll', this.onInfiniteScroll())
    },
    goTopScroll () {
      setTimeout(function () {
        return window.scrollTo(0, 0)
      }, 1)
    },
    onInfiniteScroll () {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return
          }
          this.nextData()
        })
      }, {
        threshold: 0
      })
      let scrollArea = document.getElementById('scrollArea')
      io.observe(scrollArea)
    }
  }

}
</script>

<style>
/* contents */
.inArea {width:1100px;margin:0 auto;}
.prdList {min-height: 1000px;}
.searchResult {padding:60px 0 0 0;font-size:16px;}
.searchResult span {color:#3d6afe;}
.btnMore {padding:60px 0;text-align:center;}
.btnMore a {display:inline-block;width:350px;height:40px;bordeR:1px solid #ccc;border-radius:4px;font-size:14px;color:#666;font-weight:700;line-height:38px;}

</style>
