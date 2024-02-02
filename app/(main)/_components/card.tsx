import { useEffect, useState } from "react";
import * as api from '@/utils/eventApi';

interface CardProps {
  title: string;
  startDate: string;
  uuid: string;
  status: string;
  dashaId: string;
  proceedCampaign: (dashaId: string, uuid: string) => void;
  body: any;
}

export const Card = ({
  title,
  startDate,
  uuid,
  status,
  dashaId,
  proceedCampaign,
  body,
}: CardProps) => {
  const [ dashaData, setDashaData ] = useState({});
  const [ button, setButton ] = useState<string>(status);  

  const handleClick = () => {
    proceedCampaign(dashaId, uuid)
  };  

  return (
    <>
    <div className=" xl:w-[1000px] h-[140px] md:w-[700px] sm:w-[600px] xl:h-[100px] md:h-[120px] flex justify-between items-center xl:gap-x-6 gap-x-4 px-4 py-2 bg-blue-400 border border-red-200 rounded-md shadow-md">
      <div className="flex flex-col gap-y-2">
        <p>{title}</p>
        <p>{uuid} {startDate}</p>
      </div>
      <div className="flex justify-between items-center gap-x-4">
        <div role='button' className="bg-blue-300 w-32 text-center px-2 py-1 rounded-md">
          Button 1
        </div>
        <div role='button' className="bg-blue-300 w-32 text-center px-2 py-1 rounded-md" onClick={handleClick}>
          {button}
        </div>
      </div>      
    </div>
    <div dangerouslySetInnerHTML={{__html: `${body}`}} className=''></div>
    </>
  );
};