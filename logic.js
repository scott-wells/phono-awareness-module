// ----------------------------------------------
// Module 1
// ----------------------------------------------
const loadModule1 = () => {
  // Global Data
  // ----------------------------------------------
  const scene = `
    <div class="scene">
      <div id="o1" class="object object-square"></div>
      <div id="o2" class="object object-circle"></div>
      <div id="o3" class="object object-triangle"></div>
    </div>
    <div class="message-div">
      <!-- Message gets loaded here. -->
    </div>
  `;
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

  // ----------------------------------------------
  // Load Scene
  // ----------------------------------------------
  const module = document.querySelector(".module");
  module.innerHTML = scene;

  // Define Variables
  // ----------------------------------------------
  const objects = document.querySelectorAll(".object");
  const object1 = document.querySelector("#o1");

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
        object.removeEventListener('click', (e) => {
          console.log(e.target.id);
        if (object === object1) {
          loadResponse(responses.res1);
          nextButton();
        } else {
          loadResponse(responses.res4);
        }
        });
      });
      module.innerHTML = "";
      console.log('Loading Module 2');
      loadModule2();
    });
  };
  // ----------------------------------------------
  const clickResponse = (e) => {
    
  };

  // ----------------------------------------------
  // Load Question
  // ----------------------------------------------
  addMessage(questions.q1);
  // Listen for clicks on each object
  objects.forEach((object) => {
    object.addEventListener('click', (e) => {
      console.log(e.target.id);
      if (object === object1) {
        loadResponse(responses.res1);
        nextButton();
      } else {
        loadResponse(responses.res4);
      }
    });
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
      <div id="o1" class="object object-square"></div>
      <div id="o2" class="object object-circle"></div>
      <div id="o3" class="object object-triangle"></div>
    </div>
    <div class="message-div">
      <!-- Message gets loaded here. -->
    </div>
  `;
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

  // ----------------------------------------------
  // Load Scene
  // ----------------------------------------------
  const module = document.querySelector(".module");
  module.innerHTML = scene;

  // Define Variables
  // ----------------------------------------------
  const objects = document.querySelectorAll(".object");
  const object2 = document.querySelector("#o2");

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
        object.removeEventListener('click', (e) => {
          console.log(e.target.id);
        if (object === object2) {
          loadResponse(responses.res2);
          nextButton();
        } else {
          loadResponse(responses.res4);
        }
        });
      });
      module.innerHTML = "";
      console.log('Loading Module 3');
      loadModule3();
    });
  };

  // ----------------------------------------------
  // Load Question
  // ----------------------------------------------
  addMessage(questions.q2);
  // Listen for clicks on each object
  objects.forEach((object) => {
    object.addEventListener('click', (e) => {
      console.log(e.target.id);
      if (object === object2) {
        loadResponse(responses.res2);
        nextButton();
      } else {
        loadResponse(responses.res4);
      }
    });
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
      <div id="o1" class="object object-square"></div>
      <div id="o2" class="object object-circle"></div>
      <div id="o3" class="object object-triangle"></div>
    </div>
    <div class="message-div">
      <!-- Message gets loaded here. -->
    </div>
  `;
  const questions = {
    q1: `I spy something that rhymes with <em><strong>bug</strong></em>. Can you find it?`,
    q2: `I spy something that rhymes with <em><strong>willow</strong></em>. Can you spot anything?`,
    q3: `I spy something that starts with an <em><strong>lll</strong></em> sound. Can you find one?`
  };
  const responses = {
    res1: `Yes, <em><strong>rug</strong></em> rhymes with <em><strong>bug</strong></em>!`,
    res2: `Yes, <em><strong>pillow</strong></em> rhymes with <em><strong>willow</strong></em>!`,
    res3: `Yes, lamp starts with an <em><strong>lll</strong></em> sound!`,
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
  const object3 = document.querySelector("#o3");

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
  // Load Question
  // ----------------------------------------------
  addMessage(questions.q3);
  // Listen for clicks on each object
  objects.forEach((object) => {
    object.addEventListener('click', (e) => {
      console.log(e.target.id);
      if (object === object3) {
        addMessage(responses.res3);
        loadResponse(responses.res5);
      } else {
        loadResponse(responses.res4);
      }
    });
  });
  // ----------------------------------------------
  // End
  // ----------------------------------------------
};


// ----------------------------------------------
// Load Module 1 to start the script
// ----------------------------------------------
loadModule1();
