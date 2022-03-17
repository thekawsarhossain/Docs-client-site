/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
import ManageBlog from '../../components/DashboardLayout/ManageBlogs/ManageBlog'

const ManageBlogs = () => {

// here call Manage Blogs Components
  return (
    <DashboardLayout>
      <ManageBlog/>
    </DashboardLayout>
  )
}

export default ManageBlogs
