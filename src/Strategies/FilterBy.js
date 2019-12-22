const FilterBy = {
    none: {
        id: 'none',
        name: 'None',
        fx: () => true
    },
    active: {
        id: 'active',
        name: 'Active',
        fx: note => note && note.interval
    }
}