import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  forSubmitHandler = newContact => {
    this.state.contacts.find(contact => contact.name === newContact.name)
      ? toast.error(`${newContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };

  deleteHandler = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.forSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteHandler} />
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: 'green',
              },
            },
            error: {
              style: {
                background: 'red',
                color: '#fff',
              },
            },
          }}
        />
      </div>
    );
  }
}

export default App;
