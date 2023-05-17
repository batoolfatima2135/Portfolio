const projects = [
  {
    title: ' Keeping track of hundreds of components',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    image: 'images/work/snapshoot2.png',
    live_version: 'https://batoolfatima2135.github.io/Portfolio/',
    source: 'https://github.com/batoolfatima2135/Portfolio',
  },
  {
    title: ' Keeping track of hundreds of components 2',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    image: 'images/work/snapshoot.png',
    live_version: 'https://batoolfatima2135.github.io/Portfolio/',
    source: 'https://github.com/batoolfatima2135/Portfolio',
  },
  {
    title: ' Keeping track of hundreds of components 3',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    image: 'images/work/snapshoot2.png',
    live_version: 'https://batoolfatima2135.github.io/Portfolio/',
    source: 'https://github.com/batoolfatima2135/Portfolio',
  },
  {
    title: ' Keeping track of hundreds of components 4',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    image: 'images/work/snapshoot.png',
    live_version: 'https://batoolfatima2135.github.io/Portfolio/',
    source: 'https://github.com/batoolfatima2135/Portfolio',
  },
  {

    title: ' Keeping track of hundreds of components 5',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    image: 'images/work/snapshoot2.png',
    live_version: 'https://batoolfatima2135.github.io/Portfolio/',
    source: 'https://github.com/batoolfatima2135/Portfolio',

  },
  {

    title: ' Keeping track of hundreds of components 6',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    image: 'images/work/snapshoot.png',
    live_version: 'https://batoolfatima2135.github.io/Portfolio/',
    source: 'https://github.com/batoolfatima2135/Portfolio',

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
    const p = document.createElement('p');
    p.className = 'description';
    p.textContent = work.description1;
    const p2 = document.createElement('p');
    p2.textContent = work.description2;
    p2.className = 'description';
    modal.appendChild(p);
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