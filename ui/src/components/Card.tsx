import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  id: string;
  content: string;
  index: number;
  onDelete: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ id, content, index, onDelete }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-4/5 max-w-sm p-4 mb-4 rounded flex justify-between items-center transition-colors duration-300 cursor-grab active:cursor-grabbing bg-lightCard dark:bg-darkCard shadow-md"
        >
          <div className="flex items-center w-full">
            <FontAwesomeIcon icon={faGripLines} className="text-gray-500 mr-2" />
            <span className="card-text text-darkText">{content}</span>
          </div>
          <button
            className="bg-transparent border-none cursor-pointer text-base p-1 text-deleteBtn"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
