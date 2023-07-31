import { Box, Collapse, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Card = ({ title, description, imageSrc }) => {
  const [mouseOnCard, setMouseOnCard] = useState(false);

  return (
    <Box
      m={1}
      p={2}
      bg='whitesmoke'
      color='black'
      border='1px'
      borderColor='black'
      borderRadius='10px'
      style={{
        transform: mouseOnCard ? 'scale(1.1)' : 'scale(1)',
        transition: '0.3s',
      }}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
    >
      <VStack spacing={3}>
        <Image
          src={imageSrc}
          alt="title"
          borderRadius='10px'
        />
        <Heading as='h5' size='md'>{title}</Heading>
        <Collapse startingHeight={20} in={mouseOnCard}>
          <Text fontSize='sm'>{description}</Text>
        </Collapse>
        <a href="#">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
      </VStack>
    </Box>
  );
};

export default Card;
