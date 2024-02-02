export interface IEventsProps {
    id:         number;
    attributes: IEventsPropAttributes;
}

export interface IEventsPropAttributes {
    title:               string;
    start_time:          string;
    end_time:            string;
    event_type:          string;
    registration_url:    string;
    agenda:              null | string;
    agenda_title:        null | string;
    price:               number | null;
    procurement_price:   null;
    discount_percent:    number;
    email_subject:       string;
    email_send_datetime: Date;
    createdAt:           Date;
    updatedAt:           Date;
    publishedAt:         Date;
    start_date:          Date;
    end_date:            null;
    uuid:                string;
    description:         null | string;
    speaker:             Speaker;
    banner:              Banner;
}

export interface Banner {
    data: BannerData;
}

export interface BannerData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          Provider;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    Jpg = ".jpg",
    PNG = ".png",
}

export interface Formats {
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    name:   string;
    hash:   string;
    ext:    EXT;
    mime:   MIME;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
}

export enum Provider {
    AwsS3 = "aws-s3",
}

export interface Speaker {
    data: SpeakerData;
}

export interface SpeakerData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    first_name:         string;
    last_name:          string;
    createdAt:          Date;
    updatedAt:          Date;
    publishedAt:        Date;
    middle_name:        string;
    regalia:            string;
    last_name_genitive: string;
    photo:              Banner;
}
