type Person = {
    name: string,
    initials: string,
    job: string,
    placeOfWork: string,
    description: string,
    utility: string,
    latestMeetingDate: string,
    isUser: boolean,
    closeness: number,
    connections: Person[]
}

const n: Person = {
    name: 'null',
    initials: 'null',
    isUser: false,
    job: 'null',
    placeOfWork: 'null',
    description: 'null',
    utility: 'null',
    latestMeetingDate: 'null',
    closeness: 0,
    connections: []
  }