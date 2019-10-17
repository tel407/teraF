<template>
    <!-- filter area -->
    <div class="filterArea">
        <div class="inArea">
            <dl>
            <dt>상품유형</dt>
            <dd>
                <ul>
                <li>
                    <input type="checkbox" id="typeAll" v-model="typedStatusTotal" @change="chkChange"/>
                    <label for="typeAll">전체</label>
                </li>
                <li v-for="(item, index) in typedStatus" :key="'type0' + (index + 1)">
                    <input type="checkbox" :id="'type0' + (index + 1)" :value="item" v-model="chkOption.selectedStatus" @change="chkChange" />
                    <label :for="'type0' + (index + 1)">{{item}}</label>
                </li>
                </ul>
            </dd>

            <dt>채권상태</dt>
            <dd>
                <ul>
                <li>
                    <input type="checkbox" id="stateAll" v-model="contractTypeTotal" @change="chkChange"/>
                    <label for="stateAll">전체</label>
                </li>
                <li v-for="(item, index) in contractType" :key="'state0' + (index + 1)">
                    <input type="checkbox" :id="'state0' + (index + 1)" :value="item" v-model="chkOption.selectedContract"  @change="chkChange" />
                    <label :for="'state0' + (index + 1)">{{item}}</label>
                </li>
                </ul>
            </dd>
            </dl>
        </div>
    </div>
    <!-- //filter area -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      typedStatus: ['대기중', '모집중'],
      contractType: ['건축자금', '부동산담보'],
      chkOption: {
        selectedStatus: [],
        selectedContract: []
      }
    }
  },
  created () {
    this.chkOption = {
      selectedStatus: this.filterOpt.typedStatusArr,
      selectedContract: this.filterOpt.contractTypeArr
    }
  },
  computed: {
    ...mapGetters('product', ['filterOpt']),
    typedStatusTotal: {
      get () {
        return this.chkOption.selectedStatus.length === this.typedStatus.length
      },
      set (val) {
        if (val) {
          this.chkOption.selectedStatus = this.typedStatus
        } else {
          this.chkOption.selectedStatus = []
        }
      }
    },
    contractTypeTotal: {
      get () {
        return this.chkOption.selectedContract.length === this.contractType.length
      },
      set (val) {
        if (val) {
          this.chkOption.selectedContract = this.contractType
        } else {
          this.chkOption.selectedContract = []
        }
      }
    }
  },
  methods: {
    ...mapActions('product', ['filterChageData']),
    chkChange () {
      var storeOption = {
        typedStatusArr: this.chkOption.selectedStatus,
        contractTypeArr: this.chkOption.selectedContract
      }
      this.filterChageData(storeOption)
    }
  }
}
</script>

<style>
.filterArea {padding:52px 0;background:#f7f7f7;}
.filterArea dl {background:#fff;line-height:48px;}
.filterArea dl:after, .filterArea ul:after {content:"";display:block;clear:both;}
.filterArea dt {float:left;width:160px;padding-left:40px;font-weight:bold;border-bottom:1px solid #e1e1e1;}
.filterArea dd {float:left;width:940px;border-bottom:1px solid #e1e1e1;}
.filterArea li {float:left;position:relative;margin-right:32px;}
.filterArea li:first-child {width:90px;margin-right:40px;}
.filterArea li:first-child:after {position:absolute;right:0;top:50%;content:"";display:block;width:1px;height:24px;margin-top:-12px;background:#e1e1e1;}
.filterArea li input {display:none;}
.filterArea li label {position:relative;display:block;padding-left:24px;line-height:48px;}
.filterArea li label:before {position:absolute;left:-7px;top:50%;content:"";width:30px;height:30px;margin-top:-15px;background:rgba(0,0,0,.15);border-radius:50%;opacity:0;transition:opacity .5s;}
.filterArea li label:active:before {opacity:1;transition:opacity .5s;}
.filterArea li label:after {position:absolute;left:0;top:50%;content:"";width:16px;height:16px;margin-top:-8px;bordeR:1px solid #ccc;background:#fff;box-sizing:border-box;}
.filterArea li input:checked + label:after {border:none;background:url('../assets/images/chk_active.png') no-repeat;}
</style>
