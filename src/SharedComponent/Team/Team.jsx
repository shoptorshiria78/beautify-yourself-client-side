import Member from "../Member/Member";


const Team = () => {

    const team = [
        {
            id: 1,
            name: "William smith",
            pic: 'https://i.ibb.co/q1mt484/team-1.jpg',
            post: 'Product Development Manager'
        },
        {
            id: 2,
            name: "Emily Davis",
            pic: 'https://i.ibb.co/4jMXmn0/team-2.jpg',
            post: 'Brand Marketing Manager'
        },
        {
            id: 3,
            name: "James Smith",
            pic: 'https://i.ibb.co/JzKHkbz/team-4.jpg',
            post: 'Retail Sales Associate'
        },
        {
            id: 4,
            name: 'Sophia loren',
            pic: 'https://i.ibb.co/ZgtQc5n/team-3.jpg',
            post: 'Quality Control Inspector'

        }

    ]
    return (
        <div className=" max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto bg-red-100 p-10 ">
            <h1 className="text-center text-4xl my-3 text-violet-400 font-bold">Meet Our Team </h1>
            <p className="text-center text-base py-3 my-3 text-red-400 ">Meet Our Dedicated Team of Experts. We are passionate about creativity, <br/> innovation, and delivering exceptional results. Together, we bring diverse skills <br/> to the table to make your vision a reality.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    team.map(member => <Member key={member.id} member={member}></Member>)
                }

            </div>
        </div>
    );
};

export default Team;