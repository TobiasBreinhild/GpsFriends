using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace GpsFriendsAgainAgain
{
    public partial class AjaxModtager : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string OnSubmit(string name, string longitude, string latitude, int thisIsMe)
        {
            return "Name: " + name + "\nLongitude: " + longitude + "\nLatitude: " + latitude + "\nthisIsMe: " + thisIsMe;
        }

    }
}