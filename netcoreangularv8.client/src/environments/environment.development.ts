export const SERVER = 'https://localhost:7282',

environment = {
  production: true,
  api: {
    host: SERVER,
    basePath: 'api',
    parameters: {
      where: '&where=',
      orderBy: '&orderBy='
    },
    resources: {
      getTable: 'repository/model/getTable.php?table=',
      postExecuteSQLQuery: 'repository/model/postExecuteSQLQuery.php',
      postUploadFile: 'repository/model/postUploadFile.php'
    }
  },
  app: {
    name: 'Empresa v1'
  },
  defaultValues: {
    countryId: 58,
    topicId: 8,
    languageId: 2,
    formatId: 3,
    sourceId: 1
  },
  export: {
    telegram: {
      bold: '**',
      cursive: '__',
      strike: '~'
    },
    whatsapp: {
      bold: '*',
      cursive: '_',
      strike: ''
    }
  },
  host: SERVER,
  resources: {
    photos: 'resources/images'
  }
};
