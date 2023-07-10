function ProfileCard({ person }: {person: Person}) {
    const bColor = person.isUser ? 'green': 'black';

    return (
        <div className="profile-card" style={{ borderColor: bColor }}>
            <div className="name">{person.name}</div>
            <div className="job">{person.job}</div>
        </div>
    )
}

export default ProfileCard;
