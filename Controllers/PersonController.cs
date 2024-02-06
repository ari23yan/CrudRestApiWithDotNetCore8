using AutoMapper;
using CrudRestApiWithDotNetCore8.Models.Dtos;
using CrudRestApiWithDotNetCore8.Models.Entities;
using CrudRestApiWithDotNetCore8.Repository.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CrudRestApiWithDotNetCore8.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IPersonRepository _personRepository;
        private protected IMapper _mapper;

        public PersonController(IPersonRepository personRepository, IMapper mapper)
        {
            _personRepository = personRepository;
            _mapper = mapper;   
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var persons = await _personRepository.GetAllAsync();
                return Ok(persons);
            }
            catch (Exception ex)
            {
                throw;
            }
      
        }
        [HttpGet]
        public async Task<IActionResult> GetPerson([FromQuery] string id)
        {
            try
            {
                var person = await _personRepository.GetByIdAsync(id);
                if (person == null)
                {
                    return NotFound();
                }
                return Ok(person);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        [HttpPost]
        public async Task<IActionResult> AddPerson([FromForm] AddPersonDto request)
        {
            try
            {   
                var person = _mapper.Map<AddPersonDto, Person>(request);
                var result = await _personRepository.CreatePersonAsync(person);
                if (!result)
                {
                    return BadRequest();
                }
                return Ok(person);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        [HttpPut]
        public async Task<IActionResult> UpdatePerson([FromForm]UpdatePersonDto request)
        {
            try
            {
                var person = _mapper.Map<UpdatePersonDto, Person>(request);
                var result = await _personRepository.UpdatePersonAsync(person);
                if (!result)
                {
                    return BadRequest();
                }
                return Ok(person);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        [HttpDelete]
        public async Task<IActionResult> DeletePerson([FromQuery]string personId)
        {
            try
            {
                var result = await _personRepository.DeletePersonAsync(personId);
                if (!result)
                {
                    return BadRequest();
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
