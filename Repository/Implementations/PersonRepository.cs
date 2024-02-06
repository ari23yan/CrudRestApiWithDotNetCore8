using CrudRestApiWithDotNetCore8.Models.Entities;
using CrudRestApiWithDotNetCore8.Repository.Interfaces;
using MongoDB.Driver;
using System;

namespace CrudRestApiWithDotNetCore8.Repository.Implementations
{
    public class PersonRepository : IPersonRepository
    {
        private readonly IMongoCollection<Person> _personCollection;

        public PersonRepository(IMongoDatabase mongoDatabase)
        {
            _personCollection = mongoDatabase.GetCollection<Person>("person");
        }

        public async Task<List<Person>> GetAllAsync()
        {
            return await _personCollection.Find(_ => true).ToListAsync();
        }

        public async Task<Person> GetByIdAsync(string id)
        {
            return await _personCollection.Find(_ => _.Id == id).FirstOrDefaultAsync();
        }

        public async Task<bool> CreatePersonAsync(Person person)
        {
            try
            {
                await _personCollection.InsertOneAsync(person);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> UpdatePersonAsync(Person person)
        {

            try
            {
                await _personCollection.ReplaceOneAsync(x => x.Id == person.Id, person);

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> DeletePersonAsync(string id)
        {
            try
            {
                var filter = Builders<Person>.Filter.Eq(x => x.Id, id);
                var update = Builders<Person>.Update.Set(x => x.IsDeleted, true);
                await _personCollection.UpdateOneAsync(filter, update);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }
    }
}
