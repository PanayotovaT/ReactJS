import { Carousel } from 'react-bootstrap';
import './MyList.css';
import { useState, useEffect } from 'react';


export const MyList = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(res => res.json())
            .then(result => {
                setDogs(result.message);
            })
    },[])
    console.log(dogs)
    return (
        <Carousel>
            {dogs.length > 0 ? 
            dogs.map(x => (<Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={x}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item> )
            )
            : ''
        }


        </Carousel>
    );
};

export default MyList;