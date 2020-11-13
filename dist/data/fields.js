export default [
    {
        id: 1,
        collection: 'projects',
        field: 'Title',
        widget: 'text-input',
        required: true,
        unique: false,
        options: {
            placeholder: 'Project title'
        }
    },
    {
        id: 2,
        collection: 'projects',
        field: 'Description',
        widget: 'markdown',
        required: false,
        unique: false,
        options: {
            toolbar: [
                'bold',
                'italic',
                'link'
            ],
            config: {
                something: false
            }
        }
    }
]
