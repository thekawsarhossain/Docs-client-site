const ProfileAbout = () => {
  return (
    <>
      <div class="scisco-user-boxes mb-8">
        <div class="grid grid-cols-12">
          <div class="col-md mt-md-0 col-span-12 mt-3 pr-4 lg:col-span-4">
            <div
              style={{
                backgroundColor: '#2dce89',
                boxShadow: '0 0 2rem 0 rgb(136 152 170 / 30%) ',
              }}
              class="scisco-user-box flex items-stretch overflow-hidden rounded p-0 text-white"
            >
              <div
                style={{
                  minWidth: '65px',
                  borderRight: '1px solid rgba(255,255,255,.2)',
                }}
                class="scisco-user-box-icon flex items-center justify-center p-0 text-2xl"
              >
                <i class="fas fa-comment"></i>
              </div>
              <div
                class="scisco-user-box-info flex p-4"
                style={{
                  flexDirection: 'column',
                  flexBasis: 'auto',
                }}
              >
                <span className="font-bold">4 Answers</span>{' '}
                <span className="text-sm">1 Best Answers</span>
              </div>
            </div>
          </div>
          <div class="col-md mt-md-0 col-span-12 mt-3 pr-4 lg:col-span-4">
            <div
              style={{
                backgroundColor: '#d62828',
                boxShadow: '0 0 2rem 0 rgb(136 152 170 / 30%) ',
              }}
              class="scisco-user-box flex items-stretch overflow-hidden rounded p-0 text-white"
            >
              <div
                style={{
                  minWidth: '65px',
                  borderRight: '1px solid rgba(255,255,255,.2)',
                }}
                class="scisco-user-box-icon flex items-center justify-center p-0 text-2xl"
              >
                <i class="fas fa-question-circle"></i>
              </div>
              <div
                style={{
                  flexDirection: 'column',
                  flexBasis: 'auto',
                }}
                class="scisco-user-box-info flex p-4"
              >
                <span className="font-bold">3 Questions</span>{' '}
                <span className="text-sm">0 Unanswered</span>
              </div>
            </div>
          </div>
          <div class="col-md mt-md-0 col-span-12 mt-3 lg:col-span-4">
            <div
              style={{
                backgroundColor: '#F28900',
                boxShadow: '0 0 2rem 0 rgb(136 152 170 / 30%) ',
              }}
              class="scisco-user-box flex items-stretch overflow-hidden rounded p-0 text-white"
            >
              <div
                style={{
                  minWidth: '65px',
                  borderRight: '1px solid rgba(255,255,255,.2)',
                }}
                class="scisco-user-box-icon flex items-center justify-center p-0 text-2xl"
              >
                <i class="fas fa-trophy"></i>
              </div>
              <div
                style={{
                  flexDirection: 'column',
                  flexBasis: 'auto',
                }}
                class="scisco-user-box-info flex p-4"
              >
                <span className="font-bold">64 Reputation</span>{' '}
                <span className="text-sm">Member since: Nov 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: '#fff',
          boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
          borderRadius: '0.25rem',
        }}
        class="scisco-user-table-wrapper"
      >
        <div class="scisco-user-table user-name-bx flex flex-nowrap items-center border-b-2 border-solid border-gray-200">
          <div class="scisco-user-table-left">Name</div>
          <div class="scisco-user-table-right">John Doe</div>
        </div>
        <div class="scisco-user-table age-bx flex flex-nowrap items-center border-b-2 border-solid border-gray-200">
          <div class="scisco-user-table-left">Age</div>
          <div class="scisco-user-table-right">34</div>
        </div>
        <div class="scisco-user-table gender-bx flex flex-nowrap items-center border-b-2 border-solid border-gray-200">
          <div class="scisco-user-table-left">Gender</div>
          <div class="scisco-user-table-right">Male</div>
        </div>
        <div class="scisco-user-table location-bx flex flex-nowrap items-center border-b-2 border-solid border-gray-200">
          <div class="scisco-user-table-left">Location</div>
          <div class="scisco-user-table-right">New York</div>
        </div>
        <div class="scisco-user-table website-bx flex flex-nowrap items-center border-b-2 border-solid border-gray-200">
          <div class="scisco-user-table-left">Website</div>
          <div class="scisco-user-table-right">www.thememasters.club/</div>
        </div>
        <div class="scisco-user-table bio-bx flex flex-nowrap items-center border-b-2 border-solid border-gray-200">
          <div class="scisco-user-table-left">Biography</div>
          <div class="scisco-user-table-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            pellentesque tincidunt sem a suscipit. Etiam pharetra ornare
            ullamcorper. Curabitur ac efficitur purus. Sed id urna maximus,
            aliquet est sed, egestas risus. Vestibulum rutrum purus tortor. Sed
            in commodo nunc.
          </div>
        </div>
      </div>
      <div id="scisco-user-icons">
        <ul class="scisco-icons le mt-6 flex justify-end p-0 ">
          <li
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Facebook"
            style={{ margin: '10px', padding: '0' }}
          >
            <a
              style={{
                color: '#fff',
                backgroundColor: '#3b5998',
                width: '36px',
                height: '36px',
                lineHeight: '36px',
                display: ' block',
                textAlign: 'center',
                fontSize: '18px',
                borderRadius: '100%',
                transition: 'transform .2s ease-in-out',
              }}
              class="scisco-social-btn btn-facebook"
              href="#"
              target="_blank"
            >
              <span aria-hidden="true" class="fab fa-facebook"></span>
            </a>
          </li>
          <li
            style={{ margin: '10px', padding: '0' }}
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Twitter"
          >
            <a
              style={{
                color: '#fff',
                backgroundColor: '#1da1f2',
                width: '36px',
                height: '36px',
                lineHeight: '36px',
                display: ' block',
                textAlign: 'center',
                fontSize: '18px',
                borderRadius: '100%',
                transition: 'transform .2s ease-in-out',
              }}
              class="scisco-social-btn btn-twitter"
              href="#"
              target="_blank"
            >
              <span aria-hidden="true" class="fab fa-twitter"></span>
            </a>
          </li>
          <li
            style={{ margin: '10px', padding: '0' }}
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Instagram"
          >
            <a
              style={{
                color: '#fff',
                backgroundColor: '#e1306c',
                width: '36px',
                height: '36px',
                lineHeight: '36px',
                display: ' block',
                textAlign: 'center',
                fontSize: '18px',
                borderRadius: '100%',
                transition: 'transform .2s ease-in-out',
              }}
              class="scisco-social-btn btn-instagram"
              href="#"
              target="_blank"
            >
              <span aria-hidden="true" class="fab fa-instagram"></span>
            </a>
          </li>
          <li
            style={{ margin: '10px', padding: '0' }}
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Vimeo"
          >
            <a
              style={{
                color: '#fff',
                backgroundColor: '#1da1f2',
                width: '36px',
                height: '36px',
                lineHeight: '36px',
                display: ' block',
                textAlign: 'center',
                fontSize: '18px',
                borderRadius: '100%',
                transition: 'transform .2s ease-in-out',
              }}
              class="scisco-social-btn btn-vimeo-v"
              href="#"
              target="_blank"
            >
              <span aria-hidden="true" class="fab fa-vimeo-v"></span>
            </a>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
    </>
  )
}

export default ProfileAbout
