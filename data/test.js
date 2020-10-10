/**
 * collections/projects/1
 */

// 1. Get projects/1.json

const content = {
    title: 'First project',
    image: '1.png'
}

// 2. Get from fields.csv where "collection" is "projects"

const fields = [
    {
        id: 1,
        table: 'projects',
        field: 'title',
        widget: 'text',
        options: null
    }
]

// 3. Marge "content" and "field"

const result = [
    {
        id: 1,
        table: 'projects',
        field: 'title',
        widget: 'text',
        options: null,
        value: 'First project'
    }
]




/**
 * collections/projects
 */

// 1. Get projects.csv

const projects = [
    {
        id: 1,
        title: 'First project',
        image: 'icon:???'
    },
    {
        id: 2,
        title: 'Second project',
        image: 'icon:???'
    }
]




/**
 * settings/collections
 */

// 1. Get collections.csv

const collections = [

]



/**
 * settings/collections/projects
 */

// 1. Get collections/projects.json

const projects2 = {
    "title": "Projects",
    "fields": [1, 2, 3, 4, 5],
    single: false,
    hidden: false
}


// 2. Get from fields.csv where "collection" is "collections"

const fields2 = [
    {
        id: 1,
        table: 'collections',
        field: 'title',
        widget: 'text',
        options: null
    },
    {
        id: 2,
        table: 'collections',
        field: 'fields',
        widget: 'm2m',
        options: {
            "collection": "fields",
            "display": "name"
        }
    }
]

//


