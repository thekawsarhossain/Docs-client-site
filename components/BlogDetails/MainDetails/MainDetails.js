import { Avatar, Container } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import DetailsView from './DetailsView'
import DemoBlog from './DemoBlog'

const MainDetails = () => {
  return (
    <div style={{ backgroundColor: '#21242c' }}>
      <Container>
        <div className="grid grid-cols-12 gap-6 py-8">
          <div className="col-span-12 md:col-span-12 lg:col-span-8">
            {/* video section  */}
            <video
              // style={{ maxWidth: "500px" }}
              src="https://res.cloudinary.com/dkbgqzl1e/video/upload/v1644901083/sas/1.1_Priori_Analysis_and_Posteriori_Testing_hozkij.mp4"
              controls
            ></video>
            {/* Detail view  */}
            <DemoBlog></DemoBlog>
            {/* Bloggers summary  */}
            <div
              style={{ minHeight: '200px' }}
              className="my-8 flex flex-col rounded-lg bg-gray-50 p-3 md:flex-row"
            >
              <div className="p-6">
                <Avatar
                  alt="Remy Sharp"
                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-single/about_img.jpg"
                  sx={{ width: 56, height: 56 }}
                />
              </div>
              <div className="self-center">
                <h1 className="pb-3 text-xl font-bold">Jason Response</h1>
                <p>
                  Loo tomfoolery jolly good bloke chancer chimney pot nice one
                  a, he nicked it mufty Oxford say wind up bits and bobs cheeky
                  bugger, amongst cack bugger Eaton William skive off.!
                </p>
              </div>
            </div>
            {/* related post  */}
            <div>
              <h1 className="pb-4 text-2xl font-bold text-white">
                Related Post
              </h1>
              <div className="grid grid-cols-12 gap-4 text-white">
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div>
                    <img
                      className="rounded-lg"
                      src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-grid/blog_grid_post2.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="pt-3 pb-1">18 Min Read | KbDoc</p>
                    <h4 className="pb-2 text-xl font-semibold">
                      70 Best Startups You Need to Watch Out for
                    </h4>
                    <p>
                      Cup of char brilliant horse play bro bread sloshed
                      lavatory only...
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div>
                    <img
                      className="rounded-lg"
                      src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-grid/blog_grid_post2.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="pt-3 pb-1">18 Min Read | KbDoc</p>
                    <h4 className="pb-2 text-xl font-semibold">
                      70 Best Startups You Need to Watch Out for
                    </h4>
                    <p>
                      Cup of char brilliant horse play bro bread sloshed
                      lavatory only...
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div>
                    <img
                      className="rounded-lg"
                      src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-grid/blog_grid_post2.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="pt-3 pb-1">18 Min Read | KbDoc</p>
                    <h4 className="pb-2 text-xl font-semibold">
                      70 Best Startups You Need to Watch Out for
                    </h4>
                    <p>
                      Cup of char brilliant horse play bro bread sloshed
                      lavatory only...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* comments section  */}
            <div className="py-8 text-white">
              <h2 className="py-6 text-3xl font-bold">3 Comments</h2>
              <div>
                <div className="my-4 flex flex-col sm:flex-row">
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-single/about_img.jpg"
                      sx={{ width: 56, height: 56 }}
                    />
                  </div>
                  <div className="pl-4">
                    <h1 className="text-2xl font-bold">Fletch Skinner</h1>
                    <p>Date and time</p>
                    <p className="py-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Inventore quia veniam corporis consequatur dolores,
                      laudantium numquam temporibus cupiditate quas facilis
                      repudiandae minima alias saepe praesentium magnam soluta
                      delectus earum dolorem. Error repudiandae suscipit atque
                      hic repellendus eligendi magnam labore iusto!
                    </p>
                    <div className="pb-5">
                      <ThumbDownAltIcon />
                      <ThumbUpIcon />
                      <ThumbDownAltOutlinedIcon />
                      <ThumbUpOutlinedIcon />
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
              <div>
                <div className="my-4 flex flex-col sm:flex-row">
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/blog-single/about_img.jpg"
                      sx={{ width: 56, height: 56 }}
                    />
                  </div>
                  <div className="pl-4">
                    <h1 className="text-2xl font-bold">Fletch Skinner</h1>
                    <p>Date and time</p>
                    <p className="py-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Inventore quia veniam corporis consequatur dolores,
                      laudantium numquam temporibus cupiditate quas facilis
                      repudiandae minima alias saepe praesentium magnam soluta
                      delectus earum dolorem. Error repudiandae suscipit atque
                      hic repellendus eligendi magnam labore iusto!
                    </p>
                    <div className="pb-5">
                      <ThumbDownAltIcon />
                      <ThumbUpIcon />
                      <ThumbDownAltOutlinedIcon />
                      <ThumbUpOutlinedIcon />
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            {/* submit comments  */}
            <div className="py-3">
              <div className="pb-4 text-white">
                <h2 className="text-3xl font-bold">Leave a Comment</h2>
                <p>
                  Your email address will not be published. You can not change
                  your name and email*
                </p>
              </div>
              <form action="">
                <div className="grid grid-cols-12 gap-4">
                  <input
                    type="text"
                    className="col-span-6 rounded-lg p-2"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="col-span-6 rounded-lg p-2"
                    placeholder="Email"
                  />
                  <textarea
                    rows="5"
                    className="col-span-12 rounded-lg p-2"
                    placeholder="Comment"
                  />
                </div>
                <button
                  type="submit"
                  className="my-3 rounded-md bg-teal-300 py-2 px-3 font-bold text-white hover:bg-teal-400"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-12 text-white md:col-span-12 lg:col-span-4">
            {/* Bloggers profile */}
            <div className="pb-3">
              <div>
                <img
                  className="border border-white p-1"
                  src="https://academy.jungtin.me/dynamic-images/w5jz66raxup_04-08-2021_03-04-26.jpeg"
                  alt=""
                />
              </div>
              <h1 className="py-2 font-sans text-4xl font-bold">Abdul Bari</h1>
              <p>
                James Bond jolly good happy days smashing barney bonnet bits and
                bobs loo.!
              </p>
            </div>
            {/* Other posts  */}
            <div className="py-6">
              <h1 className="py-3 text-2xl font-bold">Other Posts</h1>
              <div>
                <div
                  style={{ maxWidth: '450px' }}
                  className="grid grid-cols-12 gap-2 py-3"
                >
                  <div className="col-span-5">
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
                  <div className="col-span-5">
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
                  <div className="col-span-5">
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
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MainDetails
