import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import ProfileBanner from "../../components/DashboardLayout/UserProfile/ProfileBanner";
import ProfileDetails from "../../components/DashboardLayout/UserProfile/ProfileDetails";

const userDetails = () => {
  return (
    <DashboardLayout>
      <ProfileBanner/>
      <ProfileDetails/>
    </DashboardLayout>
  );
}

export default userDetails;