const deptData = [
  {
    name: "General Administration",
    image: "images/about-banner.jpg",
    content:
      "<h2>Institution Vision</h2>\n<p>Excel as a centre of skill education moulding professionals who sincerely strive for the betterment of society. </p>\n<h2>Institution Mission</h2>\n<ul><li>To impart state of the art knowledge and skill to the graduate and moulding them to be competent, committed and responsible for the well being of society.<br>\n</li><li>To apply technology in the traditional skills, thereby enhancing the living standard of the community.\n</li>\n</ul>",
  },
  {
    name: "General Department",
    image: "images/about-banner.jpg",
    content:
      "<h2>Institution Vision</h2>\n<p>Excel as a centre of skill education moulding professionals who sincerely strive for the betterment of society. </p>\n<h2>Institution Mission</h2>\n<ul><li>To impart state of the art knowledge and skill to the graduate and moulding them to be competent, committed and responsible for the well being of society.<br>\n</li><li>To apply technology in the traditional skills, thereby enhancing the living standard of the community.\n</li>\n</ul>",
  },
  {
    name: "Computer Engg.",
    image: "images/ct-course-thumb.png",
    content:
      "<p>The Computer Engineering Department was established in the year 1995. The department offers a three-year Diploma in Computer Engineering. The program is approved by AICTE with an annual intake of 60 students. There is an additional intake of 3 students in the Fee waiver (FW) scheme and 6 in Lateral Entry (LE).</p>\n\n<h3>frastructural Facilities</h3>\n<p>The department is housed in Computer Engineering block with</p>\n<ol>\n<li>Well-appointed three numbers of classrooms.</li>\n<li>Five numbers of well-equipped laboratories</li>\n</ol>\n\n<h3>Vision of the Department</h3>\n<p>Excel as a center of skill education in Computer Engineering moulding professionals who sincerely strive for the betterment of themselves and society.</p>\n\n<h3>Mission of the Department</h3>\n<ul>\n<li>To impart state of the art, knowledge, skill and attitude to the graduates ensuring sustainable development.</li>\n<li>To develop adaptiveness for being competent to acquaint with the technological changes. </li>\n</ul>",
  },
  {
    name: "Electronics and Communication Engg.",
    image: "images/ec-course-thumb.jpg",
    content:
      "<p>The Electronics and Communication Engineering Department was established in the year 1995. The department offers a three-year Diploma in Electronics and Communication Engineering. The program is approved by AICTE with an annual intake of 60 students. There is an additional intake of 3 students in the Fee waiver (FW) scheme and 6 in Lateral Entry (LE).</p>\n<h2>frastructural Facilities</h2>\n<p>The department is housed in Academic Block - 1 with</p>\n<ol>\n<li>Well-appointed three numbers of classrooms.</li>\n<li>Mini seminar hall with online conferencing facility</li>\n<li>Six numbers well-equipped laboratories </li>\n</ol>\n\n<h2>Services Offered</h2>\n<h4>Production and Training Center (PAT)</h4>\n<p>PAT is a project of the Department of Technical Education. PAT currently manufactures AVR trainer kits and 8051 trainer kits. These kits are currently being used by the majority of Polytechnic Colleges in the state.</p>\n<h4>Self-Maintenance Cell (SMC)</h4>\n<p>Self-maintenance Cell offers technical support by way of maintenance and repair of electronic equipment and computers of various departments. These services are now offered to other government and private organizations as outreach programs. Construction of a new academic block for the department for an estimated cost of Rs. 12 crores is in progress</p>",
  },
  {
    name: "Mechanical Engg.",
    image: "images/mech-course-thumb.jpg",
    content:
      "<h3>Vision</h3>\n<p>Excel as a centre of skill education in mechanical engineering moulding professionals who strive for the betterment of society</p>\n<h3>Mission</h3>\n<ul>\n<li>Provide state of art knowledge, skill and transform the students into responsible\nprofessionals for the sustainable development of society.</li>\n<li>Provide good infrastructure facilities so that students will gain hands on experience by using various equipment and software.</li>\n<li>Inculcate the habit of self-learning to enhance the employability.</li>\n</ul>",
  },
];

const queryString = window.location.search;

const type = new URLSearchParams(queryString).get("type");

if (!type) {
  alert("Some error happended");
  window.location.replace("/");
}

const selectedDep = deptData[type];

const deptTitle = document.querySelector("#dept-title");
const deptImg = document.querySelector("#dept-image");
const titleContainer = document.querySelector("#title-container");
const contentContainer = document.querySelector("#content");

deptTitle.textContent = selectedDep.name;
deptImg.src = selectedDep.image;
titleContainer.textContent = selectedDep.name;
contentContainer.innerHTML += selectedDep.content;
