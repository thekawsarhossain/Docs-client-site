import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import UserBanner from "../../components/DashboardLayout/UserDetails/UserBanner";
import UserDetails from "../../components/DashboardLayout/UserDetails/UserDetails";


const userDetails = () => {
  return (
    // here users details
    <DashboardLayout>
   <UserBanner/>
   <UserDetails/>
    </DashboardLayout>
   
  );
}

export default userDetails;