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
    const loadQuestion1 = () => {
      const question1 = questions.q1;
      const p = document.createElement("P");
      p.classList.add("message", "animate-text");
      p.innerHTML = `${question1}`;
      addMessage.appendChild(p);
  
      object1.addEventListener("click", (e) => {
        console.log("You clicked Object 1");
        const message = document.querySelector(".message");
        message.remove();
        const p = document.createElement("P");
        p.classList.add("message", "animate-text");
        p.innerHTML = `${responses.res1}`;
        addMessage.appendChild(p);
        setTimeout(loadQuestion2, 5000);
      });
  
      object2.addEventListener("click", (e) => {
        console.log("You clicked the wrong object!");
        const message = document.querySelector(".message");
        message.remove();
        const p = document.createElement("P");
        p.classList.add("message", "animate-text");
        p.innerHTML = `${responses.res4}`;
        addMessage.appendChild(p);
        setTimeout(function () {
          const message = document.querySelector(".message");
          message.remove();
          loadQuestion1();
        }, 2000);
      });
  
      object3.addEventListener("click", (e) => {
        console.log("You clicked the wrong object!");
        const message = document.querySelector(".message");
        message.remove();
        const p = document.createElement("P");
        p.classList.add("message", "animate-text");
        p.innerHTML = `${responses.res4}`;
        addMessage.appendChild(p);
        setTimeout(function () {
          const message = document.querySelector(".message");
          message.remove();
          loadQuestion1();
        }, 2000);
      });
    };
  
    // Question 2
    const loadQuestion2 = () => {
      const message = document.querySelector(".message");
      message.remove();
      const question2 = questions.q2;
      const p = document.createElement("P");
      p.classList.add("message", "animate-text");
      p.innerHTML = `${question2}`;
      addMessage.appendChild(p);
  
      object1.addEventListener("click", (e) => {
        console.log("You clicked the wrong object!");
        const message = document.querySelector(".message");
        message.remove();
        const p = document.createElement("P");
        p.classList.add("message", "animate-text");
        p.innerHTML = `${responses.res4}`;
        addMessage.appendChild(p);
        setTimeout(loadQuestion2, 2000);
      });
  
      object2.addEventListener("click", (e) => {
        console.log("You clicked Object 2!");
        const message = document.querySelector(".message");
        message.remove();
        const p = document.createElement("P");
        p.classList.add("message", "animate-text");
        p.innerHTML = `${responses.res2}`;
        addMessage.appendChild(p);
        setTimeout(loadQuestion3, 5000);
      });
  
      object3.addEventListener("click", (e) => {
        console.log("You clicked the wrong object!");
        const message = document.querySelector(".message");
        message.remove();
        const p = document.createElement("P");
        p.classList.add("message", "animate-text");
        p.innerHTML = `${responses.res4}`;
        addMessage.appendChild(p);
        setTimeout(loadQuestion2, 2000);
      });
    };
  
    loadQuestion1();
  };
  
  makeObjectsClickable();
  