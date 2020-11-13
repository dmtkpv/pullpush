// ------------------
// Collections
// ------------------

const collections = [
    {
        name: 'projects',
        hidden: false,
        single: false
    },
    {
        name: 'about',
        hidden: false,
        single: true
    }
]



// ------------------
// Projects
// ------------------

const projects = [
    {
        id: 1,
        title: 'First',
        notes: 'My first project'
    },
    {
        id: 2,
        title: 'Second',
        notes: 'My second project'
    }
]



// ------------------
// Fields
// ------------------

const fields = [


    // fields

    {
        table: 'fields',
        field: 'table',
        widget: 'hidden',
        default: null,
        unique: true,
        options: {

        }
    },


    // projects

    {
        id: 'projects/id',
        table: 'projects',
        field: 'id',
        widget: 'identifier',
        default: null,
        unique: true,
        options: {}
    },
    {
        id: 'projects/title',
        table: 'projects',
        field: 'title',
        widget: 'string',
        default: null,
        unique: false,
        options: {
            placeholder: 'Project title'
        }
    },
    {
        id: 'projects/title',
        table: 'projects',
        field: 'notes',
        widget: 'markdown',
        default: null,
        unique: false,
        options: {}
    },


    // collections

    {
        id: 'projects/title',
        table: 'collection',
        field: 'name',
        widget: 'string',
        default: null,
        unique: true,
        options: {
            required: true
        }
    },
    {
        id: 'projects/title',
        table: 'collection',
        field: 'hidden',
        widget: 'checkbox',
        default: false,
        unique: false,
        options: {}
    },
    {
        id: 'projects/title',
        table: 'collection',
        field: 'single',
        widget: 'checkbox',
        default: false,
        unique: false,
        options: {}
    }


]
