interface ProductField {
    name: string;
    label: string;
    isTextArea?: boolean;
}

export const productFields: ProductField[] = [
    { name: "name", label: "Name" },
    { name: "image", label: "Image URL" },
    { name: "price", label: "Price" },
    { name: "description", label: "Description", isTextArea: true },
    { name: "material", label: "Material" },
];