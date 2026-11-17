# 캐치 아레나 · 웨이팅 게임 체험

줄 서는 시간을 미니게임 기록 대결로 바꾸는 웨이팅 게임 컨셉 체험 페이지예요.
개인 과제용 컨셉이며, 실제 매장·웨이팅 서비스와 무관해요. 매장 '달빛떡방'은 가상의 브랜드예요.

- 게임: `index.html`
- 웨이팅 유형 테스트: `test/index.html`
- GA4 설정: `ga.js` (측정 ID 한 줄)
- 링크 미리보기 이미지: `og.png`

## 1. 올리기

1. 레포 첫 화면에서 **Add file → Upload files**
2. 압축을 푼 폴더 안의 파일과 `test` 폴더를 통째로 끌어다 놓기 (`index.html`이 레포 맨 위에 있어야 해요)
3. **Commit changes**

## 2. GitHub Pages 켜기

1. 레포 **Settings → Pages**
2. Source: **Deploy from a branch** · Branch: **main** · 폴더: **/ (root)** → **Save**
3. 1~2분 뒤 주소가 생겨요
   - 게임: `https://아이디.github.io/catcharena/`
   - 테스트: `https://아이디.github.io/catcharena/test/`

레포가 Public이어야 무료로 Pages를 쓸 수 있어요.

## 3. GA4 연결

`ga.js`를 열어 연필 아이콘(Edit)으로 이 줄만 바꾸고 Commit 하세요.

```js
window.GA_ID = 'G-XXXXXXXXXX';   // → 내 측정 ID
```

GA4 웹 스트림 URL은 `https://아이디.github.io` 로 만들면 돼요.
배포 후 휴대폰으로 접속해서 GA의 **보고서 → 실시간**에 1명이 잡히면 연결 완료예요.

### 수집하는 이벤트

| 이벤트 | 언제 |
| --- | --- |
| `tutorial_complete` | 온보딩을 마칠 때 |
| `avatar_customize` | 캐릭터 꾸미기 완료 |
| `plaza_game` | 광장에서 미니게임 한 판 (game, score) |
| `rank_view` | 광장 랭킹 열기 |
| `cheer` | 줄 선 사람 응원 |
| `onsite_guide_open` | 현장 등록 안내 열기 |
| `alarm_on` | 덜 붐비면 알림 켜기 |
| `join_queue` | 줄 합류 (method: onsite/remote) |
| `arena_enter` | 아레나 입장 |
| `record_saved` | 내 기록 저장 (game, score) |
| `challenge_result` | 기록 도전 결과 (game, win) |
| `receipt_view` | 입장·영수증 (grade, wait_min) |
| `story_share` · `receipt_save` | 스토리 공유 · 영수증 저장 |
| `test_start` · `test_complete` | 유형 테스트 시작 · 완료 (type) |
| `test_save` · `go_arena` | 결과 공유 · 게임으로 이동 |

GA4에서 이벤트 파라미터(game, type 등)를 보고서에 쓰려면 **관리 → 맞춤 정의**에서 맞춤 측정기준으로 등록하세요.

## 4. SNS용 링크 (UTM)

`아이디`만 바꿔서 채널마다 다른 링크를 쓰면, GA의 **획득 → 트래픽 획득**에서 어디서 몇 명이 왔는지 나뉘어 보여요.

| 어디에 | 링크 |
| --- | --- |
| 인스타 스토리 | `https://아이디.github.io/catcharena/?utm_source=instagram&utm_medium=story&utm_campaign=catcharena` |
| 인스타 프로필 | `https://아이디.github.io/catcharena/?utm_source=instagram&utm_medium=profile&utm_campaign=catcharena` |
| 카카오톡 | `https://아이디.github.io/catcharena/?utm_source=kakao&utm_medium=chat&utm_campaign=catcharena` |
| 유형 테스트 (인스타) | `https://아이디.github.io/catcharena/test/?utm_source=instagram&utm_medium=story&utm_campaign=waiter_test` |

## 5. 링크 미리보기

카카오톡·인스타 링크 미리보기 이미지가 잘 안 뜨면 `index.html`과 `test/index.html`의 `og:image` 값을
`https://아이디.github.io/catcharena/og.png` 처럼 전체 주소로 바꿔 주세요.
