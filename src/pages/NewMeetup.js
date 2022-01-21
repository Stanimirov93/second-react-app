import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigateBack = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-first-demo-5e94c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigateBack("/", { replace: true });
    });
  }

  return (
    <section>
      <h2>Add new Meetup</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
