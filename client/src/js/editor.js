// Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    //gets content from local storage
    const localData = localStorage.getItem('content');

    // check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    //initiates CodeMirror open source for text editing
    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // When the editor is ready, set the value to whatever is stored in indexeddb.
    // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
    getDb().then((data) => {
      console.info('Loaded data from IndexedDB, injecting into editor');
      console.log('editor.js data: ',data);
      console.log('editor.js header: ', header);
      console.log('editor.js localData: ',localData);
      this.editor.setValue(data || localData || header);
      //manipulate data and see if it is empty maybe?
      // if (!isEmpty(data)){
      //   this.editor.setValue(data); 
      // }
      // else if (!isEmpty(localData)){
      //   this.editor.setValue(localData);
      // }
      // else{
      // this.editor.setValue(header);
      // }
    });
    //upon change on editor save it to localstorage if empty create the key in local storage and store current value
    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

    // Save the content of the editor when the editor itself loses focus
    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
      putDb(localStorage.getItem('content'));
    });
  }
}
