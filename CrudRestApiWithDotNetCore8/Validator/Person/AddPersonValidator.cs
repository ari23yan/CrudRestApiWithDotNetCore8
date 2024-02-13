using CrudRestApiWithDotNetCore8.Models.Dtos;
using FluentValidation;

namespace CrudRestApiWithDotNetCore8.Validator.Person
{
    public class AddPersonValidator: AbstractValidator<AddPersonDto>
    {
        public AddPersonValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Age).ExclusiveBetween(8,50).NotEmpty();
            RuleFor(x => x.Family).NotEmpty();
        }
    }
}
