const loadModule = () => {
  console.log('Module loaded!')

  const messageDiv = document.querySelector(".message-div");
  const object1 = document.querySelector("#o1");
  const object2 = document.querySelector("#o2");
  const object3 = document.querySelector("#o3");

  const questions = {
    q1: `I spy something that rhymes with <em><strong>bug</strong></em>. Can you find it?`,
    q2: `I spy something that rhymes with <em><strong>willow</strong></em>. Can you spot anything?`,
    q3: `I spy something that starts with an <em><strong>lll</strong></em> sound. Can you find one?`
  };
  const responses = {
    res1: `Yes, <em><strong>rug</strong></em> rhymes with <em><strong>bug</strong></em>!`,
    res2: `Yes, <em><strong>pillow</strong></em> rhymes with <em><strong>willow</strong></em>!`,
    res3: `Yes, lamp starts with an <em><strong>lll</strong></em> sound!`,
    res4: `Try again.`
  };

  const addMessage = (message) => {
    const p = document.createElement("P");
    p.classList.add("message", "animate-text");
    p.innerHTML = message;
    messageDiv.appendChild(p);
  };

  const selectRemoveMessage = () => {
    const message = document.querySelector(".message");
    message.remove();
  };

  // Question 1
  const loadQuestion1 = () => {
    addMessage(questions.q1);

    object1.addEventListener("click", () => {
      selectRemoveMessage();
      addMessage(responses.res1);
      setTimeout(() => {
        selectRemoveMessage();
        loadQuestion2();
      }, 5000); // turn this into a button instead
    });

    object2.addEventListener("click", () => {
      selectRemoveMessage();
      addMessage(responses.res4);
      setTimeout(() => {
        selectRemoveMessage();
        loadQuestion1();
      }, 3000);
    });

    object3.addEventListener("click", () => {
      selectRemoveMessage();
      addMessage(responses.res4);
      setTimeout(() => {
        selectRemoveMessage();
        loadQuestion1();
      }, 3000);
    });
  };

  // Question 2
  const loadQuestion2 = () => {
    addMessage(questions.q2);

    object1.addEventListener("click", () => {
      selectRemoveMessage();
      addMessage(responses.res4);
      setTimeout(() => {
        selectRemoveMessage();
        loadQuestion2();
      }, 3000);
    });

    object2.addEventListener("click", () => {
      selectRemoveMessage();
      addMessage(responses.res2);
      setTimeout(() => {
        selectRemoveMessage();
        loadQuestion3();
      }, 5000); // turn this into a button instead
    });

    object3.addEventListener("click", () => {
      selectRemoveMessage();
      addMessage(responses.res4);
      setTimeout(() => {
        selectRemoveMessage();
        loadQuestion2();
      }, 3000);
    });
  };

  // Question 3
  const loadQuestion3 = () => {
    addMessage(questions.q3);

    object1.addEventListener("click", () => {
      selectRemoveMessage();
      addMessage(responses.res4);
      setTimeout(() => {
        selectRemoveMessage();
        loadQuestion3();
      }, 3000);
    });

    object2.addEventListener("click", () => {
      selectRemoveMessage();
      addMessage(responses.res4);
      setTimeout(() => {
        selectRemoveMessage();
        loadQuestion3();
      }, 3000);
    });

    object3.addEventListener("click", () => {
      selectRemoveMessage();
      addMessage(responses.res3);
    });
  };

  loadQuestion1();
};

loadModule();