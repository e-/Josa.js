# Josa.js

> Josa.js는 한국어 조사인 은/는, 을/를, 이/가, 와/과를 구분해주는 자바스크립트 라이브러리입니다.

## 설치

### node.js

```bash
npm install josa-js
```
```js
var Josa = require('josa-js');
```

### 일반 웹 페이지

웹 페이지에 josa.js 파일을 삽입합니다.

```html
<script src="josa.js" type="text/javascript"></script>
```

## 사용법 

### Josa.c ( String word, String format ) => String

`word`와 `format`에 해당하는 조사를 돌려줍니다.

```js
Josa.c('사과','을/를'); // '를'
Josa.c('귤','이/가'); // '이'
Josa.c('바나나','은/는'); // '는'
Josa.c('딸기','와/과'); // '와'
```

`Josa.c`의 반환값에는 `word` 자체는 포함되지 않는다는걸 주의하세요. `word` 자체를 포함하려면 `Josa.r`을 사용하세요.

`format`에는 '이/가', '은/는', '을/를', '와/과' 를 사용할 수 있고 짧은 이름도 가능합니다.

```js
Josa.c('사과','을/를'); // '를'
Josa.c('사과','을'); // '를'
Josa.c('사과','를'); // '를'
Josa.c('사과','을를'); // '를'
```

### Josa.r ( String word, String format ) => String

`Josa.c`와 비슷하나 `word`를 포함한 결과값을 돌려줍니다. 

```js
Josa.r('사과','을/를'); // '사과를'
Josa.r('귤','이/가'); // '귤이'
```
