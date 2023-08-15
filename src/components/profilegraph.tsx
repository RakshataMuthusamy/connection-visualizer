'use client';

import { useState } from "react";
import { Line, ProfileCard } from "./profilecard";
import { Profile } from "./profile";

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

function ProfileGraph({ profiles }:
    {profiles: Person[]}) {
    const [ showProfile, setShowProfile ] = useState(false);
    const [ currProfile, setCurrProfile ] = useState<Person>(n);
    const [ isEditMode, setIsEditMode ] = useState(false);
    const [ currEditing, setCurrEditing ] = useState<Person>(n);

    function openProfile(person: Person) {
        setShowProfile(true);
        setCurrProfile(person);
    }

    function closeProfile() {
        setShowProfile(false);
        setCurrProfile(n);
    }

    function openEditor(person: Person) {
        setIsEditMode(true);
        setCurrEditing(person);
    }

    function closeEditor() {
        setIsEditMode(false);
        setCurrEditing(n);
    }
    
    let connections = determineConnections(profiles);

    let profileLocations: {p: Person, x: number, y: number}[] = [];
    profiles.forEach(function(profile) {
        if (profile.name === "Me") {
            profileLocations.push({p: profile, x: 500, y: 500});
        } else {
            profileLocations.push({p: profile, x: Math.random() * 1000, y: Math.random() * 1000});
        }
    });

    let connectionLocations: {x0: number, y0: number, x1: number, y1: number}[] = [];
    connections.forEach(function(connection) {
        let ax = 0, ay = 0, bx = 0, by = 0;
        profileLocations.forEach(function(loc) {
            if (loc.p === connection.a) { ax = loc.x + 50; ay = loc.y + 45; }
            if (loc.p === connection.b) { bx = loc.x + 50; by = loc.y + 45; }
        });
        connectionLocations.push({ x0: ax, y0: ay, x1: bx, y1: by });
    });

    return (
        <>
            {showProfile ? <Profile person={currProfile} handleClick={closeProfile} /> : <>
                {profileLocations.map((loc) =>
                    (<ProfileCard key={loc.p.name} person={loc.p} handleClick={() => openProfile(loc.p)} x={loc.x} y={loc.y} />))}
                {connectionLocations.map((loc) => (<Line x0={loc.x0} y0={loc.y0} x1={loc.x1} y1={loc.y1} />))}
            </>}
            
        </>
    );
}

export default ProfileGraph;
