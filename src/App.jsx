import { useState } from "react";
import questionnaire from "./data/questionnaire";

import Welcome from "./pages/Welcome";
import Introduction from "./pages/Introduction";
import Questionnaire from "./pages/Questionnaire";
import Completion from "./pages/Completion";

function App() {
const [screen, setScreen] = useState("welcome");

const [answers, setAnswers] = useState({});

const handleStart = () => {
setScreen("introduction");
};

const handleBeginSurvey = () => {
setScreen("questionnaire");
};

const handleComplete = (submittedAnswers) => {
setAnswers(submittedAnswers);
setScreen("completion");

```
console.log("Submitted answers:", submittedAnswers);
```

};

const handleRestart = () => {
setAnswers({});
setScreen("welcome");
};

if (screen === "introduction") {
return ( <Introduction
     onStart={handleBeginSurvey}
   />
);
}

if (screen === "questionnaire") {
return ( <Questionnaire
     questionnaire={questionnaire}
     onComplete={handleComplete}
   />
);
}

if (screen === "completion") {
return ( <Completion
     onRestart={handleRestart}
     answers={answers}
   />
);
}

return ( <Welcome
   questionnaire={questionnaire}
   onStart={handleStart}
 />
);
}

export default App;
