# Cheese

Cheese é um assistente pessoal de IA para desktop, com presença contínua, conversa natural e um avatar digital expressivo. Privacidade, consentimento e autonomia do usuário orientam o projeto, que poderá evoluir para outras plataformas.

A primeira versão usa **Tauri 2, React e TypeScript**, com Rust na camada nativa. A conversa e os indicadores são simulados; as mensagens existem somente na sessão atual. Não há integração de IA, acesso ao contexto do computador ou automações.

## Desenvolvimento no Windows

Instale Node.js 20.19 ou superior e npm, [Rust via rustup](https://www.rust-lang.org/tools/install) com a toolchain MSVC, [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) com a opção **Desktop development with C++**, e o [WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/). Consulte os [pré-requisitos oficiais do Tauri 2](https://v2.tauri.app/start/prerequisites/). Após instalar Rust, reinicie o terminal e confira `rustc --version` e `cargo --version`.

```sh
npm install
npm run tauri dev
```

O segundo comando abre a janela nativa. Para testar apenas o frontend no navegador, use `npm run dev`; isso não valida o aplicativo Tauri. As verificações são `npm run lint`, `npm run typecheck`, `npm test` e `npm run build` (frontend). Use `npm run tauri build` para compilar o aplicativo nativo; nesta etapa a geração de instaladores está desativada.
