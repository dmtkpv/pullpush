export default {

    _fields: [
        {
            id: 1,
            table: 'collections',
            name: 'id',
            widget: 'text',
            options: null
        },
        {
            id: 2,
            table: 'collections',
            name: 'single',
            widget: 'switch',
            options: null
        },
        {
            id: 3,
            table: 'collections',
            name: 'hidden',
            widget: 'switch',
            options: null
        },
        {
            id: 4,
            table: 'collections',
            name: 'fields',
            widget: 'm2m',
            options: {
                collection: 'fields',
                display: 'name'
            }
        }
    ]

}
