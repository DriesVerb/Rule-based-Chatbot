exports.botInto = async (req, res) => {
  await res.json({
    input: true,
    nextQuestion: "A",
    topMessage: "Hello and welcome what is your name?",
    messages: [],
  });
};

exports.botReply = async (req, res) => {
  const { id } = req.params;
  console.log(req.session);

  switch (id) {
    case "A":
      try {
        res.json({
          input: false,
          topMessage: `Hello ${input}! Which of the following describes you best?`,
          nextQuestion: "B",
          messages: [
            { msg: "I'm a recruiter.", nextQuestion: "1A" },
            { msg: "I'm a fellow developer!", nextQuestion: "1B" },
            { msg: "Just browsing around.", nextQuestion: "1C" },
          ],
        });
      } catch (error) {
        console.error(`object`);
      }

      break;
    case "1A":
      res.json({
        input: true,
        nextQuestion: "2A",
        topMessage: `Great to hear, ${input}, what company do you work for?`,
        messages: [],
      });
      break;
    default:
      res.json("robot is asleep");
  }
};

exports.botInput = (req, res) => {
  input = req.body.input;

  req.session.input = { input: input };
  console.log(req.session);
};
