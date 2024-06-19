import React, { useState } from 'react';

interface AddLinkFormProps {
  onAddLink: (url: string, label: string) => void;
}

const AddLinkForm: React.FC<AddLinkFormProps> = ({ onAddLink }) => {
  const [url, setUrl] = useState('');
  const [label, setLabel] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddLink(url, label);
    setUrl('');
    setLabel('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-link-form">
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <button type="submit">Adicionar Link</button>
    </form>
  );
};

export default AddLinkForm;
