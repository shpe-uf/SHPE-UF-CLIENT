import React, { useState, useEffect } from "react";
import {
  Dropdown,
  Container,
  Label,
  Grid,
  Form,
  Button
} from "semantic-ui-react";

import major from '../assets/options/major.json';
import year from '../assets/options/year.json';
import graduating from '../assets/options/graduating.json';
import country from '../assets/options/country.json';

function FilterSelection(props) {
  const [width, setWidth] = useState(1000);
  const [category, setCategory] = useState("Name");
  const [filterListUnsorted, setFilterListUnsorted] = useState([]);
  const [filters, setFilters] = useState({
    name: [],
    major: [],
    year: [],
    graduating: [],
    country: [],
    classes: []
  });
  const [filterVal, setFilterVal] = useState('');

  useEffect(() => { 
    window.addEventListener('resize', resizeWindow.bind(this));
    return function cleanup() {
      window.removeEventListener('resize', resizeWindow.bind(this));
    };  
  },[]);

  function resizeWindow() {
    setWidth(window.innerWidth);
  }

  let fullSelection = {
    'Name': '',
    'Major': major,
    'Year': year,
    'Graduating': graduating,
    'Country': country,
    'Classes': ''
  };

  function addFilter(){
    console.log('adding')
    console.log(filterVal)
    if(filterVal && filterVal !== '' && !filters[category.toLowerCase()].includes(filterVal)) {
      let f = filters;
      if(category==='Classes') {
        let newVal = filterVal.replace(/\s+/g, '').toUpperCase();
        f[category.toLowerCase()].push(newVal);
      } else {
        f[category.toLowerCase()].push(filterVal);
      }
      setFilters(f);
      printLabels();
      props.getUsers(f);
    }
    console.log('something went wrong')
  }

  function deleteFilter(deletedFilter) {
    let f = filters;
    let k = Object.keys(f);
    for(let i = 0; i < k.length; i++) {
      if(f[k[i]].includes(deletedFilter)) {
        f[k[i]] = f[k[i]].filter(x => x !== deletedFilter)
      }
    }
    setFilters(f);
    printLabels();
    props.getUsers(f);
  }

  let dropdownOptions = (function() {
    let optionArray = [];
    let options = Object.keys(fullSelection);
    for(let i = 0; i < options.length; i++) {
      optionArray.push({});
      optionArray[i].text = optionArray[i].value = options[i];
    }
    return optionArray;
  }())

  function printLabels() {
    let filterKeys = Object.keys(filters);
    let list = [];
    for(let i = 0; i < filterKeys.length; i++) {
      filters[filterKeys[i]].forEach(element => {
        list.push(element);
      });
    }
    setFilterListUnsorted(list);
  }

  return (
    <Container>
      <div 
        style={ width > 749 ? {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        } : {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexFlow: 'column nowrap',
          height: '150px'
        }}>
        <div>
          <Dropdown
            defaultValue = {'Name'}
            options = {dropdownOptions}
            onChange={(e, data) => {
              setCategory(data.value);
            }}
            selection
          />
        </div>
        <div
          style={{
            flexGrow: '0.9',
          }}
        >
          {
            fullSelection[category] === '' ?
            <Form>
              <Form.Field>
                <input onChange={e => setFilterVal(e.target.value)} onKeyDown={(e) => {if(e.key === 'Enter') addFilter()}} placeholder={"Search " + category} />
              </Form.Field>
            </Form>
            :
            <Dropdown
              placeholder={'Select ' + category}
              fluid
              search
              selection
              onChange={(e,data) => setFilterVal(data.value)}
              options={fullSelection[category]}
            />
          }
        </div>
        <Grid.Column>
          <Button
            onClick={addFilter}
          >
            Enter
          </Button>
        </Grid.Column>
      </div>
      <br/>
      {
        filterListUnsorted.map((filter) => 
          <Label 
            size='tiny' 
            circular 
            content={filter} 
            onRemove={(e, data) => deleteFilter(data.content)}
            key={filter}
          />
        )
      }
    </Container>
  );
}

export default FilterSelection;
