import UserProfile from "../components/Dashboard/UserProfile/UserProfile";
import UserLists from "../components/Dashboard/UserLists/UserLists";

const dashboard = () => {
  return (
    <div>
      <h1>Here dashboard Info</h1>
      <UserProfile/>
      <UserLists/>

    
    </div>
  );
}

export default dashboard;