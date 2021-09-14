import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow.js";
import EditableRow from "./components/EditableRow.js";
import  Find_labware from "./calculator";


const App = () => {
  const [contacts, setContacts] = useState(data);


  const [addFormData, setAddFormData] = useState({
    liquid_name: "",
    vol_per_multiplier: "",
    multiplier: "",
    single_or_multi: "",
  });

  const [editFormData, setEditFormData] = useState({
    liquid_name: "",
    vol_per_multiplier: "",
    multiplier: "",
    single_or_multi: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const liquidRecommendedLabware = {}
  contacts.forEach((contact) => {
    const castedContact = {
      ...contact,
      vol_per_multiplier: Number(contact.vol_per_multiplier),
      multiplier: Number(contact.multiplier),
      // vol: Number(multiplier*vol_per_multiplier)
    }
    liquidRecommendedLabware[contact.liquid_name] = Find_labware(contact)
    // liquidRecommendedLabware[contact] = total_volume(contact)
  })
  console.log(liquidRecommendedLabware)


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      liquid_name: addFormData.liquid_name,
      vol_per_multiplier: addFormData.vol_per_multiplier,
      multiplier: addFormData.multiplier,
      single_or_multi: addFormData.single_or_multi,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      liquid_name: editFormData.liquid_name,
      vol_per_multiplier: editFormData.vol_per_multiplier,
      multiplier: editFormData.multiplier,
      single_or_multi: editFormData.single_or_multi,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      liquid_name: contact.liquid_name,
      vol_per_multiplier: contact.vol_per_multiplier,
      multiplier: contact.multiplier,
      single_or_multi: contact.single_or_multi,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };


  return ( <div className="app-container">
  <form onSubmit={handleEditFormSubmit}>
    <table>
      <thead>
        <tr>
          <th>Liquid Name</th>
          <th>Volume (ul) per Multiplier </th>
          <th>Multiplier (# samples, # washes, etc.)</th>
          <th>Single or Multi-Channel</th>
        </tr>
      </thead>
      <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a Liquid</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="liquid_name"
            required="required"
            placeholder="Liquid"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="vol_per_multiplier"
            required="required"
            placeholder="Vol Per Multiplier (ul)"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="multiplier"
            required="required"
            placeholder="Multiplier"
            onChange={handleAddFormChange}
          />
          <select name="single_or_multi" id="single_or_multi" onChange={handleAddFormChange}>
          <option value="" disabled selected>Single or Multi-Channel Pipette?</option>
          <option value="Single">Single</option>
          <option value="Multi">Multi</option>
          </select>
          <button type="submit">Add</button>
        </form>

        {Object.entries(liquidRecommendedLabware).map(liquidInfo => {
          const liquidName = liquidInfo[0];
          const volumeText = liquidInfo[1];


        return <h3>
          <form>
            <table>
              <thead>
                <tr>
                  <th>{liquidName}</th>
                  <th>Recommended Labware</th>
                  <th>Total Volume</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <React.Fragment>
                    <td></td>
                    <td>{volumeText[0]}</td>
                    <td>{volumeText[1]}</td>
                    </React.Fragment>
                  </tr>
                  </tbody>
                </table>
              </form>
            </h3>
            })};
        </div>
      );
    };


export default App;
