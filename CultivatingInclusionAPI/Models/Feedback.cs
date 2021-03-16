using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CultivatingInclusionAPI.Models
{
    public class Feedback
    {
        public string relevantExp { get; set; }
        public int primarySkill { get; set; }
        public int secondarySkill { get; set; }
        public int problemSolvingSkill { get; set; }
        public int managerialSkill1 { get; set; }
        public int managerialSkill2 { get; set; }
        public int managerialSkill3 { get; set; }
        public int overallRating { get; set; }
        public string overallFeedback { get; set; }
        public int interviewerId { get; set; }

    }
    public class InterviewerFeedback
    {
        public int id { get; set; }
        public Feedback feedback { get; set; }
    }

    public class data
    {
        public int Id { get; set; }
    }
}
