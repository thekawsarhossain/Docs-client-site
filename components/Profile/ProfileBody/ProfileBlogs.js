/* eslint-disable @next/next/no-img-element */
import SmsIcon from '@mui/icons-material/Sms'

const ProfileBlogs = (props) => {
  console.log(props.dataSearch)
  return (
    <div className="">
      <div>
        {/* Blogs list  */}
        <div className="grid grid-cols-12 gap-4">
          {props.dataSearch?.map((blog) => (
            <div
              key={blog._id}
              className="col-span-12 rounded bg-slate-100 p-5 shadow dark:bg-Docy-DarkM lg:col-span-6"
            >
              <div className="card-masonry">
                <div className="card">
                  <img
                    className="h-96 w-full rounded-t-lg object-cover"
                    src={blog?.image}
                    alt="blogImage"
                  />
                  <div style={{ minHeight: '135px' }} className=" pt-4 pb-8">
                    <h3 className="text-xl text-Docy-Dark dark:text-slate-100">
                      {/* {blog?.title} */}
                      {blog?.title.length > 70
                        ? blog?.title.slice(0, 70) + '...'
                        : blog?.title}
                    </h3>
                  </div>
                  <div
                    style={{
                      padding: '1.25rem 1.75rem',
                      borderTop: '1px solid black',
                    }}
                    className="card-footer flex flex-wrap items-center bg-slate-100 dark:bg-Docy-DarkM"
                  >
                    <div className="card-avatar">
                      <a href="">
                        <div className="scisco-verified">
                          {/* <i className="fas fa-check" title="Verified user"></i> */}
                          <img
                            className="avatar mr-4 h-10 w-10 rounded-full"
                            src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/avatar-200x200.jpg"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      style={{ wordWrap: 'break-word' }}
                      className="flex flex-col"
                    >
                      <div className="card-meta-author">
                        <a
                          className="block uppercase leading-6"
                          href="https://wordpress-288344-1596643.cloudwaysapps.com/author/egemenerd/"
                        >
                          John Doe
                        </a>
                      </div>
                      <div className="card-meta-date">
                        <a href="https://wordpress-288344-1596643.cloudwaysapps.com/how-can-my-business-win-awards/">
                          March 12, 2019
                        </a>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <a href="https://wordpress-288344-1596643.cloudwaysapps.com/how-can-my-business-win-awards//#scisco-comments-wrapper">
                        <SmsIcon sx={{ marginRight: '10px' }} />3
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileBlogs
