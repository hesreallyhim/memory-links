import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DropResult } from 'react-beautiful-dnd';
import Header from '../components/Header';
import InputSection from '../components/InputSection';
import DragDropWrapper from '../components/DragDropWrapper';
import GeneratedLinks from '../components/GeneratedLinks';

const Home: React.FC = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), content: 'Example item' },
  ]);
  const [links, setLinks] = useState<string[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const addItem = (content: string) => {
    setItems([...items, { id: uuidv4(), content }]);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const reorderItems = (result: DropResult) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  const generateLinks = () => {
    const newLinks = items.map(item => `Mnemonic for "${item.content}": ${item.content.split('').reverse().join('')}`);
    setLinks(newLinks);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen flex flex-col items-center font-sans transition-colors duration-300 ${theme === 'light' ? 'bg-lightBg text-darkBg' : 'bg-darkBg text-lightBg'}`}>
      <Header />
      <main className="w-full max-w-2xl mx-auto my-8 px-4">
        <InputSection onAdd={addItem} />
        <DragDropWrapper items={items} onDelete={deleteItem} onReorder={reorderItems} />
        <button className="block mx-auto mb-8 px-4 py-2 rounded bg-accent text-darkBg" onClick={generateLinks}>Generate my links</button>
        <GeneratedLinks links={links} />
      </main>
      <button className="fixed bottom-4 right-4 px-4 py-2 rounded bg-accent text-darkBg" onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
