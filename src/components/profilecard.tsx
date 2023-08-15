import { CSSProperties } from "react";

export function Line({ x0, y0, x1, y1 }: {x0: number, y0: number, x1: number, y1: number}) {
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

export function ProfileCard({ person, handleClick, x, y }: {person: Person, handleClick: () => void, x: number, y: number}) {
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
