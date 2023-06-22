'use client'
import React, { useEffect } from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const Board = () => {
  return (
    <DragDropContext>
      <Droppable droppableId='board' direction='horizontal' type='column'>
        {(provided) =>

          <div>

          </div>}
      </Droppable>
    </DragDropContext>
  )
}
export default Board