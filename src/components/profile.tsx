export function Profile({ person, handleClick } : {person: Person, handleClick: () => void}) {
    // function handleClick() {
    //     // Show when profile is clicked (this should be state)
    // }

    return (
        <div className="profile">
            <button className="close" onClick={handleClick}>&times;</button>
            <div className="content">
                <span className="name">{person.name}</span> <br />
                <span className="job">{person.job}, {person.placeOfWork}</span> <br /> <br />
                Description: <br /> <span className="long-form">{person.description}</span> <br /> <br />
                Utility of Connection: <br /> <span className="long-form">{person.utility}</span> <br /> <br />
                Closeness Rating: {person.closeness} <br /> <br />
                Latest Meeting Date: {person.latestMeetingDate}
            </div>
        </div>
    );
}
