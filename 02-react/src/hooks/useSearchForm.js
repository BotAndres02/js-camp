import { useState } from "react";

let timeoutId = 0;

export function useSearchForm({
  idText,
  idTechnology,
  idLocation,
  idExperience,
  onSearch,
  onChangeText,
  onReset,
}) {
  const [searchText, setSearchText] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (e.target.name === idText) {
      return;
    }

    const filters = {
      search: formData.get(idText),
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experience: formData.get(idExperience),
    };

    onSearch(filters);
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      onChangeText(text);
    }, 500);
  };

  const handleReset = () => {
    document.querySelector(".search-form").reset();
    onReset();
  };

  return {
    searchText,
    focusedField,
    setFocusedField,
    handleSubmit,
    handleReset,
    handleTextChange,
  };
}
