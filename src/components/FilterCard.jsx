import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

const fitlerData = [
  {
    fitlerType:"Location",
    Array:["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    fitlerType:"Industry",
    Array:["Frontend Developer", "Backend Developer", "Full Stack Developer", "DevOps", "Data Science"]
  },
  {
    fitlerType:"Salary",
    Array:["0-40k", "42k to 1lakh", "1lakh to 5lakh"]
  },
]

const FilterCard = () => {
  return (
    <div>
        <h1>Filter Jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup>
          {
            fitlerData.map((data, index) => (
              <div>
                <h1>{data.fitlerType}</h1>
                {
                  data.Array.map((item, index) => (
                      <div key={index}>
                        <RadioGroupItem value={item}/>
                        <label>{item}</label>
                      </div>
                  ))
                }
              </div>
            ))
          }
        </RadioGroup>
    </div>
  )
}

export default FilterCard
