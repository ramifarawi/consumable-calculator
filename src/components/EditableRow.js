import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  console.log('in editable row')
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Liquid name"
          name="liquid_name"
          value={editFormData.liquid_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Vol Per Multiplier"
          name="vol_per_multiplier"
          value={editFormData.vol_per_multiplier}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Multiplier"
          name="multiplier"
          value={editFormData.multiplier}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <select name="single_or_multi" id="single_or_multi" onChange={handleEditFormChange}>
      <option value="" disabled selected>Single or Multi-Channel Pipette?</option>
      <option value="Single">Single</option>
      <option value="Multi">Multi</option>
      </select>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
