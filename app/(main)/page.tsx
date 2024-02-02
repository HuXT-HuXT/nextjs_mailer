'use client';

import { useEffect, useState } from "react";
import { Card } from "./_components/card";
import { IEventsProps, IEventsPropAttributes } from "@/types/IEventsProps";
import * as api from '@/utils/eventApi';

export default function Home() {
  const  [ isMounted, setIsMounted ] = useState(false);

  interface CardFields {
    startDate: string;
    title: string;
    uuid: string;
    body: string;
  }

  const [ cards, setCards ] = useState<{}[]>([]);

  useEffect(() => {
    setIsMounted(true);    
  }, []);

  useEffect(() => {
    setCards([]);
    api.getEvents()
      .then((data: {}[]) => {        
        setCards(data);        
      })
    
  }, [])

  if (!isMounted) {
    return null;
  }

  const proceedCampaign = async (dashaId: string, uuid: string) => {
    if (dashaId === 'none') {
      const letter: {}[] = cards.filter((entry: Record<string, string>) => entry.uuid === uuid);
      console.log(letter);

      // api.scheduleCampaign(letter[0])
      //   .then((data) => {
      //     if (data.err_code === 0) {
      //       return api.getCampaignStatus()
      //     }
      //   })
    }
  };

  return (
    <div className="h-full flex flex-col gap-y-2 items-center bg-blue-300 pt-4">
      {cards.map((card: Record<string, string>) => (
        <Card
          key={card.uuid}
          title={card.title}
          startDate={card.sendDatetime}
          uuid={card.uuid}
          dashaId={card.dashaId}
          status={card.status}
          proceedCampaign={proceedCampaign}
          body = {card.body}
        />
      ))}
    </div>
  );
};
