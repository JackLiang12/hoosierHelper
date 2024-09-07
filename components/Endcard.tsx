import React from 'react';
import { IconHome, IconMessage, IconUser, IconLogin } from "@tabler/icons-react";
import Tooltip from './ui/Tooltip';

const Endcard = () => {
  return (
    <div className='bg-blue-300 w-[100vw] h-[6rem] flex justify-center items-center'>
      <Tooltip text="Home">
        <div className='h-[5rem] w-[5rem] bg-white rounded-lg hover:scale-110 ease-in-out duration-200 ml-2 mr-2 flex items-center justify-center'>
          <IconHome />
        </div>
      </Tooltip>
      <Tooltip text="Messages">
        <div className='h-[5rem] w-[5rem] bg-white rounded-lg hover:scale-110 ease-in-out duration-200 ml-2 mr-2 flex items-center justify-center'>
          <IconMessage />
        </div>
      </Tooltip>
      <Tooltip text="User Profile">
        <div className='h-[5rem] w-[5rem] bg-white rounded-lg hover:scale-110 ease-in-out duration-200 ml-2 mr-2 flex items-center justify-center'>
          <IconUser />
        </div>
      </Tooltip>
      <Tooltip text="Login">
        <div className='h-[5rem] w-[5rem] bg-white rounded-lg hover:scale-110 ease-in-out duration-200 ml-2 mr-2 flex items-center justify-center'>
          <IconLogin />
        </div>
      </Tooltip>
    </div>
  );
}

export default Endcard;
