/*
 * Arquivo de Configuração e Dados da Calculadora de CO2
 * Este arquivo pode ser usado para centralizar dados e configurações
 */

/**
 * FATORES DE EMISSÃO DE CO2
 * Valores em gramas de CO2 por quilômetro
 * Fonte: Estudos de Avaliação do Ciclo de Vida (LCA) e pesquisas de transporte
 */

export const CO2_EMISSIONS = {
    // Transporte Individual
    bicycle: {
        name: '🚴 Bicicleta',
        emission: 0,
        description: 'Zero emissão de CO2 - Perfeito para o meio ambiente!',
        efficiency: 'Excelente'
    },

    motorcycle: {
        name: '🏍️ Moto',
        emission: 89,
        description: 'Emissão baixa com alta eficiência de combustível',
        efficiency: 'Muito Boa'
    },

    car: {
        name: '🚗 Carro',
        emission: 192,
        description: 'Emissão média de um carro de passeio (gasolina)',
        efficiency: 'Razoável'
    },

    // Transporte Coletivo
    bus: {
        name: '🚌 Ônibus',
        emission: 89,
        description: 'Emissão baixa por passageiro (compartilhado)',
        efficiency: 'Boa'
    },

    // Transporte de Carga
    truck: {
        name: '🚚 Caminhão',
        emission: 300,
        description: 'Emissão elevada por quilômetro',
        efficiency: 'Ruim'
    }
};

/**
 * CONVERSÕES E EQUIVALENTES
 * Para ajudar a entender o impacto das emissões
 */

export const EQUIVALENTS = {
    // Uma árvore absorve em média 21.77 kg de CO2 por ano
    treeAbsorptionPerYear: 21.77,

    // Um carro médio emite 192 g de CO2 por km
    carEmissionPerKm: 192,

    // Um avião emite aproximadamente 90 g de CO2 por km por passageiro
    planeEmissionPerKm: 90,

    // Um voo de 1000 km emite aproximadamente 90 kg de CO2
    flightEmissionPer1000km: 90
};

/**
 * DICAS DE SUSTENTABILIDADE
 * Sugestões para reduzir a pegada de carbono
 */

export const SUSTAINABILITY_TIPS = [
    {
        category: 'Transporte',
        tips: [
            '🚴 Use bicicleta para distâncias até 5 km',
            '🚌 Prefira ônibus, metrô ou transporte compartilhado',
            '🚗 Se usar carro, faça caronas solidárias',
            '🛴 Use patinetes ou patins para trajetos curtos',
            '✈️ Evite voos desnecessários (1 voo = ~200 kg CO2)'
        ]
    },
    {
        category: 'Rotina Diária',
        tips: [
            '🏢 Teletrabalhe 2-3 dias por semana',
            '📞 Use videoconferências em vez de viagens',
            '📦 Combine compras em um único trajeto',
            '🕐 Saia 15 minutos antes para evitar pressa',
            '🏃 Caminhe para locais próximos'
        ]
    },
    {
        category: 'Planejamento',
        tips: [
            '🗺️ Combine múltiplos destinos em uma viagem',
            '📅 Agrupe reuniões na mesma semana',
            '🔄 Escolha rotas mais eficientes',
            '🚴 Alterne entre diferentes meios de transporte',
            '⏰ Use horários de menor trânsito'
        ]
    }
];

/**
 * IMPACTO AMBIENTAL
 * Informações sobre o impacto das emissões de CO2
 */

export const ENVIRONMENTAL_IMPACT = {
    annual_co2_per_capita_world: 4.5,  // toneladas
    annual_co2_per_capita_brazil: 2.3, // toneladas
    annual_co2_per_capita_developed: 10, // toneladas (média países desenvolvidos)

    facts: [
        'A concentração de CO2 na atmosfera atingiu 421 ppm em 2023 (recorde)',
        'Transporte responde por ~27% das emissões de gases estufa globais',
        'Carros pessoais produzem 41% das emissões do setor de transporte',
        'O transporte público reduz emissões em até 75% comparado ao carro',
        'Uma árvore absorve em média 21,77 kg de CO2 por ano'
    ]
};

/**
 * METAS DE SUSTENTABILIDADE (ODS - Objetivos de Desenvolvimento Sustentável)
 */

export const SUSTAINABILITY_GOALS = {
    // ODS 13: Ação Climática
    climate_action: {
        number: 13,
        title: 'Ação Climática',
        target: 'Limitar o aumento de temperatura global a 1,5°C',
        co2_reduction_needed: '50% até 2030'
    },

    // ODS 11: Cidades e Comunidades Sustentáveis
    sustainable_cities: {
        number: 11,
        title: 'Cidades e Comunidades Sustentáveis',
        target: 'Transporte seguro, sustentável e acessível'
    },

    // ODS 12: Consumo e Produção Responsáveis
    responsible_consumption: {
        number: 12,
        title: 'Consumo e Produção Responsáveis',
        target: 'Reduzir emissões de gases estufa'
    }
};

/**
 * COMPARAÇÕES VISUAIS
 * Equivalências para ajudar a entender o impacto
 */

export const VISUAL_COMPARISONS = {
    // Equivalentes em tempo de vida de árvores
    generateTreeEquivalent: (co2InKg) => {
        return Math.ceil(co2InKg / EQUIVALENTS.treeAbsorptionPerYear);
    },

    // Equivalentes em km de carro
    generateCarEquivalent: (co2InKg) => {
        return (co2InKg / (EQUIVALENTS.carEmissionPerKm / 1000)).toFixed(2);
    },

    // Equivalentes em voos
    generateFlightEquivalent: (co2InKg) => {
        return (co2InKg / (EQUIVALENTS.planeEmissionPerKm / 1000)).toFixed(2);
    },

    // Equivalentes em tempo de vida humana média
    generateDailyEmission: (totalCO2, frequencyDays) => {
        return (totalCO2 / frequencyDays).toFixed(3);
    }
};

/**
 * MENSAGENS DE IMPACTO
 * Frases motivacionais baseadas no resultado
 */

export const IMPACT_MESSAGES = {
    veryLow: {
        emoji: '🌱',
        message: 'Excelente! Sua emissão é muito baixa!',
        action: 'Continue escolhendo meios de transporte sustentáveis.'
    },
    low: {
        emoji: '💚',
        message: 'Bom! Você está contribuindo para um planeta mais limpo.',
        action: 'Considere usar bicicleta ou transporte público mais vezes.'
    },
    medium: {
        emoji: '💛',
        message: 'Sua emissão é moderada. Há espaço para melhora!',
        action: 'Tente usar caronas solidárias ou transporte coletivo.'
    },
    high: {
        emoji: '🔴',
        message: 'Sua emissão é alta. Considere alternativas!',
        action: 'Tente usar bicicleta, ônibus ou teletrabalhe quando possível.'
    },
    veryHigh: {
        emoji: '🚨',
        message: 'Sua emissão é muito alta. Ação urgente recomendada!',
        action: 'Considere mudar para um veículo mais eficiente ou usar transporte público.'
    }
};

/**
 * CONFIGURAÇÕES DA APLICAÇÃO
 */

export const APP_CONFIG = {
    name: 'EcoTrack',
    version: '1.0.0',
    description: 'Calculadora de Emissão de CO2',
    language: 'pt-BR',

    // Temas de cores
    colors: {
        primary: '#2ecc71',     // Verde eco-amigável
        secondary: '#3498db',   // Azul
        danger: '#e74c3c',      // Vermelho
        warning: '#f39c12',     // Laranja
        dark: '#2c3e50',        // Cinza escuro
        light: '#ecf0f1'        // Cinza claro
    },

    // Configurações de validação
    validation: {
        minDistance: 0.1,
        maxDistance: 10000,
        minFrequency: 1,
        maxFrequency: 365
    }
};

/**
 * DADOS DE TESTES (para desenvolvimento)
 */

export const TEST_DATA = {
    example1: {
        startAddress: 'Av. Paulista, 1000, São Paulo, SP',
        endAddress: 'Rua Oscar Freire, São Paulo, SP',
        distance: 2.5,
        vehicle: 'car',
        frequency: 22 // Dias úteis por mês
    },
    example2: {
        startAddress: 'Estação Central, Rio de Janeiro, RJ',
        endAddress: 'Copacabana, Rio de Janeiro, RJ',
        distance: 15,
        vehicle: 'bus',
        frequency: 30 // Diário durante o mês
    },
    example3: {
        startAddress: 'Centro, Belo Horizonte, MG',
        endAddress: 'Savassi, Belo Horizonte, MG',
        distance: 8,
        vehicle: 'bicycle',
        frequency: 10 // Duas vezes por semana
    }
};

/**
 * DOCUMENTAÇÃO DE REFERÊNCIAS
 * Fontes dos dados e estudos
 */

export const REFERENCES = [
    {
        title: 'Greenhouse Gas Emissions from U.S. Transportation',
        author: 'EPA (Environmental Protection Agency)',
        url: 'https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle'
    },
    {
        title: 'Carbon Footprint of Different Modes of Transport',
        author: 'European Environment Agency',
        url: 'https://www.eea.europa.eu/'
    },
    {
        title: 'Life Cycle Assessment of Transport',
        author: 'International Energy Agency (IEA)',
        url: 'https://www.iea.org/'
    },
    {
        title: 'How much carbon dioxide does it take to offset a tree?',
        author: 'Carbon Trust',
        url: 'https://www.carbontrust.com/'
    }
];

export default {
    CO2_EMISSIONS,
    EQUIVALENTS,
    SUSTAINABILITY_TIPS,
    ENVIRONMENTAL_IMPACT,
    SUSTAINABILITY_GOALS,
    VISUAL_COMPARISONS,
    IMPACT_MESSAGES,
    APP_CONFIG,
    TEST_DATA,
    REFERENCES
};

