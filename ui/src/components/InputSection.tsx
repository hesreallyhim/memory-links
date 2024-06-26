import React, { useState } from 'react';

interface InputSectionProps {
  onAdd: (content: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a word or phrase"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
};

export default InputSection;
