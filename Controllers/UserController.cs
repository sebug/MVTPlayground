using Microsoft.AspNet.Mvc;
using MvcSample.Web.Models;

namespace MvcSample.Web
{
  public class UserController : Controller
  {
      public User LoadUser()
      {
	return new User() 
	  {
	    FirstName = "Sebastian",
	      Name = "Gfeller",
	      Address = "My address"
	  };
      }

    [HttpPost]
    public JsonResult SaveUser([FromBody] User model)
    {
      System.Console.WriteLine(model);
        return Json("Response");
    }
  }
}