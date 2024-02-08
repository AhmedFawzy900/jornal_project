import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchableDropdown = ({ options }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  return (
    <Form>
      <Form.Select onChange={handleSearch}>
        {filteredOptions.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </Form.Select>
    </Form>
  );
};

export default SearchableDropdown;
