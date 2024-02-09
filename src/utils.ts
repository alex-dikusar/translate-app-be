import * as csvToJson from 'convert-csv-to-json';

export const parseCsv = (filePath: string) =>
  csvToJson.fieldDelimiter(',').getJsonFromCsv(filePath);
