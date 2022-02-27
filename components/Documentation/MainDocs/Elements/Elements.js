/* eslint-disable @next/next/no-img-element */
 import AccessTimeIcon from '@mui/icons-material/AccessTime';
 import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const Elements = () => {
  return (
    <div className='pl-4'>
      <h2>Elements</h2>
      <img src="https://document360.com/wp-content/uploads/2020/11/Software_documentation-Document360-scaled.jpg" alt="" />
      <div className=" flex my-6 items-center">
     <AccessTimeIcon sx={{fontSize:'16px'}}/> 
     <p className="ml-2">Estimated reading: 1 minute <RemoveRedEyeIcon sx={{fontSize:'16px',ml:4}} /> 110 views </p>
     </div>
     <div className="description leading-loose ">
       <p>You can edit your element instance or re-authenticate with an API provider. If you just need to change basic information about the element, you can update without re-authenticating. However, if you need to add events or update some configuration value, you must re-authenticate.</p>

       <p className='mt-12'> <span className='text-indigo-500'>
         Transfer type, level of assistance, cues, equipment, and </span>outcome should all be noted in the Docs record as an objective finding.

         span These elements are objective because they are performed and measured in a standardized way and are repeatable.</p>
       
     
     </div>
    </div>
  );
}

export default Elements;