// ----------------------------------------------
// Module 1
// ----------------------------------------------
const loadModule1 = () => {

  // Global Data
  // ----------------------------------------------
  const scene = `
  <div class="scene">
    <div id="o1" class="object object-rug"></div>
    <div id="o2" class="object object-pillow"></div>
    <div id="o3" class="object object-lamp"></div>
    <div class="object object-vase"></div>
    <div class="object object-frame"></div>
  </div>
  <div class="message-div">
    <!-- Message gets loaded here. -->
  </div>
  `;
  const questions = {
    q1: `I spy something that rhymes with <em><strong>bug</strong></em>. Can you find it?`,
    q2: `I spy something that rhymes with <em><strong>willow</strong></em>. Can you spot anything?`,
    q3: `I spy something that starts with an <em><strong>LLL</strong></em> sound. Can you find one?`
  };
  const responses = {
    res1: `Yes, <em><strong>rug</strong></em> rhymes with <em><strong>bug</strong></em>!`,
    res2: `Yes, <em><strong>pillow</strong></em> rhymes with <em><strong>willow</strong></em>!`,
    res3: `Yes, lamp starts with an <em><strong>LLL</strong></em> sound!`,
    res4: `Try again.`
  };

  // ----------------------------------------------
  // Load Scene
  // ----------------------------------------------
  const module = document.querySelector(".module");
  module.innerHTML = scene;

  // Define Variables
  // ----------------------------------------------
  const objects = document.querySelectorAll(".object");

  // Define Functions
  // ----------------------------------------------
  const addMessage = (message) => {
    const messageDiv = document.querySelector('.message-div');
    const p = document.createElement("P");
    p.classList.add("message", "animate-text");
    p.innerHTML = message;
    messageDiv.appendChild(p);
  };
  // ----------------------------------------------
  const loadResponse = (response) => {
    const message = document.querySelector(".message");
    message.remove();
    addMessage(response);
  };
  // ----------------------------------------------
  const nextButton = () => {
    const messageDiv = document.querySelector('.message-div');
    const button = document.createElement("BUTTON");
    button.classList.add("nextButton");
    button.innerHTML = "Next Question";
    messageDiv.appendChild(button);

    button.addEventListener("click", () => {
      objects.forEach((object) => {
        object.removeEventListener('click', clickEvent);
      });
      module.innerHTML = "";
      console.log('Loading Module 2');
      loadModule2();
    });
  };
  // ----------------------------------------------
  const clickEvent = (event) => {
    console.log(event.target.id);
    const button = document.querySelector('.nextButton');
    if(button !== null) {
      button.remove();
    }
    if (event.target.id === 'o1') {
      loadResponse(responses.res1);
      nextButton();
    } else {
      loadResponse(responses.res4);
    }
  };

  // Load Question
  // ----------------------------------------------
  addMessage(questions.q1);
  // Listen for clicks on each object
  objects.forEach((object) => {
    object.addEventListener('click', clickEvent);
  });

  // ----------------------------------------------
  // End
  // ----------------------------------------------
};


// ----------------------------------------------
// Module 2
// ----------------------------------------------
const loadModule2 = () => {

  // Global Data
  // ----------------------------------------------
  const scene = `
  <div class="scene">
    <div id="o1" class="object object-rug"></div>
    <div id="o2" class="object object-pillow"></div>
    <div id="o3" class="object object-lamp"></div>
    <div class="object object-vase"></div>
    <div class="object object-frame"></div>
  </div>
  <div class="message-div">
    <!-- Message gets loaded here. -->
  </div>
  `;
  const questions = {
    q1: `I spy something that rhymes with <em><strong>bug</strong></em>. Can you find it?`,
    q2: `I spy something that rhymes with <em><strong>willow</strong></em>. Can you spot anything?`,
    q3: `I spy something that starts with an <em><strong>LLL</strong></em> sound. Can you find one?`
  };
  const responses = {
    res1: `Yes, <em><strong>rug</strong></em> rhymes with <em><strong>bug</strong></em>!`,
    res2: `Yes, <em><strong>pillow</strong></em> rhymes with <em><strong>willow</strong></em>!`,
    res3: `Yes, lamp starts with an <em><strong>LLL</strong></em> sound!`,
    res4: `Try again.`
  };

  // ----------------------------------------------
  // Load Scene
  // ----------------------------------------------
  const module = document.querySelector(".module");
  module.innerHTML = scene;

  // Define Variables
  // ----------------------------------------------
  const objects = document.querySelectorAll(".object");

  // Define Functions
  // ----------------------------------------------
  const addMessage = (message) => {
    const messageDiv = document.querySelector('.message-div');
    const p = document.createElement("P");
    p.classList.add("message", "animate-text");
    p.innerHTML = message;
    messageDiv.appendChild(p);
  };
  // ----------------------------------------------
  const loadResponse = (response) => {
    const message = document.querySelector(".message");
    message.remove();
    addMessage(response);
  };
  // ----------------------------------------------
  const nextButton = () => {
    const messageDiv = document.querySelector('.message-div');
    const button = document.createElement("BUTTON");
    button.classList.add("nextButton");
    button.innerHTML = "Next Question";
    messageDiv.appendChild(button);

    button.addEventListener("click", () => {
      objects.forEach((object) => {
        object.removeEventListener('click', clickEvent);
      });
      module.innerHTML = "";
      console.log('Loading Module 3');
      loadModule3();
    });
  };
  // ----------------------------------------------
  const clickEvent = (event) => {
    console.log(event.target.id);
    const button = document.querySelector('.nextButton');
    if(button !== null) {
      button.remove();
    }
    if (event.target.id === 'o2') {
      loadResponse(responses.res2);
      nextButton();
    } else {
      loadResponse(responses.res4);
    }
  };

  // Load Question
  // ----------------------------------------------
  addMessage(questions.q2);
  // Listen for clicks on each object
  objects.forEach((object) => {
    object.addEventListener('click', clickEvent);
  });

  // ----------------------------------------------
  // End
  // ----------------------------------------------
};


// ----------------------------------------------
// Module 3
// ----------------------------------------------
const loadModule3 = () => {

  // Global Data
  // ----------------------------------------------
  const scene = `
  <div class="scene">
    <div id="o1" class="object object-rug"></div>
    <div id="o2" class="object object-pillow"></div>
    <div id="o3" class="object object-lamp"></div>
    <div class="object object-vase"></div>
    <div class="object object-frame"></div>
  </div>
  <div class="message-div">
    <!-- Message gets loaded here. -->
  </div>
  `;
  const questions = {
    q1: `I spy something that rhymes with <em><strong>bug</strong></em>. Can you find it?`,
    q2: `I spy something that rhymes with <em><strong>willow</strong></em>. Can you spot anything?`,
    q3: `I spy something that starts with an <em><strong>LLL</strong></em> sound. Can you find one?`
  };
  const responses = {
    res1: `Yes, <em><strong>rug</strong></em> rhymes with <em><strong>bug</strong></em>!`,
    res2: `Yes, <em><strong>pillow</strong></em> rhymes with <em><strong>willow</strong></em>!`,
    res3: `Yes, lamp starts with an <em><strong>LLL</strong></em> sound!`,
    res4: `Try again.`,
    res5: `<strong>You did it! Great job!</strong>`
  };

  // ----------------------------------------------
  // Load Scene
  // ----------------------------------------------
  const module = document.querySelector(".module");
  module.innerHTML = scene;

  // Define Variables
  // ----------------------------------------------
  const objects = document.querySelectorAll(".object");

  // Define Functions
  // ----------------------------------------------
  const addMessage = (message) => {
    const messageDiv = document.querySelector('.message-div');
    const p = document.createElement("P");
    p.classList.add("message", "animate-text");
    p.innerHTML = message;
    messageDiv.appendChild(p);
  };
  // ----------------------------------------------
  const loadResponse = (response) => {
    const message = document.querySelector(".message");
    message.remove();
    addMessage(response);
  };
  // ----------------------------------------------
  const restartButton = () => {
    const messageDiv = document.querySelector('.message-div');
    const button = document.createElement("BUTTON");
    button.classList.add("restartButton");
    button.innerHTML = "Start Over";
    messageDiv.appendChild(button);

    button.addEventListener("click", () => {
      objects.forEach((object) => {
        object.removeEventListener('click', clickEvent);
      });
      module.innerHTML = "";
      console.log('Loading Module 1');
      loadModule1();
    });
  };
  // ----------------------------------------------
  const clickEvent = (event) => {
    console.log(event.target.id);
    const button = document.querySelector('.restartButton');
    if(button !== null) {
      button.remove();
    }
    if (event.target.id === 'o3') {
      loadResponse(responses.res3);
      restartButton();
    } else {
      loadResponse(responses.res4);
    }
  };

  // Load Question
  // ----------------------------------------------
  addMessage(questions.q3);
  // Listen for clicks on each object
  objects.forEach((object) => {
    object.addEventListener('click', clickEvent);
  });

  // ----------------------------------------------
  // End
  // ----------------------------------------------
};


// ----------------------------------------------
// Load Module 1 to start the script
// ----------------------------------------------
loadModule1();
