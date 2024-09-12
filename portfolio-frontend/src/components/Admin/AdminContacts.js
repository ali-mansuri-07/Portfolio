import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminContacts.css';
import Sidebar from './Sidebar'; // Import the Sidebar component

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios.get('http://localhost:5000/api/contact/messages')
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contact messages:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/contact/${id}`)
      .then(() => {
        alert('Contact deleted successfully');
        fetchContacts(); // Refresh the table after deletion
      })
      .catch(error => console.error('Error deleting contact:', error));
  };

  return (
    <div className="admin-contact">
      <Sidebar /> {/* Include the Sidebar */}
      <div className="contact-list-container">
        <h2 className="center-heading">Contact Messages</h2>
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.subject}</td>
                <td>{new Date(contact.date).toLocaleDateString()}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(contact._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContacts;
