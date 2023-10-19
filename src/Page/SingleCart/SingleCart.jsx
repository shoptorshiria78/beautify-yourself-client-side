import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const SingleCart = ({ cartData }) => {
    return (
        <Card className="w-full bg-green-300 my-4 flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-[200px] md:w-[200px] lg:w-[300] shrink-0 rounded-r-none"
            >
                <img
                    src={cartData.image}
                    alt="card-image"
                    className="h-[80vh] w-full object-cover"
                />
            </CardHeader>
            <CardBody className='ml-4 lg:mt-40 flex-col items-center justify-center'>
               
                <Typography variant="h4" color="blue-gray" className="mb-2 font-bold">
                   {cartData.name}
                </Typography>
                <Typography color="gray" className="mb-8 font-medium">
                   {cartData.description.slice(0,250)}..
                </Typography>
                <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        See Details
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
};
SingleCart.propTypes = {
    cartData: PropTypes.object
}


export default SingleCart;