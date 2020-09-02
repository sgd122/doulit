![github pages](https://github.com/sgd122/doulit/workflows/github%20pages/badge.svg)

# doulit

```CMD
yarn add react-dom react-helmet react-router-dom react-scripts react-toastify styled-components styled-reset
```

## Code Inspector

#### 변경하지 말아야 할 변수 :

**repo_token** : Code Inspector가 리포지토리에 액세스하는 방법입니다.  
**code_inspector_access_key** 및 **code_inspector_access_key** : 액션이 Code Inspector 분석 엔진과 통신 할 수있는 방법입니다.

#### 다음 매개 변수를 변경할 수 있습니다.

**min_quality_grade** : 프로젝트에 있어야하는 최소 등급. 유효한 값은 다음과 같습니다 EXCELLENT, GOOD, NEUTRAL, WARNING,CRITICAL  
**min_quality_score** : 프로젝트에 있어야하는 최소 코드 품질 점수입니다. 이 사이의 값 0과 100.  
**max_defects_rate** : 코드 줄당 결함 수. 예를 0.001들어이 값 은 코드 1000 줄당 결함 1 개를 의미합니다.  
**max_complex_functions_rate** : 복잡한 함수의 비율 (예 : 순환 복잡도가 높은 함수). 예를 들어, 값은 0.5코드에 복잡도가 높은 함수가 50 %를 넘지 않아야 함을 의미합니다.  
**max_long_functions_rate** : long 함수의 비율 (예 : 너무 길어서 개발자가 올바르게 읽을 수없는 함수). 예를 들어, 값은 0.4코드에 긴 함수가 40 %를 넘지 않아야 함을 의미합니다.  
**project_name** : Code Inspector 의 프로젝트 이름 . 이 인수는 선택 사항입니다. 프로젝트 이름을 설정하면 분석 엔진이이 프로젝트의 기본 설정을 사용합니다. 프로젝트를 사용하지 않으려면 공백으로 두십시오.  
**max_timeout_sec** : 분석이 사용자에게 돌아와야하는 시간 (초). 기본값은 600 초 (10 분)입니다.

## 참조

[gh-pages](https://github.com/peaceiris/actions-gh-pages)
