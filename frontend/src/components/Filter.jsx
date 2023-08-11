import React, { useState } from 'react';
import Select from 'react-select';

function CategoryFilter({ onChange, additionlaCategories, marginTop}) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const defaultCategories = [
    {value: '', label: 'All'},
    { value: 'ख़बरों की ख़बर', label: 'ख़बरों की ख़बर' },
    { value: 'मंथन', label: 'मंथन' },
    { value: 'खबरे', label: 'खबरे' },
    { value: 'साहित्य', label: 'साहित्य' },
    { value: 'संपदकी', label: 'संपदकी' },
    { value: 'पहाड़ रैबार', label: 'पहाड़ रैबार' },
    { value: 'विज्ञान और तकनीक', label: 'विज्ञान और तकनीक' },
    { value: 'स्वस्थ्य', label: 'स्वस्थ्य' },
    { value: 'शहरनामा', label: 'शहरनामा' },
    // { value: 'Headlines', label: 'Headlines' },
    // { value: 'Carousel', label: 'Carousel' },
    // Add more categories as needed
  ];

  const combinedCategories = [
    ...defaultCategories,
    ...additionlaCategories,
  ];

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    onChange(selectedOption);
  };

  return (
    <div style={{ marginTop: marginTop, width: 200 }}>
      <Select
        options={combinedCategories}
        value={selectedCategory}
        placeholder="Select a category"
        onChange={handleCategoryChange}
      />
    </div>
  );
}

export default CategoryFilter;
