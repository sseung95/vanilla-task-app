# vanillaJS_my_task-app

할일 목록 노트 앱의 기능을 구현합니다.

이 프로젝트는 아래의 프로젝트를 참고하여 작성했습니다.

> https://www.freecodecamp.org/news/javascript-projects-for-beginners/

<br>

PS. 팀원들끼리 각자 개발 후 코드 리뷰 및 회고 진행

<br>

# 구현된 모습

📝 프로젝트 링크 ↓

> https://seung-task-app.netlify.app/

<br>

# Skill & Tools

HTML, CSS, Vanilla JavaScript

<br>

# 기능

1. 리스트 추가
   - input에 메시지 작성
   - submit 버튼 클릭
   - 리스트 추가
   - 알림 추가
2. 리스트 수정
   - 원하는 리스트의 수정 버튼 클릭
   - 해당 리스트의 데이터가 input에 출력하고 button에 있는 text도 변경
   - 내용 수정 후 edit 버튼 클릭
   - 해당 리스트에 데이터 반영
   - 알림추가
3. 리스트 삭제
   - 해당 리스트의 삭제 버튼 클릭
   - 해당 리스트가 삭제
   - 알림 추가
4. 리스트 전체 삭제
   - 전체 리스트의 삭제 버튼 글릭
   - 전체 리스트가 삭제
   - 알림 추가
5. 알림 출력
   - 알림 출력
   - 1초 후 알림 삭제

<br>

# 이 프로젝트를 하는 목적

✔️ 자바스크립트에 좀 더 친숙해지기 위해

✔️ filter, map를 사용해보면서 문법을 익히기 위해

<br>

# 어려웠던 점 & 해결방법

💥 submit 버튼을 눌렀을 때 리스트 추가와 수정 기능을 구별해서 로직을 나눠야 하는 부분이 어려웠음

    → submit 버튼의 textContent를 if문으로 구분해서 조건에 따라 해당 버튼의 이벤트를 각각 부여

<br>

💥 filter를 사용해서 배열에 있는 객체를 새로운 배열로 분리한 후 객체 안에 데이터를 수정했을 때 기존 배열의 데이터도 함께 변하는 현상.

    → 객체는 참조형 타입이라 filter를 사용해서 다른 변수에 담아도 같은 객체를 바라보고 있기 때문에 변하는 것이었음…

<br>

💥 submit 이벤트 안에서 아이템을 수정해주려면 해당 아이템의 id가 무엇인지 알아야해서 그 id 값을 전달해줘야하는데 어떻게 전달할지?

    → 수정 버튼을 눌렀을 때 전역 변수에 해당 객체를 담아주고, submit 이벤트에서 edit 일 때 전역 변수 객체를 사용!

<br>

💥 버튼의 textContent가 submit일 때 클릭하면 item리스트를 추가하고, 버튼의 textContent가 edit일 때 클릭하면 리스트의 item을 수정하는 기능을 하나의 버튼으로 동작하도록 만들려고 했다.

하나의 버튼에 if문으로 textContent에 따라 조건을 걸어서 각각 이벤트를 걸어주려고 했는데, 하나의 조건만 충족해서 textContent가 바뀌어도 하나의 이벤트만 동작하는 상황이 발생했다.

    → if문 안에 각각의 이벤트를 걸어주는 것이 아닌, 하나의 이벤트 안에서 if문이 동작을 하도록 수정을 하였다.

<br>

# 리팩토링 해야할 부분

1. 로컬스토리지를 이용해서 item 객체 데이터의 id, value값을 저장

2. 함수단위로 코드를 분류하는 작업

<br>

# 회고

### 👻 **승원**

- 아무리 작은 프로젝트라도 만만히 보지 말자…😭
- 이벤트나 객체 등등 기초적인 부분이 탄탄하지 않으니 동작이 왜 그렇게 되는지 잘 모른다!
  - → 역시 기초가 중요했다

<br>

### 🤡 **보우**

- 이벤트의 종류(click, submit, domcontentloaded …)에 대해서 자세히 공부하기.
- 배열안에 있는 요소들의 주소값을 생각하면서 작업하기.
- 코딩이 막혔을 때 한가지 해결책만 고집하지말고 다른 방식의 해결책도 구상을 해서 작업해보기.

<br>

### 🙉 **찬민**

- 작업의 순서를 디테일하게 정하고 시작해야할 것같다.
  - → 동일한 동작은 꼭 함수를 사용해라!!!!! 제발!!!
- git 을 최대한 활용해서 기능을 완성했을 때 마다 commit message를 작성하여 기록으로 남겨야 할 필요가 있음.
- 이번 토이를 진행하면서 정리해야할 내용
  - Primitive Type vs Reference Type
  - EventListenner → 얜 항상부족 ㅠㅠㅠ
