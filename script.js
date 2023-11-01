const WHE = document.getElementById("wherewegoes");

//Function to simulate typing effect
function typeWriter(element, text, index, speed) {
   if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(element, text, index, speed), speed);
    }
  }

const WHEling = "wherewegoes_";
typeWriter(WHE, WHEling, 0, 300); 


