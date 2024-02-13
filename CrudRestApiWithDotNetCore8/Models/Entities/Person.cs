using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace CrudRestApiWithDotNetCore8.Models.Entities
{
    public class Person
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("family")]
        public string family { get; set; }

        [BsonElement("age")]
        public int Age { get; set; }

        [BsonElement("isDeleted")]
        public bool IsDeleted { get; set; } = false;
        [BsonElement("createDate")]
        public DateTime CreateDate { get; set; } = DateTime.Now;
    }
}
