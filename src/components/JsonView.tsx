import React from 'react';
import { componentTypes } from '~/componentsConfig';

interface JsonViewProps {
  jsonView: string;
}
const JsonView: React.FC<JsonViewProps> = ({ jsonView }) => {
  const components = JSON.parse(jsonView || '[{}]');

  const renderInput = (component: any, index: number) => (
    <input
      key={index}
      type={component.properties.data_type}
      className="border rounded p-2"
      placeholder={component.label}
      required={component.properties.required}
    />
  );

  const renderTextarea = (component: any, index: number) => (
    <textarea
      key={index}
      className="border rounded p-2"
      placeholder={component.label}
      required={component.properties.required}
    />
  );

  const renderFile = (component: any, index: number) => (
    <input
      key={index}
      type="file"
      className="border rounded p-2"
      required={component.properties.required}
    />
  );

  const renderImage = (component: any, index: number) => (
    <img
      key={index}
      src={'https://avatars.githubusercontent.com/u/37827216?v=4'}
      alt={component.alt}
      className="rounded mb-2"
    />
  );

  const renderDropdown = (component: any, index: number) => (
    <select key={index} className="border rounded p-2">
      {component.properties.choices.map(
        (choice: { value: string; label: string }, choiceIndex: number) => (
          <option key={choiceIndex} value={choice.value}>
            {choice.label}
          </option>
        )
      )}
    </select>
  );

  const renderHref = (component: any, index: number) => (
    <a
      key={index}
      href="#"
      className="border rounded p-2 block"
      dangerouslySetInnerHTML={{ __html: component.label }}
    />
  );

  // Add render functions for other component types here

  const renderComponent = (component: any, index: number) => {
    let renderedComponent = null;

    switch (component.type) {
      case 'input_item':
        renderedComponent = renderInput(component, index);
        break;
      case 'textarea_item':
        renderedComponent = renderTextarea(component, index);
        break;
      case 'file_item':
        renderedComponent = renderFile(component, index);
        break;
      case 'img_item':
        renderedComponent = renderImage(component, index);
        break;
      case 'is_show':
        renderedComponent = renderDropdown(component, index);
        break;
      case 'href':
        renderedComponent = renderHref(component, index);
        break;
      // Add cases for other component types here

      default:
        break;
    }

    return (
      <div key={index} className="border rounded p-4 mb-4">
        <p className="text-lg font-semibold mb-2">{componentTypes[component.type]}</p>
        {renderedComponent}
      </div>
    );
  };

  return (
    <div className="w-full md:w-1/2 p-8 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">JSON View</h1>
      <div className="w-full space-y-4">
        {components.map((component: any, index: number) =>
          renderComponent(component, index)
        )}
      </div>
    </div>
  );
};

export default JsonView;
