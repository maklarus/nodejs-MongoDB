import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);

    const contact = createFakeContact();
    parsedData.push(contact);
    fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2));
    console.log('contact successful added');
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
