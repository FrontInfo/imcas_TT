import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ShortFeedback} from "./Interfaces/feedback";
import {catchError, Observable, throwError} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class FeedbackService {
    constructor(protected  http: HttpClient) {}


    // Faire par défaut "en" ?
    getAllFeedbacks(locale: string): Observable<ShortFeedback[]> {
        // const apiUrl = "http://api.imcas.com/v1/feedbacks";
        const apiUrl = "assets/response.json";
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
}
