const me: Person = {
    name: 'Me',
    initials: 'Me',
    isUser: true,
    job: 'Test',
    placeOfWork: 'Test',
    description: 'Test',
    utility: 'Test',
    latestMeetingDate: 'Today',
    closeness: 5,
    connections: []
}

const Fred: Person = {
    name: 'Fred',
    initials: 'F',
    isUser: false,
    job: 'Test',
    placeOfWork: 'Test',
    description: 'Test',
    utility: 'Test',
    latestMeetingDate: 'Today',
    closeness: 5,
    connections: [me]
}
