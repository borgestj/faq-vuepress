---
sidebar: auto
---
# Erros e configuraçõe no Linux

## Erro ENOSPC

Esse erro pode ocorrer ao rodar ```npm run dev```` ou ```yarn serve```

Em distribuições baseadas em **Debian** como **Ubuntu** e **Elementary OS** rode o seguinte comando:

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```