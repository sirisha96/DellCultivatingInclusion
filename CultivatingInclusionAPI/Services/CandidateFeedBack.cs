using CultivatingInclusionAPI.DataAccess;
using CultivatingInclusionAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CultivatingInclusionAPI.Services
{
    public class CandidateFeedBack : ICandidateFeedBack
    {
        public IDataAccess _datAccess { get; }

        public CandidateFeedBack(IDataAccess datAccess)
        {
            _datAccess = datAccess;
        }
       
        public void SaveCandidateFeedback(Feedback feedback)
        {
            _datAccess.saveCandidateFeedback(feedback);
        }

        public List<Feedback> getCandidateFeedback(string id)
        {
            return _datAccess.GetFeedback(int.Parse(id));
        }

    }
}
