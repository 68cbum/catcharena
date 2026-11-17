// 캐치 아레나 · Google Analytics 4 설정
// ▼ GA4 측정 ID를 여기에 넣으세요 (예: 'G-AB12CD34EF'). 이 한 줄만 바꾸면 게임과 테스트 모두에 적용돼요.
window.GA_ID = 'G-WXQ1VM51DR';

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
(function(){
  var id = window.GA_ID;
  if (!/^G-[A-Z0-9]{6,}$/.test(id) || id === 'G-XXXXXXXXXX') return; // 측정 ID가 없으면 아무것도 보내지 않아요
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', id);
})();
// 게임 안 행동을 이벤트로 보내요 (예: track('test_complete', {type:'hunter'}))
window.track = function(name, params){ try { gtag('event', name, params || {}); } catch(e){} };
