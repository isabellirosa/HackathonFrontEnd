import { defineStore } from 'pinia'

export const useProdutosStore = defineStore('produtos', () => {

  const produtos = [
    {
      nome: 'Kit Energia Solar 1,14kWp 570W',
      imageUrl: 'placa',
      preco: 1000.0,
      material: ['Silício Monocristalino'],
      potencia: 500,
      marca: 'elgin',
      parcelas: 'em até 10x de R$ 100,00',
      qntdVendas: 1,
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',




        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      },
      id: 0
    },
    {
      nome: 'Painel Solar 450W',
      imageUrl: 'placa2',
      preco: 1000.0,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['Silício Policristalino'],
      potencia: 800,
      marca: 'elgin',
      qntdVendas: 2,
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',
        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      },
      id: 1
    },
    {
      nome: 'Cabo Solar 4mm 30M Preto',
      imageUrl: 'caboSolar',
      preco: 1000.0,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['Células de Silício Amorfo'],
      potencia: 400,
      marca: 'weg',
      qntdVendas: 3,
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',
        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      },
      id: 2
    },
    {
      nome: 'Kit Energia Solar 1,14kWp 570W',
      imageUrl: 'estruturaSolar',
      preco: 2000.0,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['alumínio'],
      potencia: 500,
      marca: 'weg',
      qntdVendas: 2,
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',
        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      },
      id: 3
    },
    {
      nome: 'Kit Energia Solar 1,14kWp 570W',
      imageUrl: 'placa3',
      preco: 2000.0,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['alumínio'],
      potencia: 400,
      marca: 'elgin',
      qntdVendas: 1,
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',
        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      },
      id: 4
    },
    {
      nome: 'Kit Energia Solar 1,14kWp 570W',
      imageUrl: 'placa',
      preco: 1000.0,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['alumínio'],
      potencia: 900,
      marca: 'weg',
      qntdVendas: 3,
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',
        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      },
      id: 5
    }
  ]

  function getProduct(id){
    return this.produtos.find(objeto => objeto.id === id)
  }
  return { produtos, getProduct }
})
