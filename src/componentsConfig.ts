export const componentTypes = {
    input_item: "Input",
    textarea_item: "Textarea",
    file_item: "File",
    img_item: "Image",
    is_show: "Dropdown",
    href_item: "Href",
    span_title: "HtmlEditor",
    multi_input_item: "Multi Input",
    localizable_input_item: "Localizable Input",
  };
  
  interface Properties {
    required: boolean;
    data_type: string;
    choices?: { value: string; label: string }[];
    display?: string;
    multi?: boolean;
    is_localizable?: boolean;
    // Diğer özellikler buraya eklenebilir
  }
  
  interface ComponentType {
    type: string;
    label: string;
    properties: Properties;
  }
  
  export const initialComponents: Record<string, ComponentType> = {
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
      },
    },
    image_item: {
      type: "image_item",
      label: "Image",
      properties: {
        required: false,
      },
    },
    is_show: {
      type: "is_show",
      label: "Dropdown",
      properties: {
        required: false,
        choices: [
          {
            value: "show",
            label: "Gösterilsin",
          },
          {
            value: "hidden",
            label: "Gösterilmesin",
          },
        ],
        data_type: "dropdown",
      },
    },
    href_item: {
      type: "href_item",
      label: "Href",
      properties: {
        required: false,
        data_type: "text",
        display: "textarea",
      },
    },
    img_item: {
      type: "img_item",
      label: "Image",
      properties: {
        required: false,
      },
    },
    span_title: {
      type: "span_title",
      label: "HtmlEditor",
      properties: {
        required: false,
        data_type: "text",
        display: "html-editor",
      },
    },
    multi_input_item: {
      type: "multi_input_item",
      label: "Multi Input",
      properties: {
        required: false,
        data_type: "text",
        multi: true,
      },
    },
    localizable_input_item: {
      type: "localizable_input_item",
      label: "Localizable Input",
      properties: {
        required: false,
        data_type: "text",
        is_localizable: true,
      },
    },
  };
  