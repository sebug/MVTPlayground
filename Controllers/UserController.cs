using Microsoft.AspNet.Mvc;
using MvcSample.Web.Models;

namespace MvcSample.Web
{
  public class UserController : Controller
  {
    [HttpPost]
    public JsonResult SaveUser([FromBody] User model)
    {
      	System.Console.WriteLine("The First name is: " + model.FirstName);
        return Json("Response");
    }
  }
}