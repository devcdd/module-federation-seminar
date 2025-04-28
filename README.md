# Module Federation

## Stacks

- `yarn workspace + yarn berry`
- `vite + react.js`
- `module federation`

### Description

다중 프로젝트를 관리하는 방법들 중 하나인 `Module Federation` 관련 세미나를 진행하며 만들게 된 스켈레톤 프로젝트입니다. 세미나를 진행하면서 최종적인 스켈레톤을 완성할 것 같습니다. 구조는 아래와 같습니다.

```
Root/
├── host :4000 (Ports)
├── app1 :4001 (Ports)
├── app2 :4002 (Ports)
```

루트에서 `yarn dev`로 세 개의 프로젝트를 모두 실행하였을 때 `host`에서 `app1`과 `app2`를 정상적으로 불러온다면 성공입니다!
