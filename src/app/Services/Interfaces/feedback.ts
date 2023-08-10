export interface ShortFeedback {
    id: number,
    fullname: string,
    picture_url: string,
    country: string,
    congressParticipation: string,
    specialty: string
    feedback: string
}

export interface  Infos {
    title: string,
    value: string,
    keyWord?: string,
    color: string
}

export interface LongFeedback extends ShortFeedback {
    phone: string,
    details: Array<Infos>
}
