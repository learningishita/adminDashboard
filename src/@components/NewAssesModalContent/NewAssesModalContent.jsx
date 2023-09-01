import React, { useState } from "react";
import "./newAssesModalContent.scss";
import cut from "../../assets/images/cut.svg";
import close from "../../assets/images/close.svg";

const InputComponent = ({ title, placeholder, ...rest }) => {
  return (
    <div className="input-box">
      <label className="label-name">{title}</label>
      <input {...rest} className="input" type="text" placeholder={placeholder} />
    </div>
  );
};

const SelectInputComponent = ({ title, placeholder, ...rest }) => {
  return (
    <div className="input-box">
      <label className="label-name">{title}</label>
      <select {...rest} className="select-input">
        <option value="" disabled selected>
          {placeholder}
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

const SelectChips = () => {
  const [allChipData, setAllChipData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !allChipData.includes(inputValue) && inputValue !== '') {
      setAllChipData([...allChipData, inputValue]);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const removeChip = (valueToRemove) => {
    const newArray = allChipData.filter((item) => item !== valueToRemove);
    setAllChipData(newArray);
  };

  return (
    <>
      <div className="chip-container">
        {allChipData.map((val, idx) => {
          return (
            <div key={idx} className="chip">
              <p className="chip-text">{val}</p>
              <div className="chip-close" onClick={() => removeChip(val)}>
                <img style={{cursor:"pointer"}} src={close} alt="close" />
              </div>
            </div>
          );
        })}
      </div>
      <input
        style={{
          margin: "0px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
        }}
        className="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={"Type Here"}
      />
    </>
  );
};

export default function NewAssesModalContent(props) {
  const { closeModal, handleCardsData } = props;
  const [formData, setFormData] = useState({
    nameOfAsessment: '',
    durationOfAsessment: '',
    purpose: 'select', // Default value for select
    description: 'select' // Default value for select
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Form submitted:', formData);
    handleCardsData(formData);
    closeModal();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="modal-content-container">
      <div className="header-modal">
        <h1 className="modal-title">Create new assessment</h1>
        <div style={{cursor:"pointer"}} onClick={closeModal}>
          <img src={cut} alt="close" />
        </div>
      </div>
      <div className="modal-content">
        <InputComponent
          title={"Name of assessment"}
          placeholder={"Type Here"}
          id="nameOfAsessment"
          name="nameOfAsessment"
          value={formData.nameOfAsessment}
          onChange={handleInputChange}
        />

        <SelectInputComponent
          title={"Purpose of the test is"}
          placeholder={"Select"}
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleInputChange}
        />

        <SelectInputComponent title={"Description"} placeholder={"Select"} 
        id="description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        />
      </div>

      <div className="input-box">
        <label className="label-name">Skills</label>
        <SelectChips />
      </div>

      <InputComponent
        title={"Duration of assessment"}
        placeholder={"HH:MM:SS"}
        id="durationOfAsessment"
          name="durationOfAsessment"
          value={formData.durationOfAsessment}
          onChange={handleInputChange}
      />

      <div className="submit-action-container">
        <button type="submit" className="submit-action">Save</button>
      </div>
    </form>
  );
}
