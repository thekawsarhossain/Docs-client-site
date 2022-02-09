import Image from 'next/image'
const Testimonial = () => {
  return (
    <div>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-wrap px-5 py-24 lg:w-8/12">
          <div className="-m-4 mx-auto flex  flex-wrap justify-between">
            <div className=" p-4 md:w-full lg:w-2/4 ">
              <div className="flex  flex-col p-4 sm:flex-row">
                <div className="flex-grow ">
                  <h2 className="title-font mb-3  pr-16 text-4xl font-medium leading-normal  text-gray-900">
                    Tenderest laurent incident molesting eum placet, endue
                    ridicules? Maecenas incident aperies temporal cumquat quos?
                  </h2>
                  <h4 className="font-bold text-blue-600 ">RH santo</h4>
                  <p>software developer</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-full  lg:w-2/5">
              <div className="flex  flex-col sm:flex-row">
                {/* <Image src='https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/02/feedback_img-1.jpg' alt='img' width='370' height='500' ></Image> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonial
