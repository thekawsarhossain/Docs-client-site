import Image from 'next/image'
const Testimonial = () => {
  return (
    <div>
      <>
        <section class="body-font text-gray-600">
          <div class="container mx-auto flex flex-wrap px-5 py-24 lg:w-8/12">
            <div class="-m-4 mx-auto flex  flex-wrap justify-between">
              <div class=" p-4 md:w-full lg:w-2/4 ">
                <div class="flex  flex-col p-4 sm:flex-row">
                  <div class="flex-grow ">
                    <h2 class="title-font mb-3  pr-16 text-4xl font-medium leading-normal  text-gray-900">
                      Tenderest laurent incident molesting eum placet, endue
                      ridicules? Maecenas incident aperies temporal cumquat
                      quos?
                    </h2>
                    <h4 className="font-bold text-blue-600 ">RH santo</h4>
                    <p>software developer</p>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-full  lg:w-2/5">
                <div class="flex  flex-col sm:flex-row">
                  {/* <Image src='https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/02/feedback_img-1.jpg' alt='img' width='370' height='500' ></Image> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  )
}

export default Testimonial
