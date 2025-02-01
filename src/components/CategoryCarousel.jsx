import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "DSA",
    "Full Stack Developer"
]

const CategoryCarousel = () => {
  return (
    <div>
        <Carousel className="w-50 max-w-xl mx-auto my-20">
            <CarouselContent>
                {
                    category.map((cat,index) => (
                         <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                            <Button variant="outline" className="rounded-full">{cat}</Button>
                         </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    </div>
  )
}

export default CategoryCarousel
