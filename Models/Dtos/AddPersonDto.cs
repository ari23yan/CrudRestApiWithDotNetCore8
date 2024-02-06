using MongoDB.Bson.Serialization.Attributes;

namespace CrudRestApiWithDotNetCore8.Models.Dtos
{
    public class AddPersonDto
    {
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("family")]
        public string family { get; set; }

        [BsonElement("age")]
        public int Age { get; set; }
    }
}
