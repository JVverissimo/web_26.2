# Documentação de Uso de IA — Tributo Fácil

Registro dos comandos enviados à IA durante o desenvolvimento do projeto, contendo o comando original, a resposta fornecida e as ações realizadas após cada comando.

---

## Comando 1 — 20/11/2026 18:01

**Comando:**
> qual é a organização de pasta mais adequadra, quando se intalar o vite

**Resposta:**
Foi explicado que, como o projeto já possuía o Strapi instalado diretamente na raiz, não se deve instalar o Vite na mesma raiz para evitar conflitos (`package.json`, `src/`, `public/`, `dist/`, `tsconfig.json`). Recomendou-se separar o repositório em `backend/` (Strapi) e `frontend/` (Vite), além de apresentar uma proposta inicial de organização interna para o `frontend/` alinhada às entidades e funcionalidades do **Tributo Fácil** descritas em `PROPOSTA.md`.

**O que foi feito após o comando:**
- Inspeção somente leitura dos arquivos da raiz do projeto (`/home/verissimo/web-teste`), `PROPOSTA.md` e `package.json` para contextualizar a orientação.
- Nenhuma alteração foi feita em arquivos ou pastas.

---

## Comando 2 — 20/11/2026 18:14

**Comando:**
> no css e type, vai tudo manual sem framework, com essa informação vc ainda sugere essa organização de pasta

**Resposta:**
Foi explicado que a separação da raiz (`backend/` + `frontend/`) permanece válida, mas a estrutura interna do `frontend/` deveria ser simplificada para **Vite + TypeScript puro + CSS puro** (sem frameworks como React ou Tailwind). Foram removidos conceitos específicos de frameworks (`hooks/`, `contexts/`, `App.tsx`) e proposta a organização com:
- Páginas HTML em formato MPA na raiz do `frontend/` (`index.html`, `login.html`, `perfil.html`, `historico.html`, `admin.html`).
- `src/styles/` modularizado (`reset.css`, `variables.css`, `global.css`, `components/` e `pages/`).
- `src/types/`, `src/services/`, `src/utils/`, `src/components/` e `src/pages/`.
- Comparação breve entre MPA (recomendado sem framework) e SPA manual.

**O que foi feito após o comando:**
- Apenas orientação conceitual e definição da nova proposta de estrutura de pastas.
- Nenhuma alteração foi feita em arquivos ou pastas.

---

## Comando 3 — 20/11/2026 18:35

**Comando:**
> aplique essa organização de pasta

**Resposta:**
Foi confirmada a aplicação da estrutura `backend/` + `frontend/` no repositório, detalhando os arquivos movidos e criados, o resultado positivo do build do frontend e os comandos para iniciar o backend (Strapi) e o frontend (Vite).

**O que foi feito após o comando:**
1. **Verificação do ambiente:** conferidas versões do Node (`v26.13.1`) e npm (`11.20.0`), além de verificado que não havia instância do Strapi em execução.
2. **Reorganização do backend (Strapi):**
   - Criada a pasta `backend/`.
   - Movidos para `backend/` todos os arquivos e diretórios do Strapi (`config/`, `database/`, `dist/`, `.env`, `.env.example`, `favicon.png`, `node_modules/`, `package.json`, `package-lock.json`, `public/`, `README.md`, `src/`, `.strapi/`, `.strapi-updater.json`, `.tmp/`, `tsconfig.json` e `types/`).
   - Copiado `.gitignore` para `backend/.gitignore`.
   - Atualizado o `.gitignore` da raiz (ajustando `public/uploads/*` para `backend/public/uploads/*`) e criado um novo `README.md` na raiz documentando `backend/` e `frontend/`.
3. **Criação do frontend (Vite + TypeScript puro + CSS puro — MPA):**
   - Arquivos de configuração: `frontend/package.json`, `frontend/tsconfig.json`, `frontend/vite.config.ts` (com entrada MPA para as 5 páginas), `frontend/src/vite-env.d.ts`, `frontend/.env` e `frontend/.env.example`.
   - Páginas HTML: `frontend/index.html`, `frontend/login.html`, `frontend/perfil.html`, `frontend/historico.html` e `frontend/admin.html`.
   - Diretórios de ativos: `frontend/public/.gitkeep` e `frontend/src/assets/.gitkeep`.
   - CSS puro em `frontend/src/styles/`: `reset.css`, `variables.css`, `global.css`, `components/{navbar,modal,tabela}.css` e `pages/{home,login,perfil,historico,admin}.css`.
   - Interfaces TypeScript em `frontend/src/types/`: `usuario.ts`, `simulacao.ts` e `tabelaImposto.ts`.
   - Serviços HTTP (Strapi) em `frontend/src/services/`: `api.ts`, `authService.ts`, `simulacaoService.ts` e `impostoService.ts`.
   - Funções utilitárias em `frontend/src/utils/`: `storage.ts`, `formatadores.ts`, `calculoInss.ts`, `calculoIrpf.ts` e `exportarPdf.ts`.
   - Componentes DOM em `frontend/src/components/`: `navbar.ts` e `extratoTabela.ts`.
   - Scripts de entrada das páginas em `frontend/src/pages/`: `home.ts`, `login.ts`, `perfil.ts`, `historico.ts` e `admin.ts`.
4. **Instalação e validação:**
   - Instaladas as dependências de desenvolvimento em `frontend/` (`vite`, `typescript`, `@types/node`) com `npm --prefix frontend install`.
   - Validado o projeto com `npm --prefix frontend run build` (`tsc --noEmit && vite build`), concluído sem erros e gerando o build das 5 páginas em `frontend/dist/`.

---

## Comando 4 — 20/11/2026 18:42

**Comando:**
> agora vc vai criar uma pasta doc, e criar o docIA, todos os comando vc vai colocar e responder o comando colocando o q vc fez após o comando, faça isso para os anteriores

**Resposta:**
Foi confirmada a criação da pasta `doc/` e do arquivo `doc/docIA.md` contendo o histórico completo dos comandos enviados até o momento, cada um com sua respectiva resposta e o detalhamento do que foi executado após o comando, mantendo esse padrão para os próximos comandos.

**O que foi feito após o comando:**
- Criada a pasta `doc/` na raiz do repositório.
- Criado o arquivo `doc/docIA.md` registrando os Comandos 1, 2, 3 e 4 com comando, resposta e ações executadas.

---

## Comando 5 — 20/11/2026 18:49

**Comando:**
> agora vc vai colocar os comando necessarios para baixar as dependencia de ferramentas para ter em seu celular, e tecnoligia, coloque isso no docIA, tudo necessario para rodoar a aplicação

**Resposta:**
Foram adicionadas ao `doc/docIA.md` as tecnologias utilizadas no projeto, os comandos para instalar as ferramentas necessárias tanto no **computador** quanto no **celular** (rodando diretamente no Android via Termux ou acessando pelo navegador do celular na mesma rede Wi-Fi), além do passo a passo completo para configurar variáveis de ambiente, instalar dependências e executar o backend (Strapi) e o frontend (Vite).

**O que foi feito após o comando:**
- Inspecionados `backend/package.json`, `backend/.env.example` e `frontend/package.json` para confirmar versões exatas das tecnologias, requisitos de engine do Node/npm e variáveis de ambiente.
- Adicionada a seção completa **Guia de Tecnologias, Ferramentas e Execução da Aplicação** neste arquivo (`doc/docIA.md`) e registrado este Comando 5 no histórico.

---

# Guia de Tecnologias, Ferramentas e Execução da Aplicação

## 1. Tecnologias Utilizadas

| Camada | Tecnologia | Versão / Requisito | Papel no projeto |
| --- | --- | --- | --- |
| Runtime | Node.js | `>= 22.0.0 <= 26.x.x` | Execução do backend (Strapi) e ferramentas de build do frontend (Vite) |
| Gerenciador de pacotes | npm | `>= 6.0.0` | Instalação das dependências em `backend/` e `frontend/` |
| Backend / CMS | Strapi | `5.63.0` | API REST, autenticação JWT (`users-permissions`) e painel administrativo |
| Banco de dados | SQLite (`better-sqlite3`) | `12.11.1` | Persistência local do Strapi em desenvolvimento |
| Frontend / Bundler | Vite | `^6` | Servidor de desenvolvimento e build MPA |
| Linguagem | TypeScript | `^5` | Tipagem estática no backend e frontend (sem framework no frontend) |
| Interface | HTML5 + CSS3 puro | — | Páginas MPA e estilização manual em `frontend/src/styles/` |
| Versionamento | Git | Qualquer versão recente | Controle de versão e clonagem do repositório |

---

## 2. Instalação das Ferramentas Necessárias

### 2.1. No computador (Linux — Ubuntu/Debian)
```bash
# Atualizar repositórios e instalar Git e ferramentas de compilação (para better-sqlite3, se necessário)
sudo apt update
sudo apt install -y git curl build-essential python3

# Instalar NVM (Node Version Manager) e Node.js 22 LTS (compatível com >=22 <=26)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22

# Verificar versões instaladas
node -v
npm -v
git --version
```

### 2.2. No computador (Windows — PowerShell)
```powershell
# Instalar Git e Node.js 22 LTS via winget
winget install --id Git.Git -e
winget install --id OpenJS.NodeJS.LTS -e

# Reinicie o terminal e verifique as versões
node -v
npm -v
git --version
```

### 2.3. No celular (Android via Termux — rodar localmente no celular)
1. Instale o aplicativo **Termux** (recomendado baixar pelo **F-Droid**, pois a versão da Play Store é desatualizada).
2. Abra o Termux e execute os comandos abaixo para instalar todas as ferramentas e compiladores necessários para o Node.js, Vite e `better-sqlite3`:

```bash
# Atualizar pacotes do Termux
pkg update -y && pkg upgrade -y

# Instalar Git, Node.js e ferramentas de build nativas (necessárias para better-sqlite3)
pkg install -y git nodejs python clang make pkg-config

# Verificar versões instaladas
node -v
npm -v
git --version
```

> **Observação sobre o celular (Android/Termux):** garanta que a versão do `node` instalada esteja entre `22.x` e `26.x` (requisito do Strapi no `backend/package.json`). Caso o celular tenha pouca memória RAM ao compilar o painel do Strapi, recomenda-se rodar o projeto no computador e apenas **acessar pelo navegador do celular** (seção 4).

---

## 3. Passo a Passo para Instalar Dependências e Rodar a Aplicação

### Passo 1 — Clonar o repositório (se ainda não estiver baixado)
```bash
git clone <URL_DO_REPOSITORIO>
cd web-teste
```

### Passo 2 — Configurar e rodar o Backend (Strapi)
```bash
cd backend

# Criar o arquivo .env a partir do exemplo (caso ainda não exista)
cp .env.example .env

# Instalar dependências do Strapi
npm install

# Iniciar o Strapi em modo de desenvolvimento (porta 1337)
npm run develop
```
- API disponível em: `http://localhost:1337/api`
- Painel admin do Strapi: `http://localhost:1337/admin`
- No arquivo `backend/.env`, defina valores próprios para `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET` e `ENCRYPTION_KEY`.

### Passo 3 — Configurar e rodar o Frontend (Vite + TS + CSS puro)
Em **outro terminal** (mantendo o backend rodando):
```bash
cd frontend

# Criar o arquivo .env a partir do exemplo (caso ainda não exista)
cp .env.example .env

# Instalar dependências do Vite e TypeScript
npm install

# Iniciar o servidor de desenvolvimento do Vite (porta 5173)
npm run dev
```
- Aplicação frontend disponível em: `http://localhost:5173`
- Conteúdo padrão do `frontend/.env`:
  ```env
  VITE_API_URL=http://localhost:1337/api
  ```

---

## 4. Como Acessar a Aplicação pelo Celular (mesma rede Wi-Fi)

Se a aplicação estiver rodando no computador e você quiser testar/usar no navegador do celular:

1. Descubra o IP local do computador na rede Wi-Fi:
   - Linux: `hostname -I`
   - Windows: `ipconfig` (procure por *Endereço IPv4*, ex.: `192.168.1.15`)
2. Em `frontend/.env`, aponte a API para o IP do computador:
   ```env
   VITE_API_URL=http://192.168.1.15:1337/api
   ```
3. Inicie o backend (o Strapi já usa `HOST=0.0.0.0` na porta `1337`):
   ```bash
   cd backend && npm run develop
   ```
4. Inicie o frontend expondo na rede local com `--host`:
   ```bash
   cd frontend && npm run dev -- --host
   ```
5. No navegador do celular (conectado ao mesmo Wi-Fi), acesse:
   `http://192.168.1.15:5173`

---

## 5. Comandos Úteis de Verificação e Build

```bash
# Verificar tipos TypeScript do frontend sem gerar arquivos
cd frontend && npm run typecheck

# Gerar build de produção do frontend (valida TS + gera frontend/dist)
cd frontend && npm run build

# Pré-visualizar o build de produção do frontend
cd frontend && npm run preview

# Gerar build de produção do backend (Strapi)
cd backend && npm run build

# Rodar o backend em modo produção
cd backend && npm run start
```
