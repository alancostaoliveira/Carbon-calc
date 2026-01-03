// Fatores de emissão de CO2 por veículo (em gramas por km)
const CO2_FACTORS = {
    bicycle: 0,      // Bicicleta: 0 g CO2/km
    motorcycle: 89,  // Moto: 89 g CO2/km
    car: 192,        // Carro: 192 g CO2/km
    bus: 89,         // Ônibus: 89 g CO2/km
    truck: 300       // Caminhão: 300 g CO2/km
};

// Nomes dos veículos em português
const VEHICLE_NAMES = {
    bicycle: '🚴 Bicicleta',
    motorcycle: '🏍️ Moto',
    car: '🚗 Carro',
    bus: '🚌 Ônibus',
    truck: '🚚 Caminhão'
};

// Nomes das frequências
const FREQUENCY_NAMES = {
    1: 'Única vez',
    7: 'Semanal',
    30: 'Mensal',
    365: 'Anual'
};

// Elementos do DOM
const form = document.getElementById('co2Form');
const startAddressInput = document.getElementById('startAddress');
const endAddressInput = document.getElementById('endAddress');
const distanceInput = document.getElementById('distance');
const vehicleRadios = document.querySelectorAll('input[name="vehicle"]');
const frequencySelect = document.getElementById('frequency');
const resultSection = document.getElementById('resultSection');

// Event listeners
form.addEventListener('submit', handleFormSubmit);
distanceInput.addEventListener('input', calculateDistance);

/**
 * Manipula o envio do formulário
 */
function handleFormSubmit(e) {
    e.preventDefault();

    // Validação
    if (!distanceInput.value) {
        alert('Por favor, informe a distância em km');
        return;
    }

    const selectedVehicle = Array.from(vehicleRadios).find(radio => radio.checked);
    if (!selectedVehicle) {
        alert('Por favor, selecione um tipo de veículo');
        return;
    }

    // Calcula as emissões
    const distance = parseFloat(distanceInput.value);
    const vehicle = selectedVehicle.value;
    const frequency = parseInt(frequencySelect.value);

    calculateCO2Emission(distance, vehicle, frequency);
}

/**
 * Calcula a emissão de CO2
 */
function calculateCO2Emission(distance, vehicle, frequency) {
    // Fatores de emissão
    const co2PerKm = CO2_FACTORS[vehicle]; // em gramas

    // Cálculos
    const co2PerTrip = (distance * co2PerKm) / 1000; // converte para kg
    const totalCO2 = co2PerTrip * frequency;

    // Calcula equivalentes
    const treesNeeded = Math.ceil(totalCO2 / 21.77); // uma árvore absorve ~21.77 kg CO2/ano
    const carEquivalent = Math.round(totalCO2 / (192 / 1000) * 100) / 100; // em km de carro
    const flightEquivalent = Math.round(totalCO2 / (90 / 1000) * 100) / 100; // em km de avião

    // Atualiza a seção de resultados
    updateResultsDisplay(distance, vehicle, frequency, co2PerTrip, totalCO2, co2PerKm, treesNeeded, carEquivalent, flightEquivalent);

    // Mostra a seção de resultados
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Atualiza a exibição dos resultados
 */
function updateResultsDisplay(distance, vehicle, frequency, co2PerTrip, totalCO2, co2PerKm, treesNeeded, carEquivalent, flightEquivalent) {
    // Informações básicas
    document.getElementById('resultDistance').textContent = `${distance.toFixed(2)} km`;
    document.getElementById('resultVehicle').textContent = VEHICLE_NAMES[vehicle];
    document.getElementById('resultFrequency').textContent = FREQUENCY_NAMES[frequency];

    // Emissão total
    document.getElementById('totalCO2').textContent = totalCO2.toFixed(2);

    // Detalhes
    document.getElementById('perTripCO2').textContent = `${co2PerTrip.toFixed(2)} kg`;
    document.getElementById('perKmCO2').textContent = `${co2PerKm} g`;

    // Equivalentes
    document.getElementById('treesNeeded').textContent = treesNeeded;
    document.getElementById('carEquivalent').textContent = carEquivalent.toFixed(2);
    document.getElementById('flightEquivalent').textContent = flightEquivalent.toFixed(2);
}

/**
 * Calcula a distância entre dois endereços usando a Google Maps API
 * Nota: Requer API key válida do Google Maps
 */
function calculateDistance() {
    const startAddress = startAddressInput.value.trim();
    const endAddress = endAddressInput.value.trim();

    // Se ambos os endereços estão preenchidos e temos acesso à API
    if (startAddress && endAddress && window.google && window.google.maps) {
        const service = new google.maps.DistanceMatrixService();

        service.getDistanceMatrix(
            {
                origins: [startAddress],
                destinations: [endAddress],
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.METRIC,
                language: 'pt-BR'
            },
            function(response, status) {
                if (status === 'OK') {
                    const results = response.rows[0].elements[0];

                    if (results.status === 'OK') {
                        // Converte metros para km
                        const distanceKm = results.distance.value / 1000;
                        distanceInput.value = distanceKm.toFixed(2);

                        // Feedback visual
                        distanceInput.style.borderColor = '#2ecc71';
                        setTimeout(() => {
                            distanceInput.style.borderColor = '';
                        }, 2000);
                    }
                }
            }
        );
    }
}

/**
 * Função para preencher o formulário com dados de exemplo (para testes)
 */
function fillExampleData() {
    startAddressInput.value = 'Av. Paulista, São Paulo, SP';
    endAddressInput.value = 'Av. Brigadeiro Faria Lima, São Paulo, SP';
    distanceInput.value = '15.5';
    document.getElementById('car').checked = true;
    frequencySelect.value = '30';
}

/**
 * Formata número para formato de moeda/unidade
 */
function formatNumber(num, decimals = 2) {
    return num.toFixed(decimals).replace('.', ',');
}

/**
 * Imprime os resultados
 */
function printResults() {
    window.print();
}

/**
 * Exporta os resultados como JSON
 */
function exportResults() {
    const distance = distanceInput.value;
    const selectedVehicle = Array.from(vehicleRadios).find(radio => radio.checked);
    const frequency = frequencySelect.value;

    if (!distance || !selectedVehicle) {
        alert('Por favor, preencha o formulário antes de exportar');
        return;
    }

    const results = {
        startAddress: startAddressInput.value,
        endAddress: endAddressInput.value,
        distance: parseFloat(distance),
        vehicle: selectedVehicle.value,
        frequency: parseInt(frequency),
        totalCO2: document.getElementById('totalCO2').textContent,
        perTripCO2: document.getElementById('perTripCO2').textContent,
        perKmCO2: document.getElementById('perKmCO2').textContent,
        treesNeeded: document.getElementById('treesNeeded').textContent,
        timestamp: new Date().toLocaleString('pt-BR')
    };

    // Cria um blob e faz download
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json;charset=utf-8' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(dataBlob);

    link.setAttribute('href', url);
    link.setAttribute('download', `co2-calc-${Date.now()}.json`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Calcula a "pegada de carbono" diária baseada na frequência selecionada
 */
function calculateDailyFootprint() {
    const distance = parseFloat(distanceInput.value);
    const selectedVehicle = Array.from(vehicleRadios).find(radio => radio.checked);
    const frequency = parseInt(frequencySelect.value);

    if (!distance || !selectedVehicle) {
        return 0;
    }

    const co2PerKm = CO2_FACTORS[selectedVehicle.value];
    const co2PerTrip = (distance * co2PerKm) / 1000;
    const dailyCO2 = (co2PerTrip * frequency) / 365;

    return dailyCO2;
}

/**
 * Inicialização
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculadora de CO2 carregada com sucesso');

    // Você pode chamar fillExampleData() aqui para pré-preencher com dados de exemplo
    // fillExampleData();

    // Adiciona suporte para tecla Enter no formulário
    form.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    });
});

// Função auxiliar para atualizar live preview (opcional)
function livePreview() {
    const distance = distanceInput.value;
    const selectedVehicle = Array.from(vehicleRadios).find(radio => radio.checked);
    const frequency = frequencySelect.value;

    if (distance && selectedVehicle) {
        const co2PerKm = CO2_FACTORS[selectedVehicle.value];
        const co2PerTrip = (distance * co2PerKm) / 1000;
        const totalCO2 = co2PerTrip * frequency;

        console.log(`Preview: ${totalCO2.toFixed(2)} kg CO2`);
    }
}

// Listener para live preview (opcional - descomente para ativar)
// distanceInput.addEventListener('input', livePreview);
// vehicleRadios.forEach(radio => radio.addEventListener('change', livePreview));
// frequencySelect.addEventListener('change', livePreview);

