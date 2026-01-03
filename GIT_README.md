# 🌍 EcoTrack - Calculadora de Emissão de CO2

Uma aplicação web responsiva e moderna para calcular e entender o impacto ambiental de suas escolhas de transporte.

## 🎯 Objetivo

Ajudar usuários a:
- **Calcular** a emissão de CO2 em viagens
- **Comparar** diferentes meios de transporte
- **Entender** o impacto ambiental
- **Fazer** escolhas mais sustentáveis

## ✨ Funcionalidades

### 🚗 Veículos Suportados
- 🚴 **Bicicleta** - 0 g CO2/km (Zero emissão!)
- 🏍️ **Moto** - 89 g CO2/km
- 🚌 **Ônibus** - 89 g CO2/km
- 🚗 **Carro** - 192 g CO2/km
- 🚚 **Caminhão** - 300 g CO2/km

### 📊 Resultados
- Emissão total de CO2 em kg
- Emissão por viagem e por km
- Equivalências visuais:
  - 🌳 Árvores necessárias para compensar
  - 🚗 Equivalência em km de carro
  - ✈️ Equivalência em km de voo

### 📱 Responsividade
- ✅ Mobile (até 480px)
- ✅ Tablet (480-768px)
- ✅ Laptop (768-1200px)
- ✅ Desktop (1200px+)

### 🔒 Segurança e Performance
- ✅ Funciona offline (sem dependências externas)
- ✅ Carrega em < 1 segundo
- ✅ Sem envio de dados para servidores
- ✅ HTML, CSS e JavaScript puro

## 🚀 Como Começar

### Opção 1: Abrir Diretamente
```bash
# Duplo clique em:
index.html
```

### Opção 2: Servidor Local
```bash
cd C:\Users\crist\IdeaProjects\Carbon-calc
python -m http.server 8000
# Acesse: http://localhost:8000
```

## 📁 Estrutura do Projeto

```
Carbon-calc/
├── index.html                  # Página principal
├── style.css                   # Estilos responsivos
├── script.js                   # Lógica de cálculo
├── data.js                     # Dados e configurações
│
├── README.md                   # Documentação técnica
├── PROJECT_SUMMARY.md          # Resumo do projeto
├── LEIA-ME.txt                 # Instruções simples
│
├── START.html                  # Página de boas-vindas
├── INDEX.html                  # Índice de recursos
├── QUICKSTART.html             # Guia interativo
├── CHECKLIST.html              # Checklist visual
├── CONCLUIDO.html              # Resumo visual
│
├── TESTS.html                  # 14 testes automáticos
├── GOOGLE_MAPS_SETUP.html      # Integração Google Maps
│
└── .gitignore                  # Arquivos ignorados pelo Git
```

## 💻 Tecnologias

- **HTML5** - Semântica e estrutura
- **CSS3** - Grid, Flexbox, Media Queries
- **JavaScript Vanilla** - Sem frameworks
- **Google Maps API** (opcional) - Para calcular distâncias

## 🧪 Testes

Execute os testes automáticos:

```bash
# Abra TESTS.html no navegador
# Clique em "Executar Todos os 14 Testes"
```

## 📊 Exemplo de Uso

**Cenário:** Trajeto casa → trabalho de carro

1. Preencha:
   - Endereço inicial: Sua casa
   - Endereço final: Seu trabalho
   - Distância: 10 km
   - Veículo: Carro
   - Frequência: 20 vezes por mês

2. Resultado:
   - Emissão: 38,4 kg CO2/mês
   - Árvores: 2 para compensar
   - Equivalente: 200 km de carro

## 🌍 Impacto Ambiental

Dicas para reduzir sua pegada de carbono:

- 🚴 Use bicicleta para trajetos curtos (até 5 km)
- 🚌 Prefira ônibus ou transporte coletivo
- 🚗 Compartilhe carro com colegas
- 🏢 Trabalhe de home office
- 📦 Combine compras em um trajeto

## 📚 Documentação

- **README.md** - Documentação técnica completa
- **PROJECT_SUMMARY.md** - Estrutura detalhada
- **LEIA-ME.txt** - Instruções simples
- **COMECE_AQUI.txt** - Guia rápido
- **GOOGLE_MAPS_SETUP.html** - Integração Google Maps

## 🔧 Customização

### Mudar Cores
Edite `style.css`:
```css
:root {
    --primary-color: #2ecc71;  /* Mude a cor aqui */
}
```

### Adicionar Novo Veículo
Edite `script.js` e `data.js`:
```javascript
const CO2_FACTORS = {
    electricCar: 50,  // Novo veículo
};
```

## 📱 Compatibilidade

| Navegador | Versão | Status |
|-----------|--------|--------|
| Chrome    | 90+    | ✅     |
| Firefox   | 88+    | ✅     |
| Safari    | 14+    | ✅     |
| Edge      | 90+    | ✅     |

| Sistema | Status |
|---------|--------|
| Windows | ✅     |
| macOS   | ✅     |
| Linux   | ✅     |
| Android | ✅     |
| iOS     | ✅     |

## 📊 Dados e Referências

Os fatores de emissão são baseados em:
- EPA (Environmental Protection Agency)
- European Environment Agency
- International Energy Agency (IEA)
- Carbon Trust

## 📈 Estatísticas

| Métrica | Valor |
|---------|-------|
| Arquivos | 20+ |
| Linhas de código | ~2000 |
| Tamanho total | ~50 KB |
| Tempo de carregamento | < 1s |
| Testes automáticos | 14 |
| Compatibilidade | 95%+ |

## 🎯 Próximas Melhorias

- [ ] Histórico de cálculos (LocalStorage)
- [ ] Gráficos comparativos
- [ ] Modo escuro
- [ ] PWA (Progressive Web App)
- [ ] Integração com banco de dados
- [ ] API REST backend
- [ ] Autenticação de usuários
- [ ] Mais idiomas

## 📄 Licença

Este projeto é de código aberto e livre para uso, modificação e distribuição.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Fazer pull requests
- Melhorar documentação

## 👨‍💻 Autor

Desenvolvido com 💚 para um planeta mais sustentável.

## 📞 Contato e Suporte

Para dúvidas ou sugestões:
1. Abra uma issue no repositório
2. Verifique a documentação
3. Execute os testes

## 🌍 Ajudando o Planeta

Cada cálculo que você faz ajuda a:
- ✓ Conscientizar sobre emissões de CO2
- ✓ Incentivar escolhas sustentáveis
- ✓ Contribuir para um planeta melhor
- ✓ Inspirar outras pessoas

---

**Versão:** 1.0.0  
**Data:** 2 de Janeiro de 2026  
**Status:** ✅ Pronto para Produção

🚀 **Comece agora abrindo `index.html`!**

