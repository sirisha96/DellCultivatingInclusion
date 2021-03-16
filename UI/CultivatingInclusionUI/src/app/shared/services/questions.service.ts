import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class QuestionService {

    constructor(public http: HttpClient) {

    }

    public addQuestion() {

    }

    public editQuestion() {

    }

    private openQuestion() {

    }

    public saveFeedBack(feedBack: any) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post("https://localhost:44348/api/CandidateFeedback/SaveFeedback", feedBack, { headers })
    }

    public getFeedBack(id: number) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        var data = { Id: id };
        return this.http.post("https://localhost:44348/api/CandidateFeedback/GetFeedback", data, { headers });
    }
}
