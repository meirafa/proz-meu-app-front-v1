import ibgeService from './ibgeService';

export const LocationDataService = {
  // Função assíncrona para buscar estados
  getStatesData: async () => {
    return await ibgeService.get('/localidades/estados?orderBy=nome');
  },
  // Função assíncrona para buscar cidades
  getCitiesData: async (uf) => {
    return await ibgeService.get(`/localidades/estados/${uf}/municipios?orderBy=nome`);
  },
  // Função assíncrona para buscar imagens dos estados
  getImageData: async (uf) => {
    return await ibgeService.getV3(`/malhas/estados/${uf}?formato=image/png&qualidade=maxima`);
  },
  // Função assíncrona para buscar informações específicas
  getInfoData: async (municipio) => {
    return await ibgeService.get(`/localidades/municipios/${municipio}`);
  },
};