import './App.css';
import PersonList from './Components/PersonList/PersonList';
import axios from "axios";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [persons, setPersonsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const personList = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "https://localhost:7060/api/Person/GetAll",
        });
        const responseData = await response.data;
        setPersonsList(responseData);
        setLoading(false);
      } catch (error) {
      }
    }
    personList();
  }, []);

  const deletePerson = (personId) => {
    axios.delete('https://localhost:7060/api/Person/DeletePerson', {
      params: { personId: personId },
    })
      .then(response => {
        if (response.data === true) {
          setPersonsList(persons.filter((item) => item.id !== personId))
        }
      })
  }
  const addPerson = (personName, personFamily, personAge) => {
    const headers = {
      'Content-Type': 'multipart/form-data'
    };
    axios.post('https://localhost:7060/api/Person/AddPerson', {
      name: personName,
      family: personFamily,
      age: personAge
    }, { headers })
      .then(response => {
        console.log('response.data', response.data);
        const newPerson = response.data;
        setPersonsList(prevPersonsList => [newPerson,...prevPersonsList, ]);
      })
      .catch(error => {
        console.error('Error adding person:', error);
      });
  };

  const updatePerson = (personId, personName, personFamily, personAge) => {
    const headers = {
      'Content-Type': 'multipart/form-data'
    };
    axios.put('https://localhost:7060/api/Person/UpdatePerson', {
      name: personName,
      family: personFamily,
      age: personAge,
      id: personId,
    }, { headers })
      .then(response => {
        console.log('response.data', response.data);
        const newPerson = response.data;
        setPersonsList(prevPersonsList => {
          const updatedList = prevPersonsList.map(person => {
            if (person.id === newPerson.id) {
              return newPerson;
            }
            return person;
          });
          return updatedList;
        });
      })
      .catch(error => {
        console.error('Error updating person:', error);
      });
  }
  

  const getPerson = (personId) => {
    axios.get('https://localhost:7060/api/Person/GetPerson', {
      params: { personId: personId },
    })
      .then(response => {
        document.getElementById('person-Name').value = response.data.name
        document.getElementById('person-Family').value = response.data.family
        document.getElementById('person-Age').value = response.data.age
        document.getElementById('person-Id').value = response.data.id
      })
      .catch(error => {
        console.error('Error adding person:', error);
      });
  }




  return (
    
    <div className="App">
      <header className="headerColor">
        {loading ? (
          <p>Loading...</p>
          ) : (
            <h1 className="text-amber-400 w-full">
            <ToastContainer />
            <PersonList onSubmit={addPerson} onShowUpdateModal={getPerson} onUpdate={updatePerson} persons={persons}  onDelete={deletePerson} />
          </h1>
        )}
      </header>
    </div>
  );
}

export default App;
