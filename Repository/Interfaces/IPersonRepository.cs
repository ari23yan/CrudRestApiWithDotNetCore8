using CrudRestApiWithDotNetCore8.Models.Entities;

namespace CrudRestApiWithDotNetCore8.Repository.Interfaces
{
    public interface IPersonRepository
    {
        Task<List<Person>> GetAllAsync();
        Task<Person> GetByIdAsync(string id);
        Task<bool> CreatePersonAsync(Person person);
        Task<bool> UpdatePersonAsync(Person person);
        Task<bool> DeletePersonAsync(string id);



    }
}
