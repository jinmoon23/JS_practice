# JavaScript 연습 환경

Node.js를 사용하여 JavaScript 코드를 테스트할 수 있는 환경입니다.

## 설치된 Node.js 버전
- Node.js v24.10.0

## 사용 방법

### 코드 실행
```bash
node index.js
```

또는 npm 스크립트 사용:
```bash
npm start
```

### 특정 파일 실행
```bash
node your-file.js
```

### 대화형 REPL 모드
```bash
node
```

## 파일 구조
- `package.json` - 프로젝트 설정 파일
- `index.js` - 메인 JavaScript 파일 (예제 코드 포함)
- `README.md` - 이 파일

## 팁
- `index.js` 파일을 수정하거나 새로운 `.js` 파일을 만들어 코드를 작성하세요
- ES6+ 모듈 구문(`import`/`export`)을 사용할 수 있습니다 (package.json에 `"type": "module"` 설정됨)
- `console.log()`를 사용하여 결과를 확인하세요
