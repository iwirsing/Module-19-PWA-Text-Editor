import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      //if db does not exist create one (like a table named jate)
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//  Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>{
  // try{
    //create connection to the jate database version 1
    console.log('PUT to the database: ',content);
    const jateDb = await openDB('jate', 1);

    //create a new transaction and the db and the data privilege/permission of read and write
    const jateTx=jateDb.transaction('jate','readwrite');

    //open the desired object store
    const jateStore = jateTx.objectStore('jate');

    // store and pass content ino the database
    // const request=jateStore.add({edit: content});
    const request=jateStore.put({id: 1, value: content});

    //confirm the request
    const result = await request;
    console.log(' text saved into the database', result);

  // } catch (error){
    // console.error('putDb not implemented: ', error);
  // };

} ;

//  Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // try{
    //create connection to the jate database version 1
    console.log('GET from database');
    const jateDb = await openDB('jate', 1);

    //create a new transaction and the db and the data privilege/permission of read only
    const jateTx=jateDb.transaction('jate','readonly');

    //open the desired object store
    const jateStore = jateTx.objectStore('jate');   

    //get all the data in the indexed DB
    const request=jateStore.get(1);

    //confirm the request
    const result = await request;
    
    //checks if there is data or not
    result
      ? console.log('data retrieved from the database',result.value)
      : console.log('data not found on the database');

    //return value
    return result?.value;

  // }catch (error){
    // console.error('getDb not implemented ', error);
  // };

};

initdb();
