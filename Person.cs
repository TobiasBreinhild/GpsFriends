using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GpsFriendsAgainAgain
{
    public class Person
    {
        public int Id;
        public string name;
        public float longitude;
        public float latitude;
        public bool thisIsMe;

        public Person(int Id, string name, float longitude, float latitude, bool thisIsMe)
        {
            this.Id = Id;
            this.name = name;
            this.longitude = longitude;
            this.latitude = latitude;
            this.thisIsMe = thisIsMe;
        }
    }
}