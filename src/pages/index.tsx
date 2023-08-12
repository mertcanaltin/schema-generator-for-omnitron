import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { initialComponents } from '../componentsConfig';
import JsonView from '~/components/JsonView';

interface Component {
  id: string;
  type: string;
}

const Home: React.FC = () => {
  const [components, setComponents] = useState<Component[]>([]);
  const [jsonView, setJsonView] = useState<string>('');

  const handleComponentAdd = (type: string) => {
    const newComponent: Component = {
      id: new Date().getTime().toString(),
      type,
    };

    setComponents(prevComponents => [...prevComponents, newComponent]);
  };

  const handleComponentDelete = (index: number) => {
    const updatedComponents = components.filter((_, i) => i !== index);
    setComponents(updatedComponents);
  };

  const updateJsonView = () => {
    const componentData = components.map(component => ({
      ...initialComponents[component.type],
      type: component.type,
    }));
    setJsonView(JSON.stringify(componentData, null, 2));
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
  
    const reorderedComponents = Array.from(components);
    const reorderedItem = reorderedComponents.splice(result.source.index, 1)[0];
  
    if (reorderedItem) {
      reorderedComponents.splice(result.destination.index, 0, reorderedItem);
      setComponents(reorderedComponents);
    }
  };

  useEffect(() => {
    updateJsonView();
  }, [components]);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 p-8 border-r bg-white overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-4">Component Types</h1>
          <div className="flex flex-wrap gap-2">
            {Object.keys(initialComponents).map(type => (
              <button
                key={type}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleComponentAdd(type)}
              >
                Add {initialComponents[type]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable" direction="vertical">
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {components.map((component, index) => (
                    <Draggable key={component.id} draggableId={component.id} index={index}>
                      {(draggableProvided) => (
                        <div
                          className="bg-gray-200 p-2 mb-2 rounded cursor-move"
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                        >
                          <div className="flex items-center justify-between">
                            
                            <p className="text-sm font-medium ml-2">
                              {initialComponents[component.type]}
                            </p>
                            <button
                              className="text-red-500 hover:text-red-700"
                              onClick={() => handleComponentDelete(index)}
                            >
                              &#10006;
                            </button>
                          </div>
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
      <div className="w-1/2 p-8 bg-gray-200 overflow-y-auto"> 
        <h1 className="text-2xl font-semibold mb-4">JSON Preview</h1>
        <textarea
          className="w-full h-full bg-white border p-2 rounded"
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
      <JsonView jsonView={jsonView} />
    </div>
  );
};

export default Home;
