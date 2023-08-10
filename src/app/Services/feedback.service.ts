import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Infos, LongFeedback, ShortFeedback} from "./Interfaces/feedback";
import {catchError, Observable, throwError} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class FeedbackService {
    constructor(protected  http: HttpClient) {}

    getAllFeedbacks(locale: string): Observable<ShortFeedback[]> {
        const apiUrl = "http://api.imcas.com/v1/feedbacks";
        return this.http.get(apiUrl).pipe(
            catchError((error: any) => throwError(error)),
            map((response: any)=> {
                return response.data.map((item:any) => {
                        const congressBadge =  item.user.badges.find((badge: any) => badge.group === "CongressParticipation");
                        const feedback = item.translations.find((feedback: any) => feedback.locale === locale);
                        const specialty = item.user.specialty.translations.find((specialty: any) => specialty.locale === locale);
                        const newItem: ShortFeedback = {
                            id: item.id,
                            fullname: item.user.fullname,
                            picture_url: item.user.picture_url,
                            congressParticipation: congressBadge ? congressBadge.title : "",
                            country:  item.user.country ? item.user.country.translations.find((country:any) => country.locale === locale).name : "",
                            feedback: feedback ? feedback.content: "",
                            specialty: specialty ? specialty.name : ""
                        };
                        return newItem;
                });
            })
        );
    }

    getFeedbackById(id: number, locale: string): Observable<LongFeedback> {
        const apiUrl = `http://api.imcas.com/v1/feedbacks/${id}`;
        return this.http.get(apiUrl).pipe(
            catchError((error: any) => throwError(error)),
            map((response: any) => {
                const congressBadge =  response.user.badges.find((badge: any) => badge.group === "CongressParticipation");
                const feedback = response.translations.find((feedback: any) => feedback.locale === locale);
                const specialty = response.user.specialty.translations.find((specialty: any) => specialty.locale === locale);
                const videosW = response.user.badges.find((badge: any) => badge.group === "VideosWatched");
                const videosT = response.user.badges.find((badge: any) => badge.group === "WatchTime");
                const videosP = response.user.badges.find((badge: any) => badge.group === "VideosPublished");
                const yearSub = response.user.badges.find((badge: any) => badge.group === "YearlySubscriptions");
                const webP = response.user.badges.find((badge: any) => badge.group === "WebinarParticipations");
                let details: Array<Infos> = [];
                const congressAttends = response.user.badges.filter((badge: any) => badge.group === "CongressParticipation");
                if (congressAttends && congressAttends.length > 0) {
                    let value: string = congressAttends[0].title;
                    for(let i = 1; i < congressAttends.length; i++) {
                        value = value.concat('\n', congressAttends[i].title)
                    }
                    details.push({title: 'CONGRESS', value: value, color: "#fff"})
                }
                if (congressBadge){
                    details.push({title: 'CONGRESS-TIME', value: congressBadge.threshold,  keyWord: 'TIMES',color: congressBadge.color });
                }
                if (videosW) {
                        details.push({title: 'VIDEOS-W', value: videosW.threshold, color: videosW.color});
                }
                if (videosT) {
                    details.push({title: 'VIDEOS-T', value: videosT.threshold, keyWord: 'MIN', color: videosT.color});
                }
                if (videosP) {
                        details.push({title: 'VIDEOS-P', value: videosP.threshold, color: videosP.color});
                }
                if (webP) {
                       details.push({title: 'WEBINAR-P', value: webP.threshold, keyWord: 'TIMES', color: webP.color});
                }
                if (yearSub) {
                        details.push({title: 'SUBSCRIPTION', value: yearSub.threshold,  keyWord: 'YEAR', color: yearSub.color});
                }

                let feedbackItem: LongFeedback = {
                    id: response.id,
                    fullname: response.user.fullname,
                    picture_url: response.user.picture_url,
                    congressParticipation: congressBadge ? congressBadge.title : "",
                    country:  response.user.country ? response.user.country.translations.find((country:any) => country.locale === locale).name : "",
                    feedback: feedback ? feedback.content: "",
                    specialty: specialty ? specialty.name : "",
                    phone: response.user.phone,
                    details: details,
                };
                return feedbackItem;
            })
        )
    }
}
