# 🛒 CLASS101 Front-End Assignment

Shopping cart system to purchase classes of CLASS101.

* [Developer Recruitment](https://www.notion.so/101-29162e4b76564bbe8329da95bf83447a)
* [Assignment](https://www.notion.so/101-70e87a00f5314e7b80d54033a2c2219d)

## Development Environment

* Node.js 15.2.1
* npm 6.14.8
* Ubuntu 20.04 (WSL)
* Visual Studio Code

## Tech Stack

* [React](https://reactjs.org/)
* [React Router](https://reactrouter.com/)
* [Redux](https://redux.js.org/)
* [SCSS](https://sass-lang.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Webpack](https://webpack.js.org/)
* [ESLint](https://eslint.org/)

## Available Scripts

* `npm start`: Run the app in development mode. Open http://localhost:8080 to view it in the browser.
* `npm run lint`: Find the problem in JavaScript code.
* `npm run build`: Build the app for production to the `build` folder.

## Assignment Details

### Conditions

* [x] Develop with [React](https://reactjs.org/) or [React Native](https://reactjs.org/)
* [x] Version control using [Git](https://git-scm.com/)
* [x] You can run the project in local environment

### Feature Requirements

* 상품 목록 페이지
  - [x] Route is `/products`
  - [x] 각 상품은 가격, 사진, 상품 제목을 표시
  - [x] 상품의 `score`를 기준으로 내림차순으로 정렬하여 5개씩 보여주는 pagination 구현
  - [x] 각 상품에는 장바구니 버튼이 있음
    + [x] 상품이 장바구니에 담겨 있지 않은 경우 `담기` 버튼 구현
    + [x] 상품이 장바구니에 담겨 있는 경우 `빼기` 버튼 구현
* 장바구니 페이지
  - [x] Route is `/cart`
  - [x] 장바구니에는 최대 3개의 상품이 담길 수 있음
  - [x] 장바구니의 상품 중 결제에 포함할 상품을 checkbox 등의 UI로 선택할 수 있음
  - [x] 장바구니에 담긴 각 상품의 수량을 선택할 수 있음
    + [x] 단, 최소 1개의 수량이 지정되어야 함
  - [x] 장바구니에 담긴 전체 상품의 최종 결제 금액에 대하여 쿠폰을 적용할 수 있음
    + [x] 쿠폰 적용이 불가능한 상품은 쿠폰 할인 계산에서 제외
  - [x] 최종 결제 금액을 장바구니 페이지 하단에 표시
    + [x] 소수점 가격이 생긴다면 버림 처리
* 데이터
  - [x] 서버에서 주어진다고 가정하기 때문에 데이터를 직접 변경하는 것은 금지

## Additional Features

* 상품 목록 페이지
  - [ ] 상품 목록을 넘길 때 움직이는 애니메이션 효과 추가
* 장바구니 페이지
  - [x] 제품을 삭제할 수 있는 기능 추가
  - [x] 최종 결제 금액에 할인 금액도 같이 표시
* 그 외 UI / UX
  - [ ] 모바일을 고려한 반응형 페이지
  - [ ] `alert` 함수를 사용하는 대신 커스텀 alert component 등을 사용
* 프로그래밍 관련
  - [ ] `redux-thunk` 또는 `redux-saga` 등을 활용한 API 비동기 처리
  - [ ] Code splitting 적용
  - [ ] Server-side rendering 적용
