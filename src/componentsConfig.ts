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
  
  export const initialComponents = {
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
  