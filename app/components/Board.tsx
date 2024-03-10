'use client';
import { useBoardStore } from '@/store/boardStore';
import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
  }, [getBoard]);
  return (
    <h1>Hello appwrite</h1>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div>{/* render columns */}</div>}
    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;
