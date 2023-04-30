
// import { openDB } from './idb';

const initdb = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('jate', 1);

    request.onerror = (event) => {
      console.error('Failed to open database', event);
      reject(event);
    };

    request.onsuccess = (event) => {
      console.log('Database opened successfully');
      resolve(event.target.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }

      const objectStore = db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });

      console.log('jate database created');
    };
  });
};


export const putDb = async (content) => {
  const db = await initdb();
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.add({ content });
  await tx.complete;
  console.log('Data added to jate database:', content);
};

export const getDb = async () => {
  const db = await initdb();
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const data = await store.getAll();
  await tx.complete;
  console.log('Data retrieved from jate database:', data);
  return data;
};

initdb();
