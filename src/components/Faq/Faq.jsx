import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "How will I know if my registration for an event is confirmed?",
    answer: "After registering for an event make sure you receive an email from our team about registration done successfully. Wait 2-3 days for verification by Moonstone members and organizers.If mail not found in your inbox, check spam. For further assistance, go to contact us page and can connect through technical assistance team",
  },
  {
    question: "How do I register for Moonstone fest?",
    answer: "Registration for Moonstone fest is not required but you can register for events shown in Event Section.Please check it out for more info.",
  },
  {
    question: "Can I register for multiple events at Moonstone fest?",
    answer: "Yes, you can register for multiple events, provided they do not overlap in schedule.",
  },
  {
    question: "Does participating in any moonstone event includes fee?",
    answer: "Some events may have a registration fee, while others may be free to participate in. Please check the event details for specific information regarding registration fees.",
  },
  {
    question: "What are the judging criteria for the events?",
    answer: "Judging criteria typically include creativity, technical skill, stage presence, originality, and adherence to the theme (if any).",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div className={`${clicked === i ? classes.answer : classes.noAnswer}`}>{ques.answer}</div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}

        {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
      </div>
    </section>
  );
};

export default Faq;
