
// Reference for this design was taken from https://docs.dndkit.com/presets/sortable

import React, {useState} from 'react';

import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import {SortableItem} from './SortableItem';

import "./FileTabs.scss";

export const FileTabs = ({tabs}) => {
    const [items, setItems] = useState(tabs);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        >
        <SortableContext 
            items={items}
            strategy={horizontalListSortingStrategy}
        >
            <div className="tabs">
                {items.map(name => <SortableItem name={name} key={name} id={name} />)}
            </div>
        </SortableContext>
        </DndContext>
    );
  
    function handleDragEnd(event) {
        const {active, over} = event;
        
        if (active.id !== over.id) {
        setItems((items) => {
            const oldIndex = items.indexOf(active.id);
            const newIndex = items.indexOf(over.id);
            
            return arrayMove(items, oldIndex, newIndex);
        });
        }
    }
}