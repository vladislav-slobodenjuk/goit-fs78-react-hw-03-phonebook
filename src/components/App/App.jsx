import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const STORAGE_KEY = 'contacts';

const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Vladislav Sl', number: '333-55-44' },
];

// localStorage.setItem(STORAGE_KEY, JSON.stringify(initContacts));

export class App extends Component {
  state = {
    contacts: initContacts,
    filter: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts } = this.state;

    const name = e.target.name.value.trim();
    const number = e.target.number.value.trim();

    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) return alert(`${name} is already in contacts.`);

    this.setState({
      contacts: [...contacts, { name, number, id: nanoid() }],
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedContacts) this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          // onInputChange={this.handleInputChange}
          onHandleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter filterValue={filter} onFilterChange={this.handleInputChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteClick={this.handleDelete}
        />
      </Container>
    );
  }
}
