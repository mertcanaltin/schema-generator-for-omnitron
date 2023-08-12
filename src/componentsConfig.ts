export interface ComponentProperties {
    required: boolean;
    data_type: string;
  }
  
  export interface ComponentDefinition {
    type: string;
    label: string;
    properties: ComponentProperties;
  }
  
  export const initialComponents: Record<string, ComponentDefinition> = {
    input_item: {
      type: "input_item",
      label: "Input",
      properties: {
        required: false,
        data_type: "text",
      },
    },
    textarea_item: {
      type: "textarea_item",
      label: "Textarea",
      properties: {
        required: false,
        data_type: "area",
      },
    },
    file_item: {
      type: "file_item",
      label: "File",
      properties: {
        required: false,
        data_type: "file",
      },
    },
    image_item: {
      type: "image_item",
      label: "Image",
      properties: {
        required: false,
        data_type: "image",
      },
    },
  };
  