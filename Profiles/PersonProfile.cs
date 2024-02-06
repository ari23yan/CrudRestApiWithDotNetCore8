using AutoMapper;
using CrudRestApiWithDotNetCore8.Models.Dtos;
using CrudRestApiWithDotNetCore8.Models.Entities;

namespace CrudRestApiWithDotNetCore8.Profiles
{
    public class PersonProfile: Profile
    {
        public PersonProfile()
        {
           CreateMap<Person, AddPersonDto>().ReverseMap();
           CreateMap<Person, UpdatePersonDto>().ReverseMap();
        }
    }
}
