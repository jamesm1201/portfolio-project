
import Carousel from 'react-bootstrap/Carousel';
import './projects.css'
import { PROJECTSCAROUSEL } from '../../data';
import { CarouselItem, CarouselCaption } from 'react-bootstrap';


export default function ProjCarousel(){
    return(
        <Carousel fade className='carousel'>
            {PROJECTSCAROUSEL.map((carouselItem) =>
                <CarouselItem key={carouselItem.title}>
                    <img src={carouselItem.image} alt='Example Image' className='car-img' />
                    <CarouselCaption>
                    <h3 className='car-caption'>{carouselItem.title}</h3>
                    <p className='car-caption'>{carouselItem.description}</p>
                    </CarouselCaption>
                </CarouselItem>
            )}
        </Carousel>
    );
}