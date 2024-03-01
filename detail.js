document.addEventListener("DOMContentLoaded", function() {
    // URL에서 쿼리 문자열 파싱
    const params = new URLSearchParams(window.location.search);
    const corpCode = params.get('corpCode'); // 'corpCode' 쿼리 값 얻기

    if (corpCode) {
        // corpCode을 사용하여 API 호출 또는 다른 작업 수행
        console.log(corpCode); // 개발자 콘솔에 기업명 출력
        // 여기에 API 호출 코드 추가
    }
});