import { CSSProperties } from "react";

function Line({ x0, y0, x1, y1 }: {x0: number, y0: number, x1: number, y1: number}) {
    const angle = Math.atan2(y1 - y0, x1 - x0) * 180 / Math.PI;
    const distance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));

    const positionStyle: CSSProperties = {
        position: 'absolute',
        top: `${y0}px`,
        left: `${x0}px`,
        width: `${distance}px`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0.0',
    };

    const lineStyle: CSSProperties = {
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
    }

    const styleProps = Object.assign({}, positionStyle, lineStyle);

    return (
        <div className="line-placeholder">
            <div
                style={styleProps}
            />
        </div>
    );
}

function ProfileCard({ person, handleClick, x, y }: {person: Person, handleClick: () => void, x: number, y: number}) {
    const bColor = person.isUser ? 'green': 'black';
    const positionStyle: CSSProperties = {
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
    }

    const styleProps = Object.assign({}, positionStyle, { borderColor: bColor })

    return (
        <div className="profile-card" style={styleProps} onClick={handleClick}>
            <div className="name">{person.initials}</div>
            <div className="job">{person.job}</div>
        </div>
    )
}

function ProfileGraph({ profiles, connections, handleClick }:
    {profiles: Person[], connections: {a: Person, b: Person}[], handleClick: (person: Person) => void}) {

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
            {profileLocations.map((loc) =>
                (<ProfileCard key={loc.p.name} person={loc.p} handleClick={() => handleClick(loc.p)} x={loc.x} y={loc.y} />))}
            {connectionLocations.map((loc) => (<Line x0={loc.x0} y0={loc.y0} x1={loc.x1} y1={loc.y1} />))}
        </>
    );
}

export default ProfileGraph;
