/* eslint-disable @next/next/no-img-element */
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const ImageWidget = () => {
  return (
    <div>
      <h2>Image  Widget</h2>
      <div className=" flex my-6 items-center">
     <AccessTimeIcon sx={{fontSize:'16px'}}/> 
     <p className="ml-2">Estimated reading: 1 minute <RemoveRedEyeIcon sx={{fontSize:'16px',ml:4}} /> 110 views </p>
     </div>
     <div className="img-info ">
       <p className='my-16'>A Dashboard is a convenient way to get an overview of the the current status of your tasks and monitorthe progress of your team.</p>

       <img className='border' src="https://files.betamax.raywenderlich.com/attachments/collections/252/21eba593-edd9-47bb-b8af-4f5d5d97e3c1.png" alt="" />


       <h3 className='my-16'></h3>
       {/* <img src="https://koenig-media.raywenderlich.com/uploads/2020/05/WidgetTesting-feature.png" alt="" /> */}
       
     </div>
    </div>
  );
}

export default ImageWidget;