using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace CrudRestApiWithDotNetCore8.Models.Dtos
{
    public class UpdatePersonDto
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string family { get; set; }

        public int Age { get; set; }

        public bool IsDeleted { get; set; }
    }
}
