const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const getAllContacts = async (contactsPath) => {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
};

const listContacts = async () => {
  const contactsAll = await getAllContacts(contactsPath);
  return contactsAll;
};

const getContactById = async (contactId) => {
  const contacts = await getAllContacts(contactsPath);
  const index = contacts.findIndex((item) => item.id === contactId);
  return contacts[index];
};

const removeContact = async (contactId) => {
  const contacts = await getAllContacts(contactsPath);
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return false;
  } else {
    const deletedContact = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return deletedContact;
  }
};

const addContact = async (body) => {
  const contacts = await getAllContacts(contactsPath);
  const newContact = {
    id: nanoid(),
    name: body.name.trim(),
    phone: body.phone.trim(),
    email: body.email.trim(),
  };
  contacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await getAllContacts(contactsPath);
  const index = contacts.findIndex((item) => item.id === contactId);

  if (index === -1) {
    return contacts[index];
  } else {
    contacts[index].name = body.name.trim();
    contacts[index].phone = body.phone.trim();
    contacts[index].email = body.email.trim();

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return contacts[index];
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
