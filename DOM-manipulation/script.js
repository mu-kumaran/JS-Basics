// Creating an document object
const link = document.querySelector('a');

// Manipulating document object
link.textContent = "Mozilla developer Network";
link.href = "https://developer.mozilla.org";

//Creating new node for selected document object
const sec = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride";
sec.appendChild(para);

// Adding text node to the paragraph-the link sits inside
const text = document.createTextNode('- the premier source for web development knowledge');
const first_para = document.querySelector('p');
first_para.appendChild(text);

// Moving and removing elements
// Moving paragraph-the link sits inside to the bottom of the section
// sec.appendChild(first_para);

/*
This moves the paragraph down to the bottom of the section. You might have thought it would make a second copy of it, but this is not the case — first_Para is a reference to the one and only copy of that paragraph. If you wanted to make a copy and add that as well, you'd need to use Node.cloneNode() instead.
*/

// Removing elements
// sec.removeChild(first_para);
// or
// first_para.remove() - This method is mostly not supported in older browsers
// or
// first_para.parentNode.removeChild(first_para);

// Manipulating styles
// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

/* CSS - Inline styles
<p
  style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
  We hope you enjoyed the ride.
</p>
Note: Notice how the JavaScript property versions of the CSS styles are written in lower camel case whereas the CSS versions are hyphenated (kebab-case) (e.g., backgroundColor versus background-color). Make sure you don't get these mixed up, otherwise it won't work.
*/

// Alternative method for manipulating styles
para.setAttribute("class","highlight")
