// ------------------
// Projects
// ------------------

const projects =
[
    {
        id: 1,
        title: 'First',
        notes: 'My first project'
    },
    {
        id: 2,
        title: 'Second',
        notes: 'My second project'
    },
    {
        id: 3,
        title: 'Third',
        notes: 'My third project'
    }
]



// ------------------
// Projects
// ------------------

const home = [
    {
        id: 1,
        primary: 1,
        projects: [2, 3]
    }
]


// ------------------
// Fields
// ------------------

const fields = [
    {
        table: 'home',
        field: 'primary',
        widget: 'many-to-one',
        default: null,
        unique: false,
        options: {
            table: 'projects',
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
