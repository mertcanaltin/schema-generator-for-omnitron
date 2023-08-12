import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

interface Component {
  id: string;
  type: string;
}

export default function Home() {
  const [components, setComponents] = useState<Component[]>([]);
  const [jsonView, setJsonView] = useState<string>('');

  const handleComponentAdd = () => {
    const newComponent: Component = {
      id: new Date().getTime().toString(),
      type: 'your-default-type',
    };

    setComponents((prevComponents) => [...prevComponents, newComponent]);
    updateJsonView();
  };

  const updateJsonView = () => {
    setJsonView(JSON.stringify(components, null, 2));
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedComponents = Array.from(components);
    const [reorderedItem] = reorderedComponents.splice(result.source.index, 1);
    reorderedComponents.splice(result.destination.index, 0, reorderedItem);

    setComponents(reorderedComponents);
    updateJsonView();
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 border-r">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleComponentAdd}
        >
          Schema Component Added
        </button>
        <div className="mt-4">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable" direction="vertical">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {components.map((component, index) => (
                    <Draggable key={component.id} draggableId={component.id} index={index}>
                      {(provided) => (
                        <div
                          className="bg-gray-200 p-2 mb-2 rounded cursor-move"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {/* Render your component UI here */}
                          Type: {component.type}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <textarea
          className="w-full h-full border p-2"
          value={jsonView}
          readOnly
        />
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            navigator.clipboard.writeText(jsonView);
          }}
        >
          Copy JSON
        </button>
      </div>
    </div>
  );
}
