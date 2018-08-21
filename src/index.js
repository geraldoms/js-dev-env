import './index.css';
import { getUsers, deleteUser } from './api/userApi';

getUsers().then(res => {

  let usersBody = "";
  res.forEach(u => {
    usersBody += `<tr>
      <td>${u.id}</td>
      <td>${u.firstName}</td>
      <td>${u.lastName}</td>
      <td>${u.email}</td>
      <td><a href="#" data-id="${u.id}" class="deleteUser btn btn-danger">Delete</a></td>
      </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;
  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = function (event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });
});
