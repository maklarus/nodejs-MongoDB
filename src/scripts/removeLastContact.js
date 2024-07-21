import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);

    if (parsedData.length > 0) {
      parsedData.pop();
    }

    fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2));
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
