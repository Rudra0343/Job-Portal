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
    <div className='w-full bg-white p-3 rounded-md'>
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup>
          {
            fitlerData.map((data, index) => (
              <div>
                <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
                {
                  data.Array.map((item, index) => (
                      <div key={index} className='flex items-center space-x-2 my-1'>
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
