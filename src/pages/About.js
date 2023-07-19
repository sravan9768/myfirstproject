import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Plantastic Chuckles</Typography>
        <p>
        Welcome to our food restaurant, where culinary delights meet extraordinary flavors. Our passionate chefs meticulously craft each dish, using only the freshest and finest ingredients sourced from local farmers and suppliers. Whether you're craving a hearty burger, a delicate sushi roll, or a comforting bowl of pasta, our diverse menu offers something to satisfy every palate.

At our restaurant, we believe that food should be a feast for the senses. From the moment you step through our doors, you'll be greeted by a warm and inviting atmosphere that sets the stage for an unforgettable dining experience. Immerse yourself in the aromas of sizzling spices, the vibrant colors of beautifully plated dishes, and the symphony of flavors that dance on your taste buds.


        </p>
        <br />
        <p>
        We pride ourselves on providing exceptional service, ensuring that every visit leaves you with a smile. Our dedicated staff is here to guide you through our menu, recommend pairings from our extensive selection of wines and beverages, and cater to your dietary preferences and restrictions. Whether you're celebrating a special occasion or simply enjoying a casual meal with friends and family, we strive to create a memorable and enjoyable time for all.

We invite you to embark on a culinary journey with us, where each bite is a moment of bliss. Join us at our food restaurant, where passion meets innovation, and indulge in a remarkable dining adventure that will leave you craving for more. Book your table today and let us take you on a gastronomic experience unlike any other.
        </p>
      </Box>
    </Layout>
  );
};

export default About;