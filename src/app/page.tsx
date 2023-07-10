import ProfileCard from "@/components/profile";

const me: Person = {
  name: 'Me',
  isUser: true,
  job: 'Student',
  placeOfWork: 'test',
  description: 'test',
  utility: 'test',
  latestMeetingDate: 'test',
  closeness: 5,
  people: []
}

function Page() {
  return (
    <div>
      <ProfileCard person={me}/>
    </div>
  );
}

export default Page;
