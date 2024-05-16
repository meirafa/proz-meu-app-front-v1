import ibgeService from './ibgeService';

export const NameRankingService = {
  // Função assíncrona para buscar nomes
  getBasicaData: async (nome) => {
    return await ibgeService.get(`censos/nomes/basica?nome=${nome}`);
  },

  // Função assíncrona para buscar informações específicas
  getFaixaData: async (nome) => {
    return await ibgeService.get(`censos/nomes/faixa?nome=${nome}`);
  },

  // Função assíncrona para buscar ranking de nomes
  getRankingData: async () => {
    return await ibgeService.get('censos/nomes/ranking?qtd=20');
  },
};
