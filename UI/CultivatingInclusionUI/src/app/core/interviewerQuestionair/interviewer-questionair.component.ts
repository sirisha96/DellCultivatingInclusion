import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/shared/services/navBar-service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { Feedback, ManagerialQ, PerformanceQ } from 'src/app/shared/models/questionnair-model';
import * as Survey from "survey-angular";
import "survey-angular/modern.css";
import { QuestionService } from 'src/app/shared/services/questions.service';
import { ActivatedRoute } from '@angular/router';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

Survey.StylesManager.applyTheme("default");
var myCss = {
    matrix: {
        root: "table table-striped",

    },
    navigationButton: "button btn-lg",

};

@Component({
    selector: 'interviewer-feedback',
    templateUrl: './interviewer-questionair.component.html',
    styleUrls: ['./Interviewer-questionair.component.css']
})


export class InterviewerQuestionairComponent implements OnInit {
    //public questionnairForm: FormGroup;
    public technicalSkillsSectionCollapsed: boolean = false;
    public managerialSkillsSectionCollapsed: boolean = false;
    public experienceSectionCollapsed: boolean = false;
    public personalSectionCollapsed: boolean = false;
    showNavBar: boolean = false;
    id:any;
   
    json: any;

    constructor(public service :QuestionService,public route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.id = +params['id']; 
         });
    }

    ngOnInit(): void {
        this.json = {
            "pages": [
                {
                    "name": "page1",
                    "elements": [
                        {
                            "type": "panel",

                            "name": "panel1",
                            "title": "Rate Candidate Technical Skills",
                            "state": "collapsed",
                            "questions": [
                                {
                                    type: "radiogroup",
                                    name: "relevantExp",
                                    title: "Does the candidate have required skillset for this role?",
                                    isRequired: true,
                                    colCount: 2,
                                    choices: [
                                        "Yes",
                                        "No"
                                    ]
                                },
                                {
                                    type: "radiogroup",
                                    name: "primarySkill",
                                    title: "If yes, Please rate the Primary skill of the candidate ",
                                    isRequired: true,
                                    colCount: 5,
                                    choices: [
                                        1,2,3, 4,5
                                    ]
                                }, {
                                    type: "radiogroup",
                                    name: "secondarySkill",
                                    title: "Please rate the Secondary skill of the candidate ",
                                    isRequired: true,
                                    colCount: 5,
                                    choices: [
                                        1,2,3, 4,5
                                    ]
                                },
                                {
                                    type: "radiogroup",
                                    name: "problemSolvingSkill",
                                    title: "Rate problem solving ability of the candidate (4 being excellent and 1 being least )  ",
                                    isRequired: true,
                                    colCount: 5,
                                    choices: [
                                        1,2, 3, 4,5
                                    ]
                                }]
                        },
                        {
                            "type": "panel",
                            "name": "panel2",
                            "state": "collapsed",
                            "title": "Rate Candidate Behavioral Skills",
                            "questions": [                                
                                {
                                    type: "radiogroup",
                                    name: "managerialSkill1",
                                    title: "Rate learning ability of the candidate (5 being excellent and 1 being least ) ",
                                    isRequired: true,
                                    colCount: 5,
                                    choices: [
                                        1,2, 3, 4,5
                                    ]
                                }, 
                                {
                                    type: "radiogroup",
                                    name: "managerialSkill2",
                                    title: "Rate responsiveness of the candidate (5 being excellent and 1 being least )  ",
                                    isRequired: true,
                                    colCount: 5,
                                    choices: [
                                        1,2, 3, 4,5
                                    ]
                                },
                                {
                                    type: "radiogroup",
                                    name: "managerialSkill3",
                                    title: "Rate team building ability of the candidate (5 being excellent and 1 being least )  ",
                                    isRequired: true,
                                    colCount: 5,
                                    choices: [
                                        1,2, 3, 4,5
                                    ]
                                }]
                        },
                        {
                            type: "rating",
                            name: "overallRating",
                            title: "Overall Rating",
                            minRateDescription: "Not Satisfied",
                            maxRateDescription: "Completely satisfied"
                        },
                        {
                            type: "comment",
                            name: "overallFeedback",
                            title: "Please provide comments supporting the above ratings",
                            isRequired: true,
                            validators: [
                                {
                                    type: "text",
                                    minLength: 20
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        const survey = new Survey.Model(this.json);
        survey.completedHtml = "Thanks for Submitting the feedback";
        survey.onComplete.add((result, options) => {
            
            var feedBack:Feedback =  result.data;
            feedBack.interviewerId = this.id;
            console.log(JSON.stringify(feedBack));
            this.service.saveFeedBack(feedBack);
        });

        survey.completeText = "Submit";


        Survey.SurveyNG.render("surveyElement", { model: survey, css: './Interviewer-questionair.component.css' });
        
    }

}

