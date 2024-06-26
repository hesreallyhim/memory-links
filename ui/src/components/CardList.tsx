import React, { useEffect, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';

export interface CardListProps {
  items: Array<{ id: string; content: string }>;
  onDelete: (id: string) => void;
}

const CardList: React.FC<CardListProps> = ({ items, onDelete }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && (
    <Droppable droppableId="list">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="w-full max-w-md mx-auto"
        >
          {items.map((item, index) => (
            <Card
              key={item.id}
              id={item.id}
              content={item.content}
              index={index}
              onDelete={onDelete}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  ) || null;
};

export default CardList;
