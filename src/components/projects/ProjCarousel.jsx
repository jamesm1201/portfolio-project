import * as Bs from 'react-bootstrap'
import './projects.css'
import { PROJECTSCAROUSEL } from '../../data';



export default function ProjCarousel(){
    return(
        <Bs.Carousel className='carousel'>
            {PROJECTSCAROUSEL.map((carouselItem) =>
                <Bs.CarouselItem key={carouselItem.title}>
                    <img src={carouselItem.image} alt='Example Image' className='caro-img' />
                    <Bs.CarouselCaption className='caro-caption'>
                    <h3>{carouselItem.title}</h3>
                    </Bs.CarouselCaption>
                </Bs.CarouselItem>
            )}
        </Bs.Carousel>
    );
}