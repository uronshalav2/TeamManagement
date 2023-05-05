﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using TeamManagement.Models;
namespace TeamManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public TeamsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
          public JsonResult Get()
         {
            string query = @"select TeamId, Name, Description from dbo.Teams ";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("DataConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Teams dep)
        {
            string query = @"insert into dbo.Teams values (@Name,@Description)";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("DataConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Name", dep.Name);
                    myCommand.Parameters.AddWithValue("@Description", dep.Description);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Succesfully");
        }
        [HttpPut]
        public JsonResult Put(Teams dep)
        {
            string query = @"update dbo.Teams set Name=@Name where Description=@Description";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("DataConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Name", dep.Name);
                    myCommand.Parameters.AddWithValue("@Description", dep.Description);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Succesfully");
        }
        [HttpDelete]
        public JsonResult Delete(int id)
        {
            string query = @"delete from dbo.Teams where TeamId=@TeamId";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("DataConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@TeamId",id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Succesfully");
        }
    }



}
