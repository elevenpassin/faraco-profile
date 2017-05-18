/* jshint esversion: 6 */
let userpanel = document.querySelector('.userpanel');
let gobtn = document.querySelector('.gobtn');
let usericon = document.querySelector('.usericon');
let username = document.querySelector('.username');
let profession = document.querySelector('.profession');
let panel = document.querySelector('.panel');
let profile = document.querySelector('.profile');
gobtn.addEventListener("click", e=>{
  userpanel.classList.toggle("userpanel");
  userpanel.classList.toggle("userpanel-toggled");
  usericon.classList.toggle('usericon');
  usericon.classList.toggle('usericon-toggled');
  username.classList.toggle('username');
  username.classList.toggle('username-toggled');
  profession.classList.toggle('profession');
  profession.classList.toggle('profession-toggled');
  gobtn.classList.toggle('gobtn');
  gobtn.classList.toggle('gobtn-toggled');
  profile.classList.toggle('profile');
  profile.classList.toggle('profile-toggled');

});
