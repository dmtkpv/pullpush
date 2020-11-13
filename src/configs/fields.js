// ------------------
// Fields
// ------------------

const fields = [

    {
        id: 'fields/id',
        table: 'fields',
        key: 'id',
        widget: 'identifier',
        default: null,
        required: true,
        unique: true,
        options: {}
    },
    {
        id: 'fields/table',
        table: 'fields',
        key: 'table',
        widget: 'string',
        default: null,
        required: true,
        unique: false,
        options: {
            disabled: true
        }
    },
    {
        id: 'fields/key',
        table: 'fields',
        key: 'key',
        widget: 'string',
        default: null,
        required: true,
        unique: false,
        options: {}
    },
    {
        id: 'fields/widget',
        table: 'fields',
        key: 'widget',
        widget: 'm2o',
        default: null,
        required: true,
        unique: false,
        options: {
            table: 'widgets',
            display: '{{ name }}'
        }
    },
    {
        id: 'fields/default',
        table: 'fields',
        key: 'default',
        widget: 'string',
        default: null,
        required: false,
        unique: false,
        options: {}
    },
    {
        id: 'fields/required',
        table: 'fields',
        key: 'required',
        widget: 'checkbox',
        default: null,
        required: false,
        unique: false,
        options: {}
    },
    {
        id: 'fields/unique',
        table: 'fields',
        key: 'unique',
        widget: 'checkbox',
        default: null,
        required: false,
        unique: false,
        options: {}
    },
    {
        id: 'fields/options',
        table: 'fields',
        key: 'options',
        widget: 'hidden',
        default: {},
        required: false,
        unique: false,
        options: {}
    }

]



// ------------------
// Collections
// ------------------

const collections = [
    {
        id: 'collections/id',
        table: 'collections',
        key: 'id',
        widget: 'identifier',
        default: null,
        unique: true,
        options: {}
    },
    {
        id: 'collections/name',
        table: 'collections',
        key: 'name',
        widget: 'string',
        default: null,
        unique: true,
        options: {}
    },
    {
        id: 'collections/single',
        table: 'collections',
        key: 'single',
        widget: 'checkbox',
        default: null,
        unique: false,
        options: {}
    },
    {
        id: 'collections/hidden',
        table: 'collections',
        key: 'hidden',
        widget: 'checkbox',
        default: null,
        unique: false,
        options: {}
    }
]



// ------------------
// Exports
// ------------------

export default [
    ...fields,
    ...collections
]
