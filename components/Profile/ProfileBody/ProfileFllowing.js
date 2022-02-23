import CheckIcon from '@mui/icons-material/Check'
const ProfileFllowing = () => {
  return (
    <div>
      <div>
        <form
          style={{
            position: 'relative',
            padding: '1.5rem',
            border: '0',
            marginBottom: '2.5rem',
            backgroundColor: '#2C303A',
            borderRadius: '0.25rem',
            boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
          }}
          role="search"
          method="get"
          id="scisco-user-search-form"
        >
          <div
            style={{ marginRight: '-10px', marginLeft: '-10px' }}
            className="form-row grid grid-cols-12"
          >
            <div className="col-span-12 lg:col-span-8">
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
            <div
              style={{ paddingRight: '10px', paddingLeft: '10px' }}
              className="col-span-12 lg:col-span-4"
            >
              <select
                name="qa_orderby"
                id="qa_orderby"
                className="custom-select w-100"
                style={{
                  display: 'inline-block',
                  width: '100%',
                  height: 'calc(1.5em + 1.25rem + 2px)',
                  padding: '0.625rem 1.75rem 0.625rem 0.75rem',
                  fontSize: '.9rem',
                  fontWeight: '400',
                  lineHeight: '1.5',
                  color: '#525f7f',
                  verticalAlign: 'middle',
                  background:
                    "#fff url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%2332325d' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e) no-repeat right 0.75rem center/8px 10px",
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '0.25rem',
                  boxShadow: 'none',
                  appearance: 'none',
                }}
              >
                <option value="alphabetical_asc" selected="">
                  Sort by: Alphabetical ASC
                </option>
                <option value="alphabetical_desc">
                  Sort by: Alphabetical DESC
                </option>
                <option value="registration_date_asc">
                  Sort by: Registration Date ASC
                </option>
                <option value="registration_date_desc">
                  Sort by: Registration Date DESC
                </option>
                <option value="reputation_asc">Sort by: Reputation ASC</option>
                <option value="reputation_desc">
                  Sort by: Reputation DESC
                </option>
              </select>
            </div>
          </div>
        </form>
        <div
          style={{
            border: '0',
            background: '#2C303A',
            borderRadius: '0.25rem',
            boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
          }}
          className="scisco-users-wrapper"
        >
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
                  src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/avatar7-200x200.jpg"
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
                  margin: '0',
                  display: ' flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  lineHeight: '1.5',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#fff',
                }}
              >
                <a href="https://wordpress-288344-1596643.cloudwaysapps.com/questions/profile/darrell//">
                  Darrell Collins
                </a>
                <span
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
                </span>
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
                Member since: November 17, 2020
              </div>
            </div>
            <div
              style={{ minWidth: '130px', textAlign: ' right' }}
              className="scisco-question-counts"
            >
              <span
                style={{
                  background: '#fff',
                  display: 'block',
                  float: 'left',
                  textTransform: ' lowercase',
                  fontSize: '.7rem',
                  marginLeft: '15px',
                  color: 'inherit',
                  border: '1px solid rgba(0,0,0,.1)',
                  width: '50px',
                  minHeight: '60px',
                  maxWidth: ' 100%',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: ' center',
                }}
                className="ap-questions-count"
              >
                <span
                  style={{
                    borderBottom: ' 1px solid rgba(0,0,0,.1)',
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
                  background: '#fff',
                  display: 'block',
                  float: 'left',
                  textTransform: 'lowercase',
                  fontSize: '.7rem',
                  marginLeft: '15px',
                  color: 'inherit',
                  border: '1px solid rgba(0,0,0,.1)',
                  width: '50px',
                  minHeight: '60px',
                  maxWidth: '100%',
                  whiteSpace: 'nowrap',
                  textoverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: ' center',
                }}
                className="ap-questions-count ap-questions-vcount"
              >
                <span
                  style={{
                    borderBottom: ' 1px solid rgba(0,0,0,.1)',
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
              </span>
            </div>
          </div>
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
              <a href="https://wordpress-288344-1596643.cloudwaysapps.com/questions/profile/ian//">
                <img
                  className="avatar"
                  src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/avatar5-200x200.jpg"
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
                  margin: '0',
                  display: ' flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  lineHeight: '1.5',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#fff',
                }}
              >
                <a href="https://wordpress-288344-1596643.cloudwaysapps.com/questions/profile/ian//">
                  Ian Harris
                </a>
                <span
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
                  59
                </span>
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
                Member since: November 17, 2020
              </div>
            </div>
            <div
              style={{ minWidth: '130px', textAlign: ' right' }}
              className="scisco-question-counts"
            >
              <span
                style={{
                  background: '#fff',
                  display: 'block',
                  float: 'left',
                  textTransform: ' lowercase',
                  fontSize: '.7rem',
                  marginLeft: '15px',
                  color: 'inherit',
                  border: '1px solid rgba(0,0,0,.1)',
                  width: '50px',
                  minHeight: '60px',
                  maxWidth: ' 100%',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: ' center',
                }}
                className="ap-questions-count"
              >
                <span
                  style={{
                    borderBottom: ' 1px solid rgba(0,0,0,.1)',
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
                  1
                </span>{' '}
                Que
              </span>
              <span
                style={{
                  background: '#fff',
                  display: 'block',
                  float: 'left',
                  textTransform: 'lowercase',
                  fontSize: '.7rem',
                  marginLeft: '15px',
                  color: 'inherit',
                  border: '1px solid rgba(0,0,0,.1)',
                  width: '50px',
                  minHeight: '60px',
                  maxWidth: '100%',
                  whiteSpace: 'nowrap',
                  textoverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: ' center',
                }}
                className="ap-questions-count ap-questions-vcount"
              >
                <span
                  style={{
                    borderBottom: ' 1px solid rgba(0,0,0,.1)',
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
              </span>
            </div>
          </div>
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
              <a href="https://wordpress-288344-1596643.cloudwaysapps.com/questions/profile/linda//">
                <img
                  className="avatar"
                  src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/avatar3-200x200.jpg"
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
                  margin: '0',
                  display: ' flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  lineHeight: '1.5',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#fff',
                }}
              >
                <a href="https://wordpress-288344-1596643.cloudwaysapps.com/questions/profile/linda//">
                  Linda Fernandez
                </a>
                <span
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
                  23
                </span>
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
                Member since: November 17, 2020
              </div>
            </div>
            <div
              style={{ minWidth: '130px', textAlign: ' right' }}
              className="scisco-question-counts"
            >
              <span
                style={{
                  background: '#fff',
                  display: 'block',
                  float: 'left',
                  textTransform: ' lowercase',
                  fontSize: '.7rem',
                  marginLeft: '15px',
                  color: 'inherit',
                  border: '1px solid rgba(0,0,0,.1)',
                  width: '50px',
                  minHeight: '60px',
                  maxWidth: ' 100%',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: ' center',
                }}
                className="ap-questions-count"
              >
                <span
                  style={{
                    borderBottom: ' 1px solid rgba(0,0,0,.1)',
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
                  background: '#fff',
                  display: 'block',
                  float: 'left',
                  textTransform: ' lowercase',
                  fontSize: '.7rem',
                  marginLeft: '15px',
                  color: 'inherit',
                  border: '1px solid rgba(0,0,0,.1)',
                  width: '50px',
                  minHeight: '60px',
                  maxWidth: ' 100%',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: ' center',
                }}
                className="ap-questions-count ap-questions-vcount"
              >
                <span
                  style={{
                    borderBottom: ' 1px solid rgba(0,0,0,.1)',
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
                  1
                </span>{' '}
                Ans
              </span>
            </div>
          </div>
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
              <a href="https://wordpress-288344-1596643.cloudwaysapps.com/questions/profile/nelson//">
                <div className="scisco-verified">
                  <CheckIcon
                    sx={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      color: '#fff',
                      background: '#2dce89',
                      borderRadius: '100%',
                      fontSize: '10px',
                      width: '16px',
                      height: '16px',
                      lineHeight: '16px',
                      textAlign: 'center',
                      zIndex: '2',
                    }}
                  />
                  <img
                    className="avatar"
                    src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/avatar11.jpg"
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
                </div>
              </a>
            </div>
            <div style={{ flex: 'auto' }} className="scisco-question-title">
              <h6
                style={{
                  margin: '0',
                  display: ' flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  lineHeight: '1.5',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#fff',
                }}
              >
                <a href="https://wordpress-288344-1596643.cloudwaysapps.com/questions/profile/nelson//">
                  Nelson Myers
                </a>
                <span
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
                  64
                </span>
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
                Member since: November 17, 2020
              </div>
            </div>
            <div
              style={{ minWidth: '130px', textAlign: ' right' }}
              className="scisco-question-counts"
            >
              <span
                style={{
                  background: '#fff',
                  display: 'block',
                  float: 'left',
                  textTransform: ' lowercase',
                  fontSize: '.7rem',
                  marginLeft: '15px',
                  color: 'inherit',
                  border: '1px solid rgba(0,0,0,.1)',
                  width: '50px',
                  minHeight: '60px',
                  maxWidth: ' 100%',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: ' center',
                }}
                className="ap-questions-count"
              >
                <span
                  style={{
                    borderBottom: ' 1px solid rgba(0,0,0,.1)',
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
                  1
                </span>{' '}
                Que
              </span>
              <span
                style={{
                  background: '#fff',
                  display: 'block',
                  float: 'left',
                  textTransform: ' lowercase',
                  fontSize: '.7rem',
                  marginLeft: '15px',
                  color: 'inherit',
                  border: '1px solid rgba(0,0,0,.1)',
                  width: '50px',
                  minHeight: '60px',
                  maxWidth: ' 100%',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: ' center',
                }}
                className="ap-questions-count ap-questions-vcount"
              >
                <span
                  style={{
                    borderBottom: ' 1px solid rgba(0,0,0,.1)',
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
                Ans
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileFllowing
