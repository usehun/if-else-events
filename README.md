## if-else-events

#### (1) <br/>
const body = document.body;
<br/>
html의 body태그를 js에서 사용할 수 있도록 선언해 줍니다.

#### (2) <br/>
자주 사용할 문자열을 변수로 선언해 줍니다. 이 문자열들은 body 태그에 적용될 클래스 이름을 담고 있습니다. 클래스는 CSS 파일에 선언되어 있습니다.
<br/>
![ex01](https://user-images.githubusercontent.com/88027485/193383996-dc1f12b4-c984-46b2-bede-c4ad72cd5032.png)

#### (3) <br/>
const width = window.innerWidth;
<br/>
브라우저 창의 사이즈 변화에 따라 색이 변해야 하기 때문에 innerWidth프로퍼티를 사용합니다. 역시 자주 사용하는 프로퍼티기 때문에 width변수에 저장해 줍니다.

#### (4) <br/>
조건 문의 첫 번째 조건입니다. if문을 사용해 작성합니다.
<br/>
html 파일을 확인하면 body태그에는 mediumScreen클래스가 적용되어 있습니다.
<br/>
width가 1000px보다 클 때 body 태그에 bigScreen클래스를 적용하기 위해 classList에 add메서드로 추가해 줍니다. 직접적인 문자열보다 위에서 선언해 둔 BIG_SCREEN를 사용합니다.
<br/>
적용되어 있던 mediumScreen을 classList에서 remove메서드로 제거해 줍니다. 이 역시 미리 선언해 둔 MEDIUM_SCREEN을 사용합니다.
<br/>
![ex02](https://user-images.githubusercontent.com/88027485/193384000-844e0ab9-0976-44ac-947f-09185727da09.png)

#### (5) <br/>
if문에 다른 조건을 추가하기 위해 else if와 else문을 사용할 수 있습니다.
<br/>
먼저 else if문을 사용해 두 번째 조건과 그에 따라 실행될 동작을 작성합니다.
<br/>
마지막으로 else문을 사용해 if/else if문의 조건에 해당하지 않을 경우 실행될 동작을 작성합니다. else문은 위에서 작성된 조건 외에 나머지 모든 상황에서 실행되기 때문에 따로 조건을 작성하지 않습니다. (조건을 작성하면 에러가 발생합니다.)
<br/>
![ex03](https://user-images.githubusercontent.com/88027485/193384002-b8969b35-9079-4064-aae4-b644d4c97e01.png)

#### (6) <br/>
window.addEventListener("resize", handleResize);
<br/>
작성한 함수를 사용해 이벤트 핸들러를 등록합니다. addEventListener메서드를 사용합니다. window에 resize이벤트가 발생할 때 handleResize함수가 실행되어야 합니다.
