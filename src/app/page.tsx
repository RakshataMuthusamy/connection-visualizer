import ProfileGraph from "@/components/profilegraph";

function Page() {
    const people = [me, Fred];
        
    return (
        <ProfileGraph profiles={people} />
    );
}

export default Page;
