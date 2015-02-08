using System.ComponentModel.DataAnnotations;

namespace MvcSample.Web.Models
{
    public class User
    {
      public string FirstName
      {
	get; set;
      }

        [Required]
        [MinLength(4)]
        public string Name { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }

      public override string ToString()
      {
	return "First Name: " + this.FirstName +
	  ", Last Name: " + this.Name;
      }
    }
}