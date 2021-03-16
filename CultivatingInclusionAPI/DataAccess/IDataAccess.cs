using CultivatingInclusionAPI.Models;
using System.Collections.Generic;

namespace CultivatingInclusionAPI.DataAccess
{
    public interface IDataAccess
    {
        public List<Feedback> GetFeedback(int id);
        public void saveCandidateFeedback(Feedback feedback);
    }
}