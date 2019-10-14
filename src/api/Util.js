/**
 * NAME         : Util.js
 * DESCRIPTION  : Util성 메서드 모음
*/
export default {
  /**
    * 함수명    : simulateAsync
    * PARAM    : urlName( String ),callBackFunc( function )
    * 설명      : api 서버를 만들지 않아서 테스트용으로 비동기호출 simulater 를 만듬
    */
  simulateAsync (urlName, callBackFunc) {
    if (typeof callBackFunc === 'function') {
      return new Promise(resolve => {
        setTimeout(() => {
          callBackFunc()
          resolve()
        }, 15)
      })
    }
  },

  /**
    * 함수명    : koreaNumberFormat
    * PARAM    : number( int )
    * 설명      : 천 , 억 ,단위 한국어 단위로 바꾸기
    */
  koreaNumberFormat (number) {
    var inputNumber = number < 0 ? false : number
    var unitWords = ['', '만', '억']
    var splitUnit = 10000
    var splitCount = unitWords.length
    var resultArray = []
    var resultString = ''

    for (var i = 0; i < splitCount; i++) {
      var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i)
      unitResult = Math.floor(unitResult)
      if (unitResult > 0) {
        resultArray[i] = unitResult
      }
    }

    for (var j = 0; j < resultArray.length; j++) {
      if (!resultArray[j]) continue
      resultString = String(resultArray[j]) + unitWords[j]
    }

    return resultString
  }

}
