# 테라펀딩

## 작업환경
```
vue-cli로 작업진행
```

### 진행한 요구사항
```
- **최소 Internet explorer 11 에 맞춰서 작업
- **무한스크롤 구현 - 1 페이지 당 5개 노출
- **필터 [상품유형 , 상품상태] 체크가 모두 false,true 시 데이터 전부 노출되도록 작업 
- **정렬 모집률 역순으로 정렬합니다. ( 단, 모집률이 같 을 경우에는 id 가 먼저인 상품을 우선적으로 노출합니다.)

```

### 디렉토리
```
\src\api\ListService.js             : 데이터 가공 및 조회 메서드 있는 서비스 JS ( api서버 X )
\src\api\Util.js                    : 유틸성 JS
\src\store\product\product.js       : vuex product Modual
\src\views\ListLayout.vue           : 과제 메인 페이지
\src\components\ListFilter.vue      : 필터 컴포넌트
\src\components\ListProductItem.vue : 제품 리스트아이텐 컴포넌트
\src\components\ListProducts.vue    : 제품 리스트 컴포넌트

```
