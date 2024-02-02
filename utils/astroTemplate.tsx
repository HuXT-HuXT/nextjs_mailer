import {
  Body,
  Button,
  Container,
  Column,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,  
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import { url } from 'inspector';
import { Roboto } from 'next/font/google';
import * as React from 'react';

interface AstroProps {
  agenda: [string] | null;
  agendaTitle: string | null;
  banner: string;  
  description: string | null;
  discountPercent: number | null;
  subject: string | null;
  sendDatetime: string | null;
  endDate: string | null;
  endTime: string;
  eventType: string;
  price: number | null;
  procurementPrice: number | null;
  registrationUrl: string;
  firstName: string;
  lastName: string;
  lastNameGenitive: string;
  middleName: string;
  photo: string;
  regalia: string;
  startDate: string;
  startTime: string;  
  title: string;
  upcomingEvents?: [string];
  uuid: string;
}

export const AstroTemplate = ({
  agenda,
  agendaTitle,
  banner,  
  description,
  discountPercent,
  subject,
  sendDatetime,  
  endDate,
  endTime,
  eventType,
  price,
  procurementPrice,
  registrationUrl,
  firstName,
  lastName,
  lastNameGenitive,
  middleName,
  photo,
  regalia,  
  startDate,
  startTime,  
  title,
  upcomingEvents,
  uuid,
}: AstroProps) => {

  // console log party
  
  let descriptionSwitcher: boolean = false;

  if (agenda === null) {
    descriptionSwitcher = true;
  }

  const name: string = firstName.split('')[0] + '. ' + middleName.split('')[0] + '. ' + lastNameGenitive;
  const month: any = startDate;
  const convertedDate = startDate.split('-')[2] + ' ' + ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'][month.split('-')[1] - 1];
  const beginTime = startTime.split(':')[0] + ':' + startTime.split(':')[1];
  const finishTime = endTime.split(':')[0] + ':' + endTime.split(':')[1];

  const blackTextL = 'text-[#000] text-[18px] leading-6';
  const blackTextBoldL = `${blackTextL} font-bold`;
  const blackTextXXL = 'text-[#000] text-[26px] leading-10';
  const blackTextMediumXXL = `${blackTextXXL} font-medium`;
  const normalText = 'text-[#000] text-l leading-5';
  const boldText = `${normalText} font-bold`;
  const spacingForText = 'mx-0 my-[13px] pl-[26px] pr-[20px]';
  const divider = 'border-[2px] border-solid border-[#dddddd] my-[15px]';
  const grayTextM = 'text-center text-[#555] text-[13px] font-light leading-4'
  const grayTextL = 'text-center text-[#555] text-[16px] font-light leading-5';
  const grayTextXL = 'text-center text-[#555] text-[20px] leading-5';  
  const redTextXXL = 'text-[#a64d79] text-[26px] font-semibold leading-7';
  const redTextXL = 'text-[#a64d79] text-[22px] font-semibold leading-6';
  const whiteTextL = 'text-[#fff] text-[16px] leading-5';
  const whiteTextSemiBoldL = `${whiteTextL} font-medium`;
  const whiteTextM = 'text-[#fff] text-[13px] leading-4';

  const arrayForDescription: Array<string> = [];

  if (agenda === null && description !== null) {
    const splitted = description.split('\n');
    for (let i: number = 0; i < splitted.length; i++) {
      if (splitted[i] === '') {
        continue;
      }
      arrayForDescription.push(splitted[i]);
    };
  };

  const descriptionBlock = arrayForDescription.map((item, index) => {
    return (
      <Text className='m-0 py-[13px] px-[20px] text-lg leading-6' key={index}>{item}</Text>
    );
  });

  let agendaBlock;

  if (description === null && agenda !== null) {    
    agendaBlock = agenda.map((item, index) => {
      const bold = item.search(/\*\*/);
      if (bold === 0) {
        item = item.replace(/\*\*/g, '');
      }
      return (
        <Section key={index}>
          <Row className='pb-[6px]'>
            <Column align='left' className='w-[25px]'>
              <Img 
                src='https://cdn.astramed.org/mailout/img/mark.png'
                width='25'
                height='25'
                alt='check'
                className='ml-[20px] mr-[14px] p-0'
              />
            </Column>          
            <Column >
              <Text className={bold === -1 ? `${normalText} ${spacingForText}`  : `${boldText} ${spacingForText}`}>{item}</Text>
            </Column>
          </Row>
        </Section>
      )
    });
  };

  const RegButton = ({message}: any) => {
    return (
      <Section className='text-center mt-[25px] mb-[15px]'>
        <Button
          className='bg-[#a64d79] px-[35px] py-[10px] text-xl align-middle text-white'
          href={registrationUrl}
        >
          {message}
        </Button>
      </Section>
    );
  };

  const lang = 'ru';

  return (
    <Html lang={lang} dir="ltr">
      <Head>        
      </Head>
      <Tailwind>
        <Body style={{
          fontFamily: 'Nunito',
        }} className='my-auto mx-auto text-black'>
          <Container className='bg-white max-w-[600px]'>
            <Section>
              <Row>
                <Column align='left'>
                  <Text className='text-[#000] font-bold text-xl leading-6 px-[20px]'>Добрый день!</Text>
                </Column>
                <Column align='right'>
                  <Img src='https://cdn.astramed.org/mailout/img/logo.png' width='150' height='auto' className='px-4'/>
                </Column>
              </Row>
            </Section>
            <Section>
              <Link href={registrationUrl}>
                <Img src={banner} alt='Invitation' width='600' className='mx-auto'/>
              </Link>
            </Section>
            <Section className='mx-[20px] my-[15px]'>
              <Text className={`${blackTextL} m-0 pt-[10px]`}>Приглашаем Вас посетить {eventType} {name}</Text>
              <Text className={`${blackTextBoldL} m-0 pb-[8px]`}>«{title}».</Text>
              <Text className={`${blackTextL} m-0 pb-[10px]`}>Он состоится <strong>{convertedDate}</strong> с {beginTime} до {finishTime} (МСК).</Text>
            </Section>
            <RegButton message='Зарегистрироваться на вебинар'/>
            <Section className='w-[94%] px-5'>
              <Hr className={divider}/>
            </Section>
            <Section className='mt-[10px] mb-[5px]'>              
              {descriptionSwitcher ? (
                  descriptionBlock
                ) : (
                  <Section>
                    <Text className={`${blackTextMediumXXL} pl-[20px]` }>{agendaTitle}</Text>
                    {agendaBlock}
                  </Section>
              )}
            </Section>
            <Section className='w-[94%] px-5'>
              <Hr className={divider}/>
            </Section>
            <Section>
              <Text className={`${redTextXXL} text-center pt-[15px] pb-[8px]`}>
                Спикер
              </Text>
              <Img
                src={photo}
                width='150'
                height='150'
                alt='Speaker'
                className='mx-auto rounded-full mb-[8px]'
              />
            </Section>
            <Text className={`m-0 pb-[8px] ${grayTextXL} italic`}>{firstName} {middleName} {lastName}</Text>
            <Text className={`m-0 ${grayTextL} pb-[15px]`}>{regalia}</Text>
            <Section className='w-[94%] px-5'>
              <Hr className={divider}/>
            </Section>
            {price ? (
              <>
                <Text className={`${redTextXXL} text-center m-0 pt-[15px] pb-[5px]`}>Стоимость {price} рублей</Text>
                <Text className={`${redTextXL} text-center m-0 pb-[8px]`}>или закупка препаратов на {procurementPrice} рублей</Text>
              </>
            ) : (
              <Text className={`${redTextXXL} text-center m-0 pt-[15px] pb-[5px]`}>{eventType.charAt(0).toUpperCase() + eventType.slice(1)} бесплатный</Text>
            )}
            <Text className={`${grayTextL} text-center m-0 pt-[5px] pb-[15px] px-[20px]`}>Предоставляется скидка на продукцию {discountPercent}% при покупке на вебинаре</Text>
            <RegButton message='Зарегистрироваться'/>
            <Section className='bg-[#bbb] font-white'>
              <Text className={`${whiteTextSemiBoldL} m-0 text-center pt-[15px] pb-[10px]`}>ООО «АСТРАМЕД»</Text>
              <Text className={`${whiteTextM} m-0 text-center`}>+7 499 707-75-18</Text>
              <Text className={`${whiteTextM} m-0 text-center pb-[3px]`}>+7 985 784-01-11</Text>
              <Text className={`${whiteTextM} m-0 text-center pb-[8px]`}>Москва, ул. Маршала Бирюзова д. 32 к.1</Text>
              <Link href='https://astramed.org/'>
                <Text className={`${whiteTextM} m-0 text-center underline underline-offset-4`}>astramed.org</Text>
              </Link>
              <Section className='my-[15px]'>
                <Row className='w-[168px]'>
                  <Column align='right' className='m-0 w-[56px]'>
                    <Button href='https://vk.com/club208722722'>
                      <Img
                        width='56'
                        height='56'
                        src='https://cdn.astramed.org/mailout/img/vk.png'
                        alt='VK'
                      />
                    </Button>
                  </Column>
                  <Column align='center' className='w-[56px]'>
                    <Button href='https://www.youtube.com/channel/UCeX__pLKfbU5UKqbQnva5Mg'>
                      <Img
                        width='56'
                        height='56'
                        src='https://cdn.astramed.org/mailout/img/yt.png'
                        alt='youtube'
                      />
                    </Button>
                  </Column>
                  <Column align='left' className='m-0 w-[56px]'>
                    <Button href='https://t.me/pro_age_school'>
                      <Img
                        width='56'
                        height='56'
                        src='https://cdn.astramed.org/mailout/img/tg.png'
                        alt='youtube'
                      />
                    </Button>
                  </Column>
                </Row>
              </Section>              
            </Section>
            <Section className='bg-transparent'>
              <Text className={`${grayTextM} m-0 pt-[15px] pb-[8px] px-[20px] text-center`}>Вы получили эту рассылку, т. к. участвовали в мероприятиях компании «АСТРАМЕД»</Text>
              <Link href='%ОТПИСАТЬСЯ%'>
                <Text className='m-0 pb-[23px] text-[#00f] text-center text-[13px] leading-4 underline underline-offset-2'>Отписаться</Text>
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
};