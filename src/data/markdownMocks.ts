export const bgp_ospf_content = `
# Laboratório de Roteamento Dinâmico: BGP e OSPF

## Objetivo
Implementar uma topologia de rede robusta e de alta disponibilidade em um ambiente simulado (GNS3), simulando a conexão de redes empresariais (OSPF) com a internet ou diferentes filiais (BGP).

## Ferramentas Utilizadas
- GNS3 (Graphical Network Simulator-3)
- Imagens Cisco IOS (c7200)
- Wireshark para análise de pacotes

## Topologia
A rede foi desenhada com um *Core* rodando OSPF (Área 0) para convergência rápida interna, enquanto as redes de borda conversam via eBGP.

![Topologia de Exemplo](/profile.png) <!-- Usando placeholder de imagem -->

## Configuração OSPF (Core Router)
Abaixo está um resumo da configuração OSPF para anunciar as redes internas:

\`\`\`bash
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
Router(config-router)# network 192.168.10.0 0.0.0.255 area 0
Router(config-router)# network 10.0.0.0 0.255.255.255 area 0
Router(config-router)# passive-interface default
Router(config-router)# no passive-interface GigabitEthernet0/0
\`\`\`

## Configuração BGP (Edge Router)
\`\`\`bash
Router(config)# router bgp 65000
Router(config-router)# neighbor 203.0.113.2 remote-as 65001
Router(config-router)# network 192.168.0.0 mask 255.255.0.0
Router(config-router)# exit
\`\`\`

## Resultados e Conclusão
- A vizinhança OSPF subiu instantaneamente ("FULL/BDR").
- As rotas externas do BGP foram corretamente redistribuídas.
- Failover testado desligando uma interface física, a rede convergiu em menos de 3 segundos graças ao ajustre dos *timers* do OSPF.
`;

export const linux_hardening_content = `
# Hardening de Servidor Linux

## Objetivo
Aplicar medidas de segurança defensiva em um servidor Debian, reduzindo a superfície de ataque para expor a máquina à internet de forma segura.

## Passos Realizados

1. **Desativação do login de Root via SSH**
   Editado o arquivo \`/etc/ssh/sshd_config\`:
   \`\`\`bash
   PermitRootLogin no
   PasswordAuthentication no # Apenas chaves SSH
   \`\`\`

2. **Configuração de Firewall (UFW/Iptables)**
   Apenas portas essenciais foram liberadas. Padrão \`DENY\` para entrada.
   \`\`\`bash
   sudo ufw default deny incoming
   sudo ufw default allow outgoing
   sudo ufw allow 22/tcp
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw enable
   \`\`\`

3. **Prevenção de Força Bruta (Fail2Ban)**
   Instalado e configurado o Fail2Ban para banir IPs com múltiplas falhas de login.

## Ferramentas
- Debian 12
- UFW / Iptables
- Fail2Ban
- Auditd
`;

export const laroo_beauty_care_content = `
Uma solução web completa e elegante desenvolvida sob medida para o espaço de beleza e bem-estar **Laroo Beauty Care**. O projeto foi desenhado para valorizar a marca, atrair novas clientes e facilitar o agendamento de serviços de beleza de alto padrão em Coimbra (unhas, pestanas, tratamentos faciais e bem-estar).

## 🔗 Link & Deploy do Projeto
- **Website Oficial:** [laroo-beauty-care.vercel.app](https://laroo-beauty-care.vercel.app/)
- **Hospedagem & Deploy:** Realizado na plataforma **Vercel** com integração contínua (CI/CD) automática a partir do repositório Git, garantindo carregamento instantâneo global e alta disponibilidade.

---

## 📸 Demonstração Visual

Abaixo você pode conferir como ficou o visual moderno, sofisticado e responsivo desenvolvido para o espaço:

### 💻 Versão Desktop
![Laroo Beauty Care - Desktop Showcase](/laroo-desktop.png?v=3)

### 📱 Versão Mobile Responsiva
![Laroo Beauty Care - Mobile Showcase](/laroo-mobile.png?v=3)

---

## 🚀 Sobre o Desenvolvimento
O site foi desenvolvido por mim sob medida, utilizando o **Antigravity** (assistente inteligente de desenvolvimento da Google Deepmind) como principal ferramenta de apoio à codificação, e contou com ciclos contínuos de validação de design, fluxo e conteúdo pela proprietária do espaço.

### Destaques do Processo:
1. **Desenvolvimento Inteligente:** Utilização do Antigravity como ferramenta avançada para aceleração de código, design de componentes reutilizáveis e refinamento técnico de performance e SEO.
2. **Validação Direta:** Cada seção de serviços, cartela de cores e fluxo de conversão passou pela revisão direta da proprietária para refletir fielmente a sofisticação do espaço.
3. **Refinamento e Usabilidade:** Validações rigorosas de responsividade em dispositivos móveis, acessibilidade de cores e tipografia de alto nível.

---

## 🛠️ Tecnologias e Ferramentas
- **React (TypeScript):** Componentização robusta e renderização ágil de interface.
- **Tailwind CSS:** Para um estilo refinado, responsivo e limpo baseado em tokens modernos.
- **Framer Motion:** Micro-animações suaves e transições elegantes que transmitem bem-estar e sofisticação.
- **Lucide Icons:** Conjunto de ícones vetoriais modernos.
- **Vercel:** Deploy contínuo e CDN global de alta velocidade para carregamento instantâneo.
- **Antigravity (Google Deepmind):** Utilizado como ferramenta de apoio e automação no desenvolvimento do código.
- **Google Analytics:** Integração de tracking para monitorização de tráfego, eventos de conversão e gestão de conformidade com RGPD (Banner de Cookies).

---

## 💎 Funcionalidades e Características Principais
* **Apresentação Premium de Serviços:** Vitrine visual elegante para tratamentos de unhas de gel, pestanas, cuidados faciais, massagens e bem-estar.
* **UX focada em Conversão:** Chamadas para ação (CTA) inteligentes direcionadas ao WhatsApp do espaço para facilitar e maximizar agendamentos rápidos.
* **Design Responsivo Premium:** Visual impecável em smartphones, tablets e desktops.
* **Carregamento Instantâneo:** Otimização de assets e imagens para máxima performance e velocidade de carregamento.
`;

export const dividi_app_content = `
Uma aplicação full-stack SaaS de controlo financeiro focada na gestão de gastos partilhados para casais. Com um design "Dark Premium" e foco na experiência de utilizador (UX), o Dividi transforma a tarefa de anotar e dividir contas em algo rápido, seguro e visualmente apelativo.

## 🔗 Links do Projeto
- **Aplicação Online:** [app-dividi.vercel.app](https://app-dividi.vercel.app/)

---

## 📸 Demonstração da Interface

Abaixo pode ver como o design responsivo de estilo *glassmorphism* se adapta em ecrãs de computador e telemóvel:

### 💻 Versão Desktop
![Dividi App - Desktop](/dividi-desktop.png)

### 📱 Versão Mobile Responsiva
![Dividi App - Mobile](/dividi-mobile.png)

---

## 🚀 Arquitetura e Desenvolvimento

Este projeto foi construído para simular um ambiente SaaS em produção, com foco em segurança de acessos, performance e partilha de dados em tempo real.

### Destaques do Processo:
1. **Segurança Avançada (RLS):** Implementação de Row Level Security (RLS) diretamente nas tabelas PostgreSQL do Supabase. Isto garante que cada utilizador apenas pode aceder e visualizar as faturas da sua própria "casa", isolando os registos de forma inviolável no lado do servidor.
2. **Processamento Complexo de Dados:** Integração de bibliotecas avançadas (PapaParse e SheetJS) para leitura, conversão e importação massiva de folhas de cálculo completas (Excel e CSV), desenhado para máxima velocidade no lado do cliente.
3. **Autenticação e Sessões:** Sistema robusto com validação segura de senha, confirmação de conta por e-mail e fluxos de recuperação de credenciais baseados em tokens.

---

## 🛠️ Stack Tecnológica
- **Next.js 16+ (App Router):** Framework React para uma navegação instantânea e SSR (Server-Side Rendering).
- **Supabase (PostgreSQL):** Backend as a Service oferecendo base de dados escalável, Autenticação e APIs em tempo real.
- **Tailwind CSS & Lucide:** Sistema de design minimalista, responsivo e baseado em variáveis.
- **Vercel:** Pipeline de Integração e Deploy Contínuo (CI/CD).

---

## 💎 Funcionalidades Principais
* **Dashboard Analítico Multi-Filtros:** Visão inteligente e resumida dos gastos mensais, semanais e diários, com cálculos automáticos de teto de gastos do casal.
* **Plataforma Multi-Moedas:** Capacidade de o casal alternar imediatamente a moeda dos seus painéis entre Euros (€), Dólares (US$) ou Reais (R$).
* **Importação Drag & Drop:** Migração rápida e à prova de falhas desde ferramentas externas como Google Sheets.
* **Isolamento e Privacidade Partilhada:** O modelo permite ao utilizador ter uma conta individual, mas visualizar e partilhar a mesma "Household" com outro parceiro(a).
`;
