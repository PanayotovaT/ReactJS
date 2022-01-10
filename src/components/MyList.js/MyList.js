import { Carousel } from 'react-bootstrap';
import './MyList.css';
import { useState, useEffect } from 'react';
import { isAuth } from '../../hoc/isAuth';

export const MyList = ({
    user
}) => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(res => res.json())
            .then(result => {
                setDogs(result.message);
            });
        return () => {
            setDogs([]);
        };
    }, []);


    return (
        <>
            <h2>{user.email}</h2>
            <Carousel>
                {dogs.length > 0 ?
                    dogs.map(x => (<Carousel.Item key={x}>
                        <img
                            className="d-block w-100"
                            src={x}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>)
                    )
                    : ''
                }
            </Carousel>
        </>
    );
};

// const EnhancedComponent = isAuth(MyList);
// export default EnhancedComponent;

export default isAuth(MyList);