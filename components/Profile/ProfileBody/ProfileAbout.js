import SmsIcon from '@mui/icons-material/Sms'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailIcon from '@mui/icons-material/Mail'
const ProfileAbout = (props) => {
  return (
    <div>
      <div>
        {/* <div className="grid grid-cols-12">
          <div className="col-md mt-md-0 col-span-12 mt-3 pr-4 lg:col-span-4">
            <div
              style={{
                backgroundColor: '#2dce89',
                boxShadow: '0 0 2rem 0 rgb(136 152 170 / 30%) ',
              }}
              className="flex items-stretch overflow-hidden rounded p-0 text-white dark:text-Docy-Dark"
            >
              <div
                style={{
                  minWidth: '65px',
                  borderRight: '1px solid rgba(255,255,255,.2)',
                }}
                className="flex items-center justify-center p-0 text-2xl"
              >
                <SmsIcon />
              </div>
              <div
                className="flex flex-col p-4"
                style={{
                  flexBasis: 'auto',
                }}
              >
                <span className="font-bold">4 Answers</span>{' '}
                <span className="text-sm">1 Best Answers</span>
              </div>
            </div>
          </div>
          <div className="col-md mt-md-0 col-span-12 mt-3 pr-4 lg:col-span-4">
            <div
              style={{
                backgroundColor: '#d62828',
                boxShadow: '0 0 2rem 0 rgb(136 152 170 / 30%) ',
              }}
              className=" flex items-stretch overflow-hidden rounded p-0 text-white dark:text-Docy-Dark"
            >
              <div
                style={{
                  minWidth: '65px',
                  borderRight: '1px solid rgba(255,255,255,.2)',
                }}
                className="flex items-center justify-center p-0 text-2xl"
              >
                <QuestionMarkIcon />
              </div>
              <div
                style={{
                  flexBasis: 'auto',
                }}
                className="flex flex-col p-4"
              >
                <span className="font-bold">3 Questions</span>{' '}
                <span className="text-sm">0 Unanswered</span>
              </div>
            </div>
          </div>
          <div className="col-md mt-md-0 col-span-12 mt-3 lg:col-span-4">
            <div
              style={{
                backgroundColor: '#F28900',
                boxShadow: '0 0 2rem 0 rgb(136 152 170 / 30%) ',
              }}
              className="scisco-user-box flex items-stretch overflow-hidden rounded p-0 text-white dark:text-Docy-Dark"
            >
              <div
                style={{
                  minWidth: '65px',
                  borderRight: '1px solid rgba(255,255,255,.2)',
                }}
                className="scisco-user-box-icon flex items-center justify-center p-0 text-2xl"
              >
                <EmojiEventsIcon />
              </div>
              <div
                style={{
                  flexBasis: 'auto',
                }}
                className="scisco-user-box-info flex flex-col p-4"
              >
                <span className="font-bold">64 Reputation</span>{' '}
                <span className="text-sm">Member since: Nov 2020</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div
        style={{
          boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
        }}
        className="my-5 rounded bg-slate-100 text-Docy-Dark dark:bg-Docy-Dark dark:text-white"
      >
        <div className=" flex border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left">Name</div>
          <div className="scisco-user-table-right flex">
            <span className="self-center">
              {props.userInfoFromDB.displayName}
            </span>
          </div>
        </div>
        <div className="scisco-user-table age-bx flex border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left">Profession</div>
          <div className="scisco-user-table-right flex">
            <span className="self-center">Super man</span>
          </div>
        </div>
        <div className="scisco-user-table gender-bx flex  border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left">Gender</div>
          <div className="scisco-user-table-right flex">
            {' '}
            <span className="self-center"> Male</span>
          </div>
        </div>
        <div className="scisco-user-table location-bx flex  border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left">Address</div>
          <div className="scisco-user-table-right flex">
            {' '}
            <span className="self-center"> New York</span>
          </div>
        </div>
        <div className="scisco-user-table website-bx flex  border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left">Website</div>
          <div className="scisco-user-table-right flex">
            {' '}
            <span className="self-center"> www.thememasters.club/</span>
          </div>
        </div>
        <div className="scisco-user-table bio-bx flex  border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left flex">
            <span className="self-center">Biography</span>
          </div>
          <div className="scisco-user-table-right flex">
            {' '}
            <span className="self-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              pellentesque tincidunt sem a suscipit. Etiam pharetra ornare
              ullamcorper. Curabitur ac efficitur purus. Sed id urna maximus,
              aliquet est sed, egestas risus. Vestibulum rutrum purus tortor.
              Sed in commodo nunc.
            </span>
          </div>
        </div>
      </div>
      <div id="scisco-user-icons">
        <ul className="scisco-icons le mt-6 flex justify-end p-0 ">
          <li
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Facebook"
            style={{ margin: '10px', padding: '0' }}
          >
            <a
              style={{
                backgroundColor: '#3b5998',
                transition: 'transform .2s ease-in-out',
              }}
              className="block h-9 w-9 rounded-full text-center text-lg leading-9 text-white"
              href="#"
              target="_blank"
            >
              <FacebookOutlinedIcon />
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
                backgroundColor: '#1da1f2',
                transition: 'transform .2s ease-in-out',
              }}
              className=" block h-9 w-9 rounded-full text-center text-lg leading-9 text-white"
              href="#"
              target="_blank"
            >
              <TwitterIcon />
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
                backgroundColor: '#e1306c',
                transition: 'transform .2s ease-in-out',
              }}
              className="block h-9 w-9 rounded-full text-center text-lg leading-9 text-white"
              href="#"
              target="_blank"
            >
              <MailIcon />
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
                backgroundColor: '#1da1f2',
                transition: 'transform .2s ease-in-out',
              }}
              className="block h-9 w-9 rounded-full text-center text-lg leading-9 text-white"
              href="#"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>
        <div className="clearfix"></div>
      </div>
    </div>
  )
}

export default ProfileAbout
