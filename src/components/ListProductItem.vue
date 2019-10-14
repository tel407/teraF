<template>
    <li>
        <span class="state" v-if="this.itemObj.soldOutSoon" >마감임박</span>

        <span class="img">
            <img :src="this.itemObj.url">
        </span>

        <div class="progress">
            <div :style="{width:this.itemObj.currentRate+'%'}"><span :class="{ type02: this.itemObj.currentRate < 81 }">{{this.itemObj.currentRate}}% 달성</span></div>
        </div>

        <div class="keyword">
            <span>{{this.itemObj.contractType}}</span>
        </div>

        <div class="info">
            <strong>{{this.itemObj.rateOfReturn}}%</strong>
            <span>{{this.itemObj.loanPeriod}}개월</span>
            <span>{{this.itemObj.grade}}</span>
            <span>{{this.itemObj.investAmount}}</span>
        </div>

        <div class="txt">{{this.itemObj.title}}</div>

        <div class="btnArea">
            <a href="#">상세보기</a>
            <a href="#">바로투자</a>
        </div>
    </li>
</template>

<script>
import Util from '../api/Util'
export default {
  props: ['item'],
  data () {
    return {
      itemObj: {
        'title': this.item.title,
        'typedStatus': this.item.typedStatus,
        'rateOfReturn': this.item.rateOfReturn,
        'loanPeriod': this.item.loanPeriod,
        'targetAmount': this.item.targetAmount,
        'contractType': this.item.contractType,
        'grade': this.item.grade,
        'investAmount': Util.koreaNumberFormat(this.item.targetAmount),
        'url': this.item.url,
        'soldOutSoon': (this.item.soldOutSoon === 'TRUE'),
        'currentRate': this.item.currentRate
      }
    }
  }
}
</script>

<style>

</style>
