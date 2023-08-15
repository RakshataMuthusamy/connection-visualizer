'use client';

import Profile from "@/components/profile";
import ProfileGraph from "@/components/profilegraph";
import { useState } from "react";

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

function determineConnections(people: Person[]) {
  const connectionsList: {a: Person, b: Person}[] = [];

  people.forEach(function(person) {
    person.connections.forEach(function(connection) {
      const link = { a: person, b: connection };
      const reverseLink = { a: connection, b: person }
      if (!connectionsList.includes(link) && !connectionsList.includes(reverseLink)) { connectionsList.push(link); }
    });
  });

  return connectionsList;
}

function Page() {
  const [ showProfile, setShowProfile ] = useState(false);
  const [ currProfile, setCurrProfile ] = useState<Person>(n);
  const people = [me, Fred];

  function openProfile(person: Person) {
    setShowProfile(true);
    setCurrProfile(person);
  }

  function closeProfile() {
    setShowProfile(false);
    setCurrProfile(n);
  }
    
  return (
    <>
      { showProfile ?
        (<Profile person={currProfile} handleClick={closeProfile} />) :
        (<ProfileGraph profiles={people} connections={determineConnections(people)} handleClick={openProfile} />) }
    </>
  );
}

export default Page;
