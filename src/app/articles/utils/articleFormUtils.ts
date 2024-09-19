interface ArticleField {
    name: string;
    label: string;
    placeholder: string;
    isTextArea?: boolean;
}

export const articleFields: ArticleField[] = [
    { name: "title", label: "Title", placeholder: "Title" },
    { name: "category", label: "Category", placeholder: "Category" },
    {
        name: "content",
        label: "Content",
        placeholder: "Content",
        isTextArea: true,
    },
    { name: "author", label: "Author", placeholder: "Author" },
    { name: "image", label: "Image URL", placeholder: "Image URL" },
];
