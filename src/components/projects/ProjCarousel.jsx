
import Carousel from 'react-bootstrap/Carousel';
import './projects.css'
import { PROJECTSCAROUSEL } from '../../data';
import { CarouselItem, CarouselCaption } from 'react-bootstrap';


export default function ProjCarousel(){
    return(
        <Carousel className='carousel'>
            {PROJECTSCAROUSEL.map((carouselItem) =>
                <CarouselItem key={carouselItem.title}>
                    <img src={carouselItem.image} alt='Example Image' className='caro-img' />
                    <CarouselCaption className='caro-caption'>
                    <h3>{carouselItem.title}</h3>
                    </CarouselCaption>
                </CarouselItem>
            )}
        </Carousel>
    );
}