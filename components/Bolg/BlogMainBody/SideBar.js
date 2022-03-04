/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
const SideBar = () => {
  return (
    <div>
      <div>
        {/* Newsletter  */}
        <div>
          <h2 className="pb-4 text-3xl font-semibold">Newsletter</h2>
          <p className="pb-3">
            Please enter your email to receive the latest news in your inbox.
          </p>
          <input
            className="w-full rounded-t-lg border-2 p-3 text-black dark:border-0 dark:text-black"
            type="text"
          />
          <button className="mt-2 w-full rounded-b-lg bg-orange-400 p-2 text-lg font-semibold">
            Subscribe
          </button>
        </div>
        {/* Recent posts  */}
        <div className="py-6">
          <h1 className="py-4 text-2xl font-bold">Recent Posts</h1>
          <div>
            <div
              style={{ maxWidth: '450px' }}
              className="grid grid-cols-12 gap-2 py-3"
            >
              <div className="col-span-5 pt-1">
                <img
                  className="rounded-lg"
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-grid/blog_grid_post2.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-7">
                <h3 className="text-base">
                  How to Create GDPR Consent Form In WordPress
                </h3>
                <p className="mt-3 text-sm">January 19, 2020</p>
              </div>
            </div>
            <div
              style={{ maxWidth: '450px' }}
              className="grid grid-cols-12 gap-2 py-3"
            >
              <div className="col-span-5 pt-1">
                <img
                  className="rounded-lg"
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-grid/blog_grid_post2.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-7">
                <h3 className="text-base">
                  How to Create GDPR Consent Form In WordPress
                </h3>
                <p className="mt-3 text-sm">January 19, 2020</p>
              </div>
            </div>
            <div
              style={{ maxWidth: '450px' }}
              className="grid grid-cols-12 gap-2 py-3"
            >
              <div className="col-span-5 pt-1">
                <img
                  className="rounded-lg"
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-grid/blog_grid_post2.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-7">
                <h3 className="text-base">
                  How to Create GDPR Consent Form In WordPress
                </h3>
                <p className="mt-3 text-sm">January 19, 2020</p>
              </div>
            </div>
          </div>
        </div>
        {/* Post Categories */}
        <div className="py-6">
          <h3 className="pb-4 text-2xl font-bold">Post Categories</h3>
          <div>
            <ul className="list-disc text-lg">
              <li className="ml-5">Creative</li>
              <li className="ml-5">Inspiration</li>
              <li className="ml-5">Lifestyle</li>
              <li className="ml-5">News</li>
              <li className="ml-5">Photography</li>
              <li className="ml-5">Skill</li>
              <li className="ml-5">Tourist Tours</li>
              <li className="ml-5">Inspire</li>
            </ul>
          </div>
        </div>
        {/* Sponsors list  */}
        <div>
          <h2 className="pt-3 pb-8 text-2xl font-bold">Sponsors</h2>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-6">
              <img
                src="https://total.wpexplorer.com/base/wp-content/uploads/sites/2/2021/01/wpforms-125x125v1.png"
                className="wpex-align-bottom"
              />
            </div>
            <div className="col-span-6">
              <img
                src="https://total.wpexplorer.com/base/wp-content/uploads/sites/2/2021/01/nf-banner-125x125-1.png"
                className="wpex-align-bottom"
              />
            </div>
            <div className="col-span-6">
              <img
                src="https://total.wpexplorer.com/base/wp-content/uploads/sites/2/2021/01/bigstock-125.png"
                className="wpex-align-bottom"
              />
            </div>
            <div className="col-span-6">
              <img
                src="https://total.wpexplorer.com/base/wp-content/uploads/sites/2/2021/01/mediatemple-125.png"
                className="wpex-align-bottom"
              />
            </div>
          </div>
        </div>
        {/* Follow us  */}
        <div>
          <h3 className="pt-8 pb-4 text-2xl font-bold">Follow us</h3>
          <p>Don't forget to follow our social media profiles.</p>
          <div className="flex justify-around pt-3">
            <div className="rounded-lg bg-blue-600 p-1">
              <FacebookOutlinedIcon />
            </div>
            <div className="rounded-lg bg-blue-400 p-1">
              <TwitterIcon />
            </div>
            <div className="rounded-lg bg-pink-600 p-1">
              <InstagramIcon />
            </div>
            <div className="rounded-lg bg-blue-800 p-1">
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
