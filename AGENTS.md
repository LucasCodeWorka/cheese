# Cheese

## Visão do produto

Cheese é um assistente pessoal de IA com presença contínua no desktop, concebido para futuramente alcançar outras plataformas. Sua experiência prioriza uma conversa natural por texto e, futuramente, por voz. O produto terá um personagem ou avatar digital original, expressivo e carismático.

A identidade visual é futurista, inspirada em interfaces tecnológicas cinematográficas: HUD, tons escuros, ciano e detalhes em âmbar. Essas referências devem apoiar a clareza e a acessibilidade da experiência.

No futuro, Cheese poderá compreender contextos do computador explicitamente autorizados, manter memória e orquestrar agentes de IA. Privacidade, consentimento e autonomia do usuário são princípios fundamentais: o usuário deve compreender e controlar os acessos e ações do assistente.

## Arquitetura e código

- A stack planejada é Tauri 2, React e TypeScript, com Rust na camada nativa.
- Comece com uma aplicação simples. Organize o frontend em `src/app`, `src/features` e `src/shared` conforme a necessidade; mantenha a camada nativa em `src-tauri`.
- Separe regras de negócio da interface e dos recursos específicos de plataforma. Extraia pacotes compartilhados apenas quando houver necessidade concreta.
- Use TypeScript com tipagem rigorosa, nomes claros e componentes pequenos. Evite abstrações e dependências prematuras.
- Mantenha permissões do Tauri mínimas e explícitas. Valide dados e autorizações na fronteira entre frontend e código nativo.
- Nunca versione segredos, credenciais, dados pessoais ou arquivos de ambiente locais. Recursos de contexto, memória e ações devem respeitar consentimento e controle do usuário.

## Testes e verificações

- Teste regras de negócio e comportamentos relevantes, incluindo casos de erro e limites de confiança.
- Adicione testes de integração nas fronteiras importantes e testes de interface quando houver interface.
- Execute as verificações disponíveis e adequadas à mudança, incluindo tipos, lint, testes e build quando configurados. Documente limitações de verificação no pull request.

## Fluxo de trabalho

- Descreva o problema e o resultado esperado em uma GitHub issue antes de iniciar uma mudança; vincule a issue ao trabalho.
- Crie uma feature branch a partir de `main` atualizada, com nome descritivo, por exemplo `feature/conversa-texto`.
- Mantenha mudanças focadas e commits claros. Não inclua segredos ou artefatos gerados.
- Abra um pull request para `main`, referencie a issue e descreva a mudança, sua validação e eventuais riscos. Solicite revisão antes da integração.
- Não faça push forçado nem reescreva histórico compartilhado sem autorização explícita. A proteção da branch será configurada quando apropriado no GitHub.
