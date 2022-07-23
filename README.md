## Demo Link
[https://css-awards-trend.web.app/](https://css-awards-trend.web.app/)
## 제작 기간
7월 9일 ~ 7월 13일 (5일)  
1인 개발

## 프로젝트 개요
WebGL, Three.js 를 사용한 프로젝트입니다.    

CSS Design Awards는 Interactive Developed Web Page에 UI/UX/혁신성에 대한 점수를 매기고, 높은 점수의 웹 페이지에 awards를 부여하는  사이트입니다. 해당 사이트의 경우 매일 가장 높은 점수를 획득한 페이지를 선정하는 WOTD 항목이 있으며, 현재 주류의 시각에서 본 레이아웃, 인터랙션, 인터페이스, 사용자 경험에서 높은 점수를 받은 웹 페이지들입니다.   
[CSS Design Awards Link](https://www.cssdesignawards.com/)

이번 프로젝트에서는 이러한 WOTD 웹페이지들의 점수와 이들이 구현한 인터랙션, 인터페이스, UX 및 디자인 요소 들을 구분지어 분류한 후 한 눈에 편리하게 비교를 할 수 있도록 시각화 차트를 구성해보자는 아이디어에서 출발하였습니다.      

2022년 1월 1일부터 7월 8일까지의 WOTD(Website of the day) 수상한 웹페이지에 모두 방문하여 페이지의 타이틀, 기업명, 개발자, 설명 등 기본적 정보들부터 전반적 레이아웃 타입과 디자인 요소, 인터랙션 요소, 인터페이스, 시각화요소, 메인 색상과 서브색상, UI/UX/혁신성 점수 및 평균 점수에 이르기까지의 세분화된 정보들을 메타 정보로 저장하고 이 정보들을 활용하여 시각화 하는 것에 초점을 두었습니다.    

페이지 구성에 있어 정보의 의미에 초점을 맞추고 직관적으로 정보가 의미하는 바를 알 수 있도록 particle(sphere)과 원형을 적극적으로 차용하였으며, 이를 카메라 포지션과 sphere 배치를 통해 시각적으로 다양한 연출을 시도하였습니다. 또한 크기 및 회전 속도 등 시각적 요소에 직접적으로 연관되는 수치의 경우 즉각적 커스터마이징이 가능하도록 툴바를 구현하여 사용자의 시각적 기호 및 개발 과정에서의 수치 변경 간편성을 고려하였고, 페이지 전반은 시각화 차트를 보여주기 이전 해당 프로젝트의 목적성을 보다 잘 보여주기 위한 배경 설명 파트들로 구성 되어있습니다.    

Three.js의 react 내 사용 편의성을 위한 라이브러리인 @react-three/fiber, @react-three/drei 를 사용하였습니다.    

## 주요 기능
총 180 개의 웹 페이지 방문 후 각 웹 페이지의 CSSDA UI/UX/INN 점수, 인터페이스 구성 요소와 인터랙션, 메인 색상과 서브 색상, 디자인 요소들을 카테고리로 분류하여 firebase에 저장하였습니다.    

해당 정보들은 firebase 로부터 받아와 reducer state에 저장되며, 해당 정보들은 SphereGeometry / CircleGeometry 형태로 렌더링됩니다.    

### 메타 정보 시각화 자료 구현

해당 페이지의 가장 마지막 content로 배치되어 있으며, 이 프로젝트의 핵심입니다.  

- 모든 웹페이지 방문 후 구분 한 인터랙션, 디자인적 요소들 중 상위 20개의 요소를 버튼 형태로 구현하여 각 버튼에 onMouseOver 이벤트 발생시 중앙의 원형에 평균 점수, mainColor, sphere 색상을 이용한 정보의 시각적 구분이 가능하도록 구현하였습니다.  
![meta09](https://user-images.githubusercontent.com/68191058/179503606-d0e43c68-48fe-41ec-993a-833a2cdcec5f.gif)![meta10](https://user-images.githubusercontent.com/68191058/179503855-ca479f96-3bb4-4f60-a866-4b0451c0324f.gif)  

- 각 항목들은 firebase로부터 받아온 데이터 배열에서 animation 배열과 subDesign 배열 내부에 항목의 이름을 지닌 인덱스의 유무를 판별하여 새 배열에 담는 과정을 거칩니다. 이후 props로 시각화 컴포넌트에 보내져 sphere 색상 및 Line 색상과 점수에 따른 길이가 렌더링 되도록 구현되었습니다.


### Factor Toolbar 및 잠금 기능 구현

개발 과정 중 시각적으로 안정적이고 직관적인 정보전달을 위해 필요한 sphere 크기, 원의 크기, 속도등의 조정이 필요하였습니다. 별도의 코드변경 및 저장 등 번거로운 과정을 생략하기 위해 팩터수치 변경 툴을 구현하였습니다. 해당 툴은 페이지 좌측에 비활성화 상태로 고정되어 있으며, 활성화시 우측으로 슬라이드 되는 인터랙션을 구현하였고, 사용을 위해 툴 레이아웃 우측 상단 아이콘 클릭을 통해 Lock 을 걸고 푸는 기능을 구현하여 필요시 편리하게 사용할 수 있도록 되어 있습니다.  
![meta01](https://user-images.githubusercontent.com/68191058/179503039-444d50ba-c12c-4c7c-955e-9adb14a41c39.gif)![meta02](https://user-images.githubusercontent.com/68191058/179503131-77612e8e-605e-40a2-ab9b-fec28085972a.gif)  

- 웹 페이지 정보들을 시각화 하는 과정에서 sphere들의 크기는 각 페이지 정보들의 3가지 점수 지표(UI/UX/INN)의 평균값에 의존하며, 대다수의 페이지들이 8.0 ~ 9.0점 사이의 점수를 받았다는 것과, 이들 간의 크기 차이를 보다 극명하게 보여주기 위해 sizeDiff 팩터 변수(적정값 7.9)를 두어 시각적 가독성을 높일 수 있게 구현하였습니다.

- 전체적인 sphere의 크기는 sizeRatio 팩터 변수(적정값 0.5)에 의존하며, 해당 변수 변경시 전체 sphere의 크기가 균일하게 커지도록 구현하였습니다.

- sphereGeometry의 argument 변수는 각각 크기, 수직수평 꼭지점 수를 파라미터로 받으며, 꼭지점의 수와 관련된 resolution 팩터 변수(적정값 15) 변경시 변수의 값이 높아지면 더 완전한 구의 모양이 되도록 구현하였습니다. 꼭지점을 이루는 particle이 많을 수록 렌더링 연산이 오래 걸리고 이는 성능과 직결되기에 sphere로 보이면서 연산에 부담을 주지 않는 15를 적정값으로 책정하였습니다. 

- 각 파트별 원 모양의 sphere 집합은 회전하며, 모든 회전하는 sphere 집합의 회전 속도는 rotationSpeed 팩터 변수(적정값 0.5)에 의존하도록 구현하였습니다.


### 각 파트별 Scene 구현

- 원형 형태의 경우 원하는 반지름 값에 360도를 순회하며 중심으로부터 같은 거리의 180개의 포지션 정보를 배열 형태로 저장 후, sphereGeometry 렌더링 시 해당 배열의 정보를 받아올 수 있도록 구현하였습니다.

- sphere의 색상은 firebase로부터 받아온 데이터 배열의 mainColor 변수에 저장된 css 색상정보를 출력하도록 구현되었습니다.  
![meta03](https://user-images.githubusercontent.com/68191058/179503241-efb8b0f6-0d02-4d87-bd0d-f11185036f03.gif)  

- Meta Criteria 파트의 경우 three.js의 씬, 카메라를 포함한 렌더러 출력 과정을 간편화한 @react-three/fiber Canvas 컴포넌트 내 camera 포지션 속성과 마우스로 간단한 카메라 타겟 이동이 가능한 @react-three/drei <OrbitControls> 컴포넌트 내 target 포지션 속성을 이용해 기존에 구현한 원형의 중앙으로 카메라 포지션을 이동시켜 연출하였습니다. 카메라의 경우 디폴트 값으로 perspective 카메라를 지원하기에 scene 가장자리에 가까워질수록 형태가 왜곡되는 현상이 있습니다.  
![meta04](https://user-images.githubusercontent.com/68191058/179503323-9a58fb75-2855-4197-9dd0-ff01de9a4cbe.gif)

- 개별 sphere들의 상하좌우 왕복운동 애니메이션은 DOM내 sphere의 x, y, z 포지션 값을 매 프레임마다 sin 주기로 왕복 운동 포지션이 저장된 배열을 순회하는 형식으로 구현하였습니다.  
![meta05](https://user-images.githubusercontent.com/68191058/179503386-eec117e3-efc8-4184-91d4-da899e8663b9.gif)

- 분포도(Distribution) Scene은 각각 0.2점 단위 차이가 나는 6가지의 반지름이 다른 원형 포지션 배열을 준비하고 렌더링을 시작하는 배열 index를 변경해 각각 시작하는 각도가 차이나게 하는 형태로 구현하였습니다.  
![meta06](https://user-images.githubusercontent.com/68191058/179503446-f77eafd3-2bff-4d16-91f2-c640bf97c084.gif)

- 9.0 이상 웹페이지를 보여주는 파트에선 Line을 직육면체 형태로 구현하였습니다. 해당 Line 렌더링 컴포넌트의 경우 @react-three/fiber 라이브러리의 이전 베타버전 react-three-fiber 라이브러리 예시 외에 doc을 찾을 수 없었기에 스택오버플로우 자료를 참고하여 프로세스를 이해한 후 작성한 클론코딩입니다.
출처 : https://stackoverflow.com/questions/68061538/difficulty-creating-basic-line-react-three-fiber-and-typescript  
![meta07](https://user-images.githubusercontent.com/68191058/179503484-ee0bc146-9580-4004-b6eb-1aa30d2bfc7c.gif)

- 최하단 파트의 경우 색상 반전된 두 개의 WebGL scene을 중첩시켜 구현하였습니다.  
![meta11](https://user-images.githubusercontent.com/68191058/179503724-f719f1dc-a706-463b-925f-8d16e0c7e804.gif)




## 기술 스택

- react, redux, three.js
- @react-three/fiber, @react-three/drei, styled-components, redux-thunk, react-icons, firebase





## 회고

#### WebGL을 다룬 첫 번째 프로젝트입니다. particle, sphere, circle, line 등 레이아웃을 구성하는 점선면 기초디자인에 필요한 기본적인 기능들에 대해 학습하였습니다. 

이번 프로젝트에서는 데이터베이스 자원에 대한 최적화 필요성과 WebGL 3D 작업을 하면서 발생하는 렌더링 성능 관련 이슈에 대한 고민, 스타일링 시 규격 단위의 통일할 필요성을 느꼈습니다. 

데이터베이스로 firebase를 사용하면서, 매 렌더링마다 180 건의 데이터를 받아오면서 일일 데이터량 50000건을 초과하는 경험을 했습니다. 이후 파이어베이스 접근이 하루정도 제한이 되면서, 모든 개발이 정지되는 사태가 발생했고, 매번 렌더링에 의한 리소스 누수를 막기 위해 데이터 배열 하나에 모든 데이터를 저장하는 형태로 DB에 저장하는 방식을 떠올렸습니다. 최종적으로 파이어베이스 데이터를 배열 형태로 컴포넌트에 옮겨 저장하는 방식을 사용했습니다. 클라우드 서버를 사용할 경우 사용자의 트래픽이 모두 비용처리가 되기에, 고정적으로 필요한 리소스의 경우 매번 렌더링마다 가져오는 것보단 쿠키와  로컬 스토리지 저장 과정을 거치고, 데이터 업데이트에 의해 새 데이터 수령이 필요한 경우 서버측에서 기존 데이터 리스트와 새 데이터 리스트 시트를 비교하여 바뀐 데이터에 한해서 가져오는 방식이 유리하겠다는 생각에 이르렀습니다.

WebGL 개발 과정에서 렌더링 성능에 가장 큰 영향을 미친 팩터는 각각의 sphere 수직수평 꼭지점의 갯수(이하 resolution) 였습니다. 이미 기존 프로젝트에서 gltf 파일 로드 하면서 렌더링 연산 성능 이슈를 경험하였고, sphere resolution이 너무 낮은 경우 연산시간은 줄어들지만 사용자 경험을 해칠 것으로 봤습니다. 각 resolution 값에 따른 렌더링 결과값을 코드 단계가 아닌 브라우저에서 바로 확인하고 싶었기에 프로젝트에 Factor Toolbar을 구현하였고, 이를 다른 팩터에도 적용시켜 새로운 리듀서에 해당 값들을 관리하고 전역에 뿌려주는 로직을 구현했습니다.

해당 프로젝트의 목표는 WebGL 구현이 우선이었기에 반응형 웹 개발이 이뤄지지 않았습니다.

기존 프로젝트들에선 %, px 단위 width, height 스타일링를 주로 사용했지만 이번 프로젝트에선 vw, vh 등 뷰포트 단위의 스타일링을 진행했습니다. @react-three/fiber 의 레퍼런스들에서 Canvas 컴포넌트  aspect 속성 사용시 window.innerWidth 와 window.innerHeight 값을 기준으로 사용하였고 때문에 가독성을 위해 vw, vh 단위를 사용했습니다. Canvas 컴포넌트 사용시 레이아웃 구성은 vw, vh 단위로 진행하였는데, 여기에 텍스트 레이아웃과 버튼 레이아웃을 추가할 때 px 단위로 마크업 했기에 현재 작업하는 노트북 이상의 해상도를 가진 대형 모니터에서는 모든 요소가 제 위치에 있지 않은 현상을 발견했습니다. 기존에 800px 기준 모바일과 웹만을 구분하여 반응형 웹을 구현하였었는데, 반응형 단위의 세분화의 필요성과 기준 단위의 통일이 필요하다는 것을 깨달았습니다. 다른 프로젝트들의 경우 기본적으로 %, rem, em 단위를 지켜 개발하였기에 상대적으로 레이아웃이 깨지는 현상이 덜했으나, 이번 프로젝트처럼 뷰포트 기준의 레이아웃에 세부 조정을 위한 px 조정은 유지보수 뿐 아니라 개발 단계에서 해상도가 다른 기기를 확인하지 않는 이상 잘못 진행되어감을 모르기에 향후 프로젝트에선 더 꼼꼼하게 체크해야할 부분입니다.
