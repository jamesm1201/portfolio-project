
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
                    <CarouselCaption>
                    <h3 className='caro-caption'>{carouselItem.title}</h3>
                    <p className='caro-caption'>{carouselItem.description}</p>
                    </CarouselCaption>
                </CarouselItem>
            )}
        </Carousel>
    );
}