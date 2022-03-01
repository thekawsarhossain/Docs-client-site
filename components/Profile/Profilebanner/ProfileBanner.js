import { Container } from '@mui/material'
const ProfileBanner = () => {
  return (
    <div>
      <div
        style={{ padding: '80px 0 80px 80px' }}
        className="relative bg-Docy-Dark dark:bg-Docy-White"
      >
        <Container>
          <div
            id="scisco-page-title"
            className="scisco-profile-header relative z-10 flex flex-nowrap items-center py-16"
          >
            <div
              style={{ minWidth: '125px' }}
              className="scisco-profile-thumbnail"
            >
              <div className="scisco-verified relative">
                <img
                  style={{
                    border: '5px solid rgba(255,255,255,.1)',
                    background: 'none',
                    height: '105px',
                  }}
                  className="inline-flex w-auto items-center justify-center rounded-full text-base text-white dark:text-Docy-DarkLight"
                  src="https://wordpress-288344-1596643.cloudwaysapps.com/wp-content/uploads/2020/11/avatar-200x200.jpg"
                  alt="avatar"
                  layout="fill"
                />
              </div>
            </div>
            <div className="scisco-profile-info">
              <h1 className="scisco-ap-title text-white dark:text-Docy-DarkLight">
                John Doe
                <span className="scisco-title-count scisco-title-rep text-white dark:text-Docy-DarkLight">
                  64
                </span>
              </h1>
              <div className="scisco-description text-white dark:text-Docy-DarkLight">
                Im a Web Developer and Designer
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ProfileBanner
