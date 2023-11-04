import { Card, Heading, Image, Text, VStack, CardHeader, CardBody, CardFooter , Stack , Button , Divider, ButtonGroup, Box, Badge} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Books({ id, title, author, image, publisher, year }) {

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: title,
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Link to={`/books/${id}`}>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Box display="flex" justifyContent="center" height="200px">
      <Image
        src={`http://localhost:8000/${image}`}
        alt={property.imageAlt}
      />
    </Box>

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {author}
          </Badge>
          <Badge borderRadius='full' px='2' colorScheme='red' marginLeft={2}>
            {publisher}
            </Badge>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title} ({year})
        </Box>
      </Box>
    </Box>

    </Link>

    
  );
}