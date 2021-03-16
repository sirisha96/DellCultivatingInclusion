using CultivatingInclusionAPI.Models;
using CultivatingInclusionAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CultivatingInclusionAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateFeedbackController : ControllerBase
    {
        public ICandidateFeedBack _feedbackService { get; }
        public CandidateFeedbackController(ICandidateFeedBack feedbackService)
        {
            _feedbackService = feedbackService;
        }

        [HttpGet]
        public string Get()
        {
            return "Welcome to Cultivating Inclusion API";
        }

        [HttpPost]
        [Route("SaveFeedback")]
        public IActionResult SaveCandidateFeedBack([FromBody]Feedback feedBack)
        {
           // feedbackObj.feedback.interviewerId = feedbackObj.id;
            _feedbackService.SaveCandidateFeedback(feedBack);
            return Ok();
        }

        [HttpPost]
        [Route("GetFeedback")]
        public IActionResult GetCandidateFeedBack([FromBody]data data)
        {
            var feedback = _feedbackService.getCandidateFeedback(data.Id.ToString());
            return Ok(feedback);
        }
    }
}
