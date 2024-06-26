import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import CardList from './CardList';

interface DragDropWrapperProps {
  items: Array<{ id: string; content: string }>;
  onDelete: (id: string) => void;
  onReorder: (result: DropResult) => void;
}

const DragDropWrapper: React.FC<DragDropWrapperProps> = ({ items, onDelete, onReorder }) => {
  return (
    <DragDropContext onDragEnd={onReorder}>
      <CardList items={items} onDelete={onDelete} />
    </DragDropContext>
  );
};

export default DragDropWrapper;
