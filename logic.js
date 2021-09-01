


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
  // 1. Create a button that says 'Next'
  // When the button is clicked
  // 2. Remove event listeners
  // 3. Remove the current module
  // 4. Load next module
  const nextButton = () => {
    const button = document.createElement("BUTTON");
    button.classList.add("nextButton");
    button.innerHTML = "Next Question";
    /** !!!!!!!!!!!! **/
    scene.appendChild(button);

    button.addEventListener("click", loadModule2);
  };

  // Start Scene
  // ----------------------------------------------
  const objects = document.querySelectorAll(".object");
  const object1 = document.querySelector("#o1");
  // Load Question
  addMessage(questions.q1);
  // Listen for clicks on each object
  objects.forEach((object) => {
    object.addEventListener("click", (e) => {
      if (object === object1) {
        console.log(e.target.id);
        loadResponse(responses.res1);
        // nextButton();
      } else {
        console.log(e.target.id);
        loadResponse(responses.res4);
      }
    });
  });
  // ----------------------------------------------
  // End
  // ----------------------------------------------
};

loadModule1();
