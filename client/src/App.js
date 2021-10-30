import './App.css';
import React from "react";
import ContactsView from './components/ContactsView';
import UpdateView from './components/UpdateView';
import DeleteView from './components/DeleteView';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ContactsView />
        </div>
        <div>
          Update contact below by keying id and filling fields you want to change
          <UpdateView />
        </div>
        <div>
          Delete contact below by entering its id
          <DeleteView />
        </div>
      </header>
    </div>
  );
}

export default App;
