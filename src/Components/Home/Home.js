import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const BasicExample = ({ item, handleClick }) => {
    const { title, thumbnail, price, description } = item;

    const [isReadMore, setIsReadMore] = useState(true)


    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (

        <>
            <div className='mainCard'>
                <div className='cards'>
                    <Card>
                        <Card.Img variant="top" src={thumbnail} />
                        <Card.Body>
                            <div className='title-price'>
                                <Card.Title>{title}</Card.Title>
                                <Card.Title className='priceClr'>$ {price}</Card.Title>
                            </div>
                            <Card.Text onClick={toggleReadMore}>
                                {isReadMore ? description.slice(0, 35) : description}
                                <span >
                                    {isReadMore ? "..." : description}
                                </span>
                            </Card.Text>
                            <Button className='homeBtn' onClick={() => handleClick(item)}>Add to cart</Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </>

    );
}

export default BasicExample;







