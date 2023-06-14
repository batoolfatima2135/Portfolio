const projects = [
  {
    title: 'Techrotics',
    description1: "Techrotics is an online institute that offers online courses all around the world. Build with javascript, HTML, and CSS, it displays all the necessary information about the courses.",
    description2: "It is fully responsive website which can be viewed on all screen sizes. Responsiveness is achieved by using bootstrap and media queries",
    technologies: ['Bootstrap', 'CSS', 'Javascript', 'HTML'],
    image: 'images/work/Techrotics.png',
    live_version: 'https://batoolfatima2135.github.io/Capstone/',
    source: 'https://github.com/batoolfatima2135/Capstone.git',
  },
  {
    title: 'To-Do-List',
    description1: "A to-do list is a working javascript app used to store your daily task. Build with javascript, you can add, edit, delete, and clear the to-do tasks.",
    description2: "It includes the modular implementation in javascript as well as webpack bundler is used to handle the code",
    technologies: ['Webpack', 'CSS', 'Javascript', 'HTML'],
    image: 'images/work/to-do-list.png',
    live_version: 'https://batoolfatima2135.github.io/To-do-List-App/',
    source: 'https://github.com/batoolfatima2135/To-do-List-App.git',
  },
  {
    title: 'Awesome Books',
    description1: "Collection of wonderfull books with authors",
    description2: "Built with dynamic javascript with class and method implementations",
    technologies: ['Bootstrap', 'CSS', 'Javascript', 'HTML'],
    image: 'images/work/Awesome-books.png',
    live_version: 'https://batoolfatima2135.github.io/Awesome-books/',
    source: 'https://github.com/batoolfatima2135/Awesome-books.git',
  },
 
];

projects.forEach((work) => {
  // Creating work-section
  const Worksection = document.getElementById('Portfolio');
  // Creating work-item
  const Workitem = document.createElement('div');
  Workitem.className = 'work-item';
  // Creating image
  const imgdiv = document.createElement('div');
  imgdiv.className = 'snapshot';
  const img = new Image();
  img.src = work.image;
  img.className = 'image';
  imgdiv.appendChild(img);
  Workitem.appendChild(imgdiv);
  // Creating details of project
  const detaildiv = document.createElement('div');
  detaildiv.className = 'details';
  // Creating heading of project
  const heading = document.createElement('h2');
  heading.textContent = work.title;
  detaildiv.appendChild(heading);
  // Creating tech-stack of project
  const ul = document.createElement('ul');
  ul.className = 'tech-stack';
  const array = work.technologies;
  array.forEach((value) => {
    const li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
  });
  // Creating Button for view project
  const btndiv = document.createElement('div');
  btndiv.className = 'project';
  const btn = document.createElement('button');
  btn.textContent = 'See Project';
  // Adding listner to the view project button
  btn.addEventListener('click', () => {
    // Creating popup window
    const main = document.createElement('div');
    main.className = 'main-modal';
    const modal = document.createElement('div');
    document.body.style.overflow = 'hidden';
    Workitem.append(main);
    main.append(modal);
    modal.className = 'modal';
    // Creating cancle icon for popup window
    const cancelicondesktop = new Image();
    cancelicondesktop.src = 'images/Disabled.png';
    cancelicondesktop.className = 'cancel-icon-desktop';
    modal.appendChild(cancelicondesktop);
    const cancelicon = new Image();
    cancelicon.src = 'images/cancel.png';
    cancelicon.className = 'cancel-icon';
    modal.appendChild(cancelicon);
    // Adding eventlistner to cancel icon
    cancelicon.addEventListener('click', () => {
      main.remove();
      btndiv.appendChild(btn);
      detaildiv.appendChild(ul);
      detaildiv.appendChild(btndiv);
      document.body.style.overflow = 'visible';
    });
    // Adding eventlistner to cancel icon desktop
    cancelicondesktop.addEventListener('click', () => {
      main.remove();
      btndiv.appendChild(btn);
      detaildiv.appendChild(ul);
      detaildiv.appendChild(btndiv);
      document.body.style.overflow = 'visible';
    });
    // Creating image for popup window
    const imagediv = document.createElement('div');
    imagediv.className = 'image-div';
    const image = new Image();
    image.src = work.image;
    imagediv.appendChild(image);
    Workitem.appendChild(imagediv);
    modal.appendChild(image);
    image.className = 'img-project';
    // Creating heading for popup window
    const h2 = document.createElement('h2');
    h2.className = 'title-project';
    h2.textContent = work.title;
    modal.appendChild(h2);
    // Creating tech-stack for popup-window
    const Uldetail = document.createElement('ul');
    Uldetail.className = 'tech-stack-detail';
    const array = work.technologies;
    array.forEach((value) => {
      const Lidetail = document.createElement('li');
      Lidetail.textContent = value;
      Uldetail.appendChild(Lidetail);
    });
    modal.appendChild(Uldetail);
    // Creating details for popup window
    const br = document.createElement('br');
    const br2 = document.createElement('br');
    const p = document.createElement('p');
    p.className = 'description';
    p.textContent = work.description1;
    const p2 = document.createElement('p');
    p2.textContent = work.description2;
    p2.className = 'description';
    modal.appendChild(br);
    modal.appendChild(p);
    modal.appendChild(br2);
    modal.appendChild(p2);
    // Creating buttons for view demo and source
    const Btndivinner = document.createElement('div');
    Btndivinner.className = 'btndiv';
    const source = document.createElement('a');
    const demo = document.createElement('a');
    demo.className = 'btn';
    source.className = 'btn';
    demo.textContent = 'See live';
    source.textContent = 'See source';
    // Adding icon of view live
    const iconlive = new Image(20, 20);
    iconlive.className = 'project-icons';
    iconlive.src = 'images/live-demo.png';
    // Adding icon of view source
    const iconsource = new Image();
    iconsource.className = 'project-icons';
    iconsource.src = 'images/source.png';
    demo.appendChild(iconlive);
    source.appendChild(iconsource);
    imgdiv.appendChild(img);
    // Adding links to buttons
    demo.setAttribute('href', work.live_version);
    source.setAttribute('href', work.source);
    Btndivinner.appendChild(demo);
    Btndivinner.appendChild(source);
    modal.appendChild(Btndivinner);
  });
  btndiv.appendChild(btn);
  detaildiv.appendChild(ul);
  detaildiv.appendChild(btndiv);
  Workitem.append(detaildiv);
  Worksection.appendChild(Workitem);
});