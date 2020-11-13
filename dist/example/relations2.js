// ------------------
// Projects
// ------------------

const projects = [
    {
        id: 1,
        title: 'First',
        members: [3],
        editors: [4]

    },
    {
        id: 2,
        title: 'Second',
        members: [1, 2],
        editors: [5]
    },
    {
        id: 3,
        title: 'Third',
        members: [1, 3],
        editors: [4, 5]
    }
]



// ------------------
// Members
// ------------------

const members = [
    {
        id: 1,
        name: 'John',
        projects: [2, 3]
    },
    {
        id: 2,
        name: 'Bill',
        projects: [2]
    },
    {
        id: 3,
        name: 'Jack',
        projects: [1, 2, 3]
    },
    {
        id: 4,
        name: 'Jake',
        projects: [1, 2, 3]
    },
    {
        id: 5,
        name: 'Tom',
        projects: [1, 2, 3]
    }
]



// ------------------
// Members
// ------------------


const relations = [
    {
        project: 1,
        member: 3
    },
    {
        project: 2,
        member: 1
    },
    {
        project: 2,
        member: 2
    },
    {
        project: 3,
        member: 1
    },
    {
        project: 3,
        member: 3
    }
]



// ------------------
// Fields
// ------------------

const fields = [
    {
        table: 'projects',
        field: 'members',
        widget: 'many-to-many',
        default: [],
        unique: false,
        options: {
            table: 'relations',
            display: 'title'
        }
    },
    {
        table: 'home',
        field: 'projects',
        widget: 'many-to-many',
        default: [],
        unique: false,
        options: {
            table: 'projects',
            display: 'title'
        }
    }
]
