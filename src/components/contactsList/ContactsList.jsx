import React from 'react'
import css from './ContactsList.module.css'

export function ContactsList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (<li key={contact.id}>
          <span>{contact.name }</span>:
          <span>{contact.number}</span>
          <button className={css.button} onClick={()=>{deleteContact(contact.id)}}>Delete</button>
        </li>)
      }
      )}
    </ul>
  )
}
