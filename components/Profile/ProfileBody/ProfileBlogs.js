import SmsIcon from '@mui/icons-material/Sms'

const ProfileBlogs = () => {
  return (
    <div className="">
      <div className="scisco-masonry-grid" style={{ opacity: '1' }}>
        <div className="scisco-two-columns" data-columns="2">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 rounded bg-slate-100 p-5 shadow dark:bg-Docy-DarkM lg:col-span-6">
              <div className="card-masonry">
                <div className="card">
                  <a className="card-featured-Image" href="">
                    <img
                      className=""
                      src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/9-1024x683.jpg"
                      alt="How Can My Business Win Awards?"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title py-6 font-bold leading-9">
                      <a href="">How Can My Business Win Awards?</a>
                    </h3>
                    <p className="pb-2 text-slate-400">
                      Qui ex graviterque si et velit quamquam erudit. Amet
                      quamquam eu consequat. Quo cupidatat volupta, appellat
                      anim ab litteris domestic…
                    </p>
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
            <div className="col-span-12 rounded bg-slate-100 p-5 shadow dark:bg-Docy-DarkM lg:col-span-6">
              <div className="card-masonry">
                <div className="card">
                  <a className="card-featured-Image" href="">
                    <img
                      className=""
                      src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/9-1024x683.jpg"
                      alt="How Can My Business Win Awards?"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title py-6 font-bold leading-9">
                      <a href="">How Can My Business Win Awards?</a>
                    </h3>
                    <p className="pb-2 text-slate-400">
                      Qui ex graviterque si et velit quamquam erudit. Amet
                      quamquam eu consequat. Quo cupidatat volupta, appellat
                      anim ab litteris domestic…
                    </p>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBlogs
