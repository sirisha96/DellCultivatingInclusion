using CultivatingInclusionAPI.Models;
using Dapper;
using Microsoft.Data.Sqlite;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System;
using System.Threading.Tasks;

namespace CultivatingInclusionAPI.DataAccess
{
    public class SqliteDataAccess : IDataAccess
    {
        public void saveCandidateFeedback(Feedback feedback)
        {
            using (IDbConnection con = new SqliteConnection(getCnnnectionString()))
            {
                con.Open();
                SQLitePCL.raw.SetProvider(new SQLitePCL.SQLite3Provider_dynamic_cdecl());
                string command = @"INSERT INTO tblInterviewFeedback (relevantExp,primarySkill,secondarySkill,problemSolvingSkill,managerialSkill1,managerialSkill2,managerialSkill3,overallRating,overallFeedback,interviewerId) " +
                    "VALUES (@relevantExp,@primarySkill,@secondarySkill,@problemSolvingSkill,@managerialSkill1,@managerialSkill2,@managerialSkill3,@overallRating,@overallFeedback, @interviewerId)";
                con.Execute(command, feedback);

            }
        }

        public List<Feedback> GetFeedback(int id)
        {
            if(id == 0)
            {
                id = 1;
            }
            using (IDbConnection con = new SqliteConnection(getCnnnectionString()))
            {
                string com = $"select * from tblInterviewFeedback where interviewerId = {id}";
                var output = con.Query<Feedback>(com, new DynamicParameters());
                return output.ToList();
            }
        }

        private static string getCnnnectionString()
        {
            string connectionString = @"Data Source=.\testDb.db;";
            return connectionString;
        }

    }
}
