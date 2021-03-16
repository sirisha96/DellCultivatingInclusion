using CultivatingInclusionAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CultivatingInclusionAPI.Services
{
    public interface ICandidateFeedBack
    {
        void SaveCandidateFeedback(Feedback feedback);
        List<Feedback> getCandidateFeedback(string id);
    }
}
