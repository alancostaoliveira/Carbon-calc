# 🌍 EcoTrack - Calculadora de Emissão de CO2

Uma calculadora web responsiva para medir a emissão de CO2 em viagens usando diferentes meios de transporte.

## 🎯 Características

✅ **Responsivo** - Funciona perfeitamente em dispositivos móveis, tablets e desktops
✅ **Múltiplos Veículos** - Bicicleta, Moto, Carro, Ônibus, Caminhão
✅ **Cálculo Preciso** - Baseado em fatores de emissão reais
✅ **Equivalentes Visuais** - Mostra quantas árvores seriam necessárias para compensar
✅ **Interface Intuitiva** - Design moderno e fácil de usar
✅ **Sem Dependências Externas** - Funciona com HTML, CSS e JavaScript puro

## 📊 Fatores de Emissão por Veículo

| Veículo | Emissão |
|---------|---------|
| 🚴 Bicicleta | 0 g CO2/km |
| 🏍️ Moto | 89 g CO2/km |
| 🚌 Ônibus | 89 g CO2/km |
| 🚗 Carro | 192 g CO2/km |
| 🚚 Caminhão | 300 g CO2/km |

## 🚀 Como Usar

1. **Clone ou baixe os arquivos** para sua máquina
2. **Abra `index.html`** em um navegador web
3. **Preencha os dados:**
   - Endereço inicial e final (ou distância em km)
   - Selecione o tipo de veículo
   - Escolha a frequência da viagem
4. **Clique em "Calcular Emissão"**
5. **Veja os resultados** com equivalentes visuais

## 📁 Estrutura de Arquivos

```
C:\Users\crist\IdeaProjects\Carbon-calc\
├── index.html      # Página principal (HTML)
├── style.css       # Estilos (CSS responsivo)
├── script.js       # Lógica da calculadora (JavaScript)
└── README.md       # Este arquivo
```

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo com Grid e Flexbox
- **JavaScript (Vanilla)** - Lógica da aplicação sem dependências

## 📱 Responsividade

### Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Extra Small**: Até 359px

Todos os elementos são otimizados para cada tamanho de tela.

## 🔧 Funcionalidades Principais

### Cálculo de Emissões

```
CO2 Total = (Distância × Fator Emissão × Frequência)
```

### Equivalentes Visuais

- **Árvores necessárias**: Calcula quantas árvores seriam necessárias para absorver o CO2
- **Equivalente em km de carro**: Compara com a emissão de um carro comum
- **Equivalente em voos**: Compara com a emissão de aviões

## 🎨 Design e UX

- Cores vibrantes e significativas (verde para eco-amigável)
- Ícones emoji para melhor identificação
- Feedback visual em interações (hover, click, focus)
- Animações suaves para melhor experiência
- Tipografia clara e legível

## 🌐 Integração com Google Maps (Opcional)

Para usar a funcionalidade de calcular distância automaticamente entre endereços:

1. Obtenha uma API key do Google Maps
2. Adicione ao `<head>` do HTML:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=SUA_API_KEY"></script>
```

## 📊 Dados de Emissão

Os dados utilizados são baseados em estudos científicos:

- Bicicleta: Zero emissão
- Motos: Altamente eficientes em combustível
- Carros: Emissão média de um carro de passeio
- Ônibus: Baixa emissão por passageiro (transporte compartilhado)
- Caminhões: Maior emissão devido ao peso e consumo de combustível

## 🌳 Dicas de Sustentabilidade

A aplicação fornece dicas práticas para reduzir emissões:

- ✅ Usar bicicleta para distâncias curtas
- ✅ Preferir ônibus ou transporte coletivo
- ✅ Caronas solidárias
- ✅ Teletrabalho
- ✅ Viagens combinadas

## 📄 Compatibilidade

- ✅ Chrome (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Edge (últimas versões)
- ✅ Navegadores móveis

## 🎯 Futuras Melhorias

- [ ] Integração com Google Maps API para calcular distância automaticamente
- [ ] Histórico de cálculos (usando LocalStorage)
- [ ] Gráficos de comparação
- [ ] Modo escuro
- [ ] Compartilhamento de resultados
- [ ] Suporte a mais idiomas
- [ ] Cálculo de emissões com tráfego real

## 📜 Licença

Este projeto é de código aberto e livre para usar, modificar e distribuir.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para fazer melhorias e enviar pull requests.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através do repositório do projeto.

---

**Desenvolvido com 💚 para um planeta mais sustentável**

### Começar Agora

Simplesmente abra o arquivo `index.html` em seu navegador web favorito e comece a calcular suas emissões de CO2!

```bash
# Se estiver em um servidor web
python -m http.server 8000
# Depois acesse http://localhost:8000
```

Ou, para máximo de compatibilidade com Python 2:

```bash
python -m SimpleHTTPServer 8000
```

