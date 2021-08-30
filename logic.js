const makeObjectsClickable = () => {
    const objects = document.querySelectorAll(".object");
    const addMessage = document.querySelector(".message-div");
    const object1 = document.querySelector("#o1");
    const object2 = document.querySelector("#o2");
    const object3 = document.querySelector("#o3");
  
    const questions = {
      q1: `I spy something that rhymes with <em>BUG</em>. Can you find it?`,
      q2: `I spy something that rhymes with <em>WILLOW</em>. Can you spot anything?`,
      q3: `I spy something that starts with an <em>LLL</em> sound. Can you find one?`
    };
    const responses = {
      res1: `Yes, <em>RUG</em> rhymes with <em>BUG</em>!`,
      res2: `Yes, <em>PILLOW</em> rhymes with <em>WILLOW</em>!`,
      res3: `Yes, lamp starts with an <em>LLL</em> sound!`,
      res4: `Try again.`
    };
  
    // Load Question 1.
    if (!questions[0]) {
      const question1 = questions.q1;
      const p = document.createElement("P");
      p.classList.add("message");
      p.innerHTML = `${question1}`;
      addMessage.appendChild(p);
  
      object1.addEventListener("click", (e) => {
        console.log("You clicked Object 1");
        const message = document.querySelector(".message");
        message.remove();
        const p = document.createElement("P");
        p.classList.add("message");
        p.innerHTML = `${responses.res1}`;
        addMessage.appendChild(p);
      });
  
      object2.addEventListener("click", (e) => {
        console.log("You clicked the wrong object!");
        const message = document.querySelector(".message");
        message.remove();
        const p = document.createElement("P");
        p.classList.add("message");
        p.innerHTML = `${responses.res4}`;
        addMessage.appendChild(p);
      });
  
      object3.addEventListener("click", (e) => {
        console.log("You clicked the wrong object!");
        const message = document.querySelector(".message");
        message.remove();
        const p = document.createElement("P");
        p.classList.add("message");
        p.innerHTML = `${responses.res4}`;
        addMessage.appendChild(p);
      });
    }
  };
  
  makeObjectsClickable();
  