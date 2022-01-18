import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "1",
    image:
      "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/09/swiss-alps.jpg",
    title: "title 1",
    description: "description 1",
    address: "address 1",
  },
  {
    id: "2",
    image:
      "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/mountains.jpg",
    title: "title 2",
    description: "description 2",
    address: "address 2",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h2>All Meetups Page</h2>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
