const users=()=>JSON.parse(localStorage.getItem("users")||"[]");
const saveUsers=x=>localStorage.setItem("users",JSON.stringify(x));
const students=()=>JSON.parse(localStorage.getItem("students")||"[]");
const saveStudents=x=>localStorage.setItem("students",JSON.stringify(x));

function show(id){document.querySelectorAll(".page").forEach(x=>x.classList.add("hide"));document.getElementById(id).classList.remove("hide");if(id==="kanban")renderBoard()}
function authMode(m){regForm.classList.toggle("hide",m!=="register");loginForm.classList.toggle("hide",m!=="login")}
regForm.onsubmit=e=>{e.preventDefault();let u=users(),email=remail.value.toLowerCase();if(u.some(x=>x.email===email)){rmsg.textContent="Email already registered";return}u.push({name:rname.value,email,password:rpass.value});saveUsers(u);rmsg.textContent="Registered successfully. Now login.";e.target.reset()};
loginForm.onsubmit=e=>{e.preventDefault();let u=users().find(x=>x.email===lemail.value.toLowerCase()&&x.password===lpass.value);if(!u){lmsg.textContent="Invalid login";return}localStorage.setItem("current",JSON.stringify(u));open(u)};
function open(u){auth.classList.add("hide");dashboard.classList.remove("hide");welcome.textContent="Welcome, "+u.name;render()}
function logout(){localStorage.removeItem("current");dashboard.classList.add("hide");auth.classList.remove("hide")}
studentForm.onsubmit=e=>{e.preventDefault();let a=students(),id=sid.value;let x={id:id?+id:Date.now(),name:sname.value,roll:roll.value,email:semail.value,course:course.value,year:year.value,status:status.value};a=id?a.map(s=>s.id===+id?x:s):[...a,x];saveStudents(a);resetForm();render()}
function resetForm(){studentForm.reset();sid.value="";ftitle.textContent="Add Student"}
function edit(id){let s=students().find(x=>x.id===id);sid.value=s.id;sname.value=s.name;roll.value=s.roll;semail.value=s.email;course.value=s.course;year.value=s.year;status.value=s.status;ftitle.textContent="Update Student"}
function del(id){if(confirm("Delete this student?")){saveStudents(students().filter(s=>s.id!==id));render()}}
function render(){let q=(search.value||"").toLowerCase();let a=students().filter(s=>Object.values(s).join(" ").toLowerCase().includes(q));tbody.innerHTML=a.length?a.map(s=>`<tr><td>${s.name}</td><td>${s.roll}</td><td>${s.email}</td><td>${s.course}</td><td>${s.year}</td><td>${s.status}</td><td><button onclick="edit(${s.id})">Edit</button><button class="red" onclick="del(${s.id})">Delete</button></td></tr>`).join(""):`<tr><td colspan="7">No students found</td></tr>`;total.textContent=students().length;active.textContent=students().filter(s=>s.status==="Active").length}
function report(){let a=students(),active=a.filter(s=>s.status==="Active").length;reportBox.textContent=`STUDENT MANAGEMENT REPORT\n-------------------------\nTotal Students: ${a.length}\nActive Students: ${active}\nInactive Students: ${a.length-active}`}

const tasks=[
["PB1","Login Module","done"],["PB2","Registration","done"],["PB3","Add Student","progress"],
["PB7","Update Student","progress"],["PB4","Delete Student","todo"],["PB5","Search Student","todo"],["PB6","Report","todo"]];
function renderBoard(){todo.innerHTML=prog.innerHTML=done.innerHTML="";tasks.forEach((t,i)=>{let d=document.createElement("div");d.className="task";d.innerHTML=`<b>${t[0]} - ${t[1]}</b><br><button onclick="move(${i},'todo')">To Do</button><button onclick="move(${i},'progress')">In Progress</button><button onclick="move(${i},'done')">Done</button>`;document.getElementById(t[2]==="progress"?"prog":t[2]).appendChild(d)})}
function move(i,s){tasks[i][2]=s;renderBoard()}
window.onload=()=>{let u=JSON.parse(localStorage.getItem("current")||"null");if(u)open(u)}
