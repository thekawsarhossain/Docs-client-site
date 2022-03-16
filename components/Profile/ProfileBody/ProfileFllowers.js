/* eslint-disable @next/next/no-img-element */
const ProfileFllowers = (props) => {
  return (
    <div>
      <form
        style={{
          boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
        }}
        role="search"
        method="get"
        id="scisco-user-search-form"
        className="relative mb-10 mt-5 rounded-md border-0 p-6 dark:bg-Docy-DarkM"
      >
        <div
          style={{ marginRight: '-10px', marginLeft: '-10px' }}
          className="form-row grid grid-cols-12"
        >
          <div className="col-span-12">
            <div
              style={{
                boxShadow: '0 3px 2px rgb(233 236 239 / 5%)',
                borderRadius: '0.25rem',
                transition: 'all .15s ease-in-out',
                position: 'relative',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'stretch',
                width: '100%',
              }}
              className="input-group"
            >
              <input
                type="text"
                className="form-control"
                minLength="3"
                placeholder="Search by name..."
                name="qa_user"
                value=""
                style={{
                  display: ' block',
                  width: '100%',
                  height: 'calc(1.5em + 1.25rem + 2px)',
                  padding: '0.625rem 0.85rem',
                  fontSize: '.9rem',
                  fontWeight: '400',
                  lineHeight: '1.5',
                  color: '#525f7f',
                  backgroundColor: '#fff',
                  backgroundClip: ' padding-box',
                  border: ' 1px solid rgba(0,0,0,0.1)',
                  borderRadius: '0.25rem',
                  boxShadow: '0 3px 2px rgb(233 236 239 / 5%)',
                  transition: 'all .2s ease-in-out',
                }}
              />
              <div
                style={{ marginleft: '-1px' }}
                className="input-group-append"
              >
                <button
                  style={{
                    borderTopLeftRadius: '0',
                    borderBottomLeftRadius: '0',
                    position: 'relative',
                    zIndex: '2',
                    transform: 'none !important',
                  }}
                  type="submit"
                  className="btn btn-info"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div
        style={{
          border: '0',
          borderRadius: '0.25rem',
          boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
        }}
        className="scisco-users-wrapper mb-5 bg-white dark:bg-Docy-DarkM"
      >
        {props?.userInfoFromDB?.followers.map((follower) => (
          <div key={follower._id}>
            <div
              style={{
                display: 'flex',
                padding: '1.5rem',
                borderBottom: ' 1px solid rgba(0,0,0,.1)',
                alignItems: 'center',
              }}
              className="scisco-question-wrapper"
            >
              <div
                style={{ minWidth: '75px' }}
                className="scisco-question-avatar"
              >
                <a style={{ textDecoration: 'none', boxShadow: 'none' }}>
                  <img
                    className="avatar"
                    src={follower.image}
                    width="100"
                    height="100"
                    alt=""
                    style={{
                      borderRadius: '100%',
                      width: ' 60px',
                      textDecoration: 'none',
                      boxShadow: 'none',
                      color: '#fff',
                      backgroundColor: '#adb5bd',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      height: 'auto',
                    }}
                  />
                </a>
              </div>
              <div style={{ flex: 'auto' }} className="scisco-question-title">
                <h6
                  style={{
                    lineHeight: '1.5',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                  }}
                  className="m-0 flex flex-wrap items-center"
                >
                  <a href="https://wordpress-288344-1596643.cloudwaysapps.com/questions/profile/darrell//">
                    {follower?.name}
                  </a>
                  {/* <span
                    style={{
                      fontSize: '.7rem',
                      lineHeight: '1',
                      padding: '4px',
                      marginLeft: '5px',
                      background: '#f28900',
                      borderRadius: '2px',
                      fontWeight: 'bold',
                      marginRight: '0',
                      verticalAlign: 'text-bottom',
                      color: '#fff !important',
                    }}
                    className="ap-user-reputation"
                  >
                    45
                  </span> */}
                </h6>
                <div
                  style={{
                    display: ' flex',
                    flexWrap: ' wrap',
                    alignItems: 'center',
                    lineHeight: '1.5',
                    marginTop: '0',
                    fontSize: '.9rem',
                    color: ' #525f7f',
                  }}
                  className="scisco-question-meta"
                >
                  {follower?.email}
                </div>
              </div>
              <div
                style={{ minWidth: '130px', textAlign: ' right' }}
                className="scisco-question-counts"
              >
                {/* <span
                  style={{
                    fontSize: '.7rem',
                    marginLeft: '15px',
                    color: 'inherit',
                    border: '1px solid black',
                    minHeight: '60px',
                    maxWidth: ' 100%',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    textAlign: ' center',
                  }}
                  className="float-left block w-12 overflow-hidden bg-slate-100 lowercase dark:bg-Docy-DarkM "
                >
                  <span
                    style={{
                      borderBottom: ' 1px solid black',
                      width: 'auto',
                      fontSize: '.9rem',
                      textAlign: ' center',
                      fontWeight: '700',
                      padding: '7px 0',
                      height: 'auto',
                      marginBottom: '0',
                      display: 'block',
                    }}
                  >
                    2
                  </span>{' '}
                  Que
                </span>
                <span
                  style={{
                    fontSize: '.7rem',
                    marginLeft: '15px',
                    color: 'inherit',
                    border: '1px solid black',
                    minHeight: '60px',
                    maxWidth: ' 100%',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    textAlign: ' center',
                  }}
                  className="float-left block w-12 overflow-hidden bg-slate-100 lowercase dark:bg-Docy-DarkM"
                >
                  <span
                    style={{
                      borderBottom: ' 1px solid black',
                      width: 'auto',
                      fontSize: '.9rem',
                      textAlign: ' center',
                      fontWeight: '700',
                      padding: '7px 0',
                      height: 'auto',
                      marginBottom: '0',
                      display: 'block',
                    }}
                  >
                    3
                  </span>{' '}
                  Ans
                </span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileFllowers
