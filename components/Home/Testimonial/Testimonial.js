import Image from 'next/image'
const Testimonial = () => {
  return (
    <div>
     
     <>
 <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 lg:w-8/12 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -m-4  mx-auto justify-between">
      <div class=" p-4 lg:w-2/4 md:w-full ">
        <div class="flex  p-4 sm:flex-row flex-col">  
          <div class="flex-grow ">
            <h2 class="text-gray-900 pr-16  text-4xl leading-normal title-font font-medium  mb-3">Tenderest laurent incident molesting eum placet, endue ridicules? Maecenas
         incident aperies temporal cumquat quos?</h2>
         <h4 className='text-blue-600 font-bold '>RH santo</h4>
         <p>software developer</p>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-2/5  md:w-full">
        <div class="flex  sm:flex-row flex-col">
         <Image src='https://wordpress-theme.spider-themes.net/docy-dark/wp-content/uploads/2021/02/feedback_img-1.jpg' alt='img' width='370' height='500' ></Image>
        </div>
      </div>
    </div>
  </div>
</section>
     </>
    </div>
  );
}

export default Testimonial;