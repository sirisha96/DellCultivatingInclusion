import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavBarService } from 'src/app/shared/services/navBar-service';
import { QuestionService } from 'src/app/shared/services/questions.service';

@Component({
    selector: 'candidate-details',
    templateUrl: './candidate-details.component.html'
})

export class CandidateDetailsComponent implements OnInit {
    ngOnInit(): void {

    }
    selectionModel: any;
    comments: any;
    overallRating:any;
    id:any;
    public experienceSectionCollapsed: boolean = false;
    public personalSectionCollapsed: boolean = false;
    public FeedBackSectionCollapsed: boolean = false;
    constructor(public service: QuestionService,public route: ActivatedRoute) {
        
    }
    onSelectingInterviewerRatingDetails(value: any) {
        this.id = value.selectedIndex;
        this.service.getFeedBack(this.id).subscribe((data: any) => {
            this.comments = data[0].overallFeedback;
            this.overallRating = data[0].overallRating
        })
    }
}
