import { useState, useCallback } from 'react';

const useField = initialValue => {
  const [content, setContent] = useState(initialValue);

  const handleChange = useCallback(
    event => setContent(event.target.value),
    [setContent]);

  return {
    content,
    handleChange
  };
};

export default useField;
