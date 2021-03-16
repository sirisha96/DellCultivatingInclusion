export class Questionnaire {
    performanceQ: PerformanceQ = new PerformanceQ();
    managerialQ: ManagerialQ = new ManagerialQ()
}
export class PerformanceQ {
    primarySkill: number = 0
    secondarySkill: number = 0
    learningABility: number = 0;
    problemSolving: number = 0
}

export class ManagerialQ {
    teamBuilding: number = 0
    conflictResolution: number = 0
    workPlanning: number = 0
}

export class Feedback {
    relevantExp: string = '';
    primarySkill: number = 0;
    secondarySkill: number  = 0;
    problemSolvingSkill: number = 0;
    managerialSkill1: number = 0;
    managerialSkill2: number = 0;
    managerialSkill3: number = 0;
    overallRating: number = 0;
    overallFeedback: string = '';
    interviewerId: number = 0;
}