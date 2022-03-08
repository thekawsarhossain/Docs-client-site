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
      <div
        style={{
          boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
        }}
        className="my-5 rounded bg-slate-100 text-Docy-Dark dark:bg-Docy-DarkM dark:text-white"
      >
        <div className=" flex border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left">Name</div>
          <div className="scisco-user-table-right flex">
            <span className="self-center">
              {props.userInfoFromDB?.displayName}
            </span>
          </div>
        </div>
        <div className="scisco-user-table age-bx flex border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left">Profession</div>
          <div className="scisco-user-table-right flex">
            <span className="self-center">
              {props.userInfoFromDB?.profession}
            </span>
          </div>
        </div>
        <div className="scisco-user-table gender-bx flex  border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left">Gender</div>
          <div className="scisco-user-table-right flex">
            {' '}
            <span className="self-center">{props.userInfoFromDB?.gender}</span>
          </div>
        </div>
        <div className="scisco-user-table location-bx flex  border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left">Address</div>
          <div className="scisco-user-table-right flex">
            {' '}
            <span className="self-center">{props.userInfoFromDB?.address}</span>
          </div>
        </div>
        <div className="scisco-user-table website-bx flex  border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left">Website</div>
          <div className="scisco-user-table-right flex">
            {' '}
            <span className="self-center">{props.userInfoFromDB?.website}</span>
          </div>
        </div>
        <div className="scisco-user-table bio-bx flex  border-b-2 border-solid border-gray-200">
          <div className="scisco-user-table-left flex">
            <span className="self-center">Biography</span>
          </div>
          <div className="scisco-user-table-right flex">
            {' '}
            <span className="self-center">
              {props.userInfoFromDB?.biography}
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
