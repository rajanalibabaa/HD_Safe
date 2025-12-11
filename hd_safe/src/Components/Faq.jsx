import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "Do you deliver products outside Chennai?",
    answer:
      "Yes. We supply and dispatch products across Tamil Nadu and pan-India through reliable logistics partners.",
  },
  {
    question:
      "Which brands do you stock?",
    answer:
      "We offer a wide range of trusted brands like Udyogi, Karam, Stanley, Safepro, Kanex, and Mallcom.",
  },
  {
    question: "Do you provide bulk order discounts?",
    answer:
      "Yes, discounts are available for bulk and repeat orders. ",
  },
  {
    question: "How quickly can you deliver?",
    answer:
      "We are known for prompt delivery, with most Chennai-based orders fulfilled within 24–48 hours.",
  },
 
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={3}
        sx={{ fontSize: { xs: "1.8rem", md: "2.3rem" } }}
      >
        Frequently Asked Questions
      </Typography>

      <Box>
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              mb: 2,
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
              "&::before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                bgcolor: expanded === index ? "#f5f5f5" : "#fff",
                transition: "0.3s",
              }}
            >
              <Typography fontWeight={600} sx={{ fontSize: "1.05rem" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ bgcolor: "#fafafa" }}>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}