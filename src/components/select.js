import React, { useState } from "react";
import {
  Select,
  Button,
  FormControl,
  FormLabel,
  Box,
  Text,
} from "@chakra-ui/react";

const MyForm2 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedOption) {
      setError("Please select an option");
    } else {
      // Proceed with form submission
      console.log("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Choose an option</FormLabel>
        <Select
          placeholder="Select an option"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="option1">Travel Trailers</option>
          <option value="option2">Class A Motorhomes</option>
          <option value="option3">Class B Motorhomes</option>
          <option value="option4">Class C Motorhomes</option>
          <option value="option5">Fifth-Wheels</option>
          <option value="option6">Toy Haulers</option>
          <option value="option7">Other RV's</option>
        </Select>
        {error && <Text color="red">{error}</Text>}
      </FormControl>

      <Box mt={4}>
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
};

export default MyForm2;
