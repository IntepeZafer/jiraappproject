<template>
  <nav>
    <router-link to="/">Yapılacaklar Listesi</router-link> |
    <router-link to="/addtask">Yeni Ekle</router-link>
  </nav>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 50vw;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
}
body{
  background-color: ghostwhite;
}
.task{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1.25rem;
  border-left : 10px solid red;
  margin-top: 1rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.task h1{
  background-color: rgba(100, 100, 111, 0.2);
  padding: .5rem;
  border-radius: .3rem;
  color: red;
  font-weight: 100;
  cursor: pointer;
  width: 90%;
}
.task p{
  font-size: 1.1em;
  font-weight: 100;
}
.actions{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icons{
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5em;
  color: red;
  cursor: pointer;
  background-color: rgba(100, 100, 111, 0.2);
  padding: .5rem;
  border-radius: .3rem;
  font-weight: 100;
  height: 7vh;
  margin-left: 1rem;
}
.task.complete{
  border-left: 10px solid green;
  transition: 1s all ease-in-out;
}
.task.complete .done , .task.complete h1{
  color: green;
  transition: 1s all ease-in-out;
}
form{
  max-width: 30vw;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  margin-top: 1rem;
  border-radius: .3rem;
  font-weight: 100;
  color: #fff;
  transition: 1s all ease-in-out;
}
form input , form textarea{
  padding: .5rem;
  border-radius: .3rem;
  border: none;
  font-size: 1.1em;
  font-weight: 100;
  resize: none; 
  outline: none;
}
form button{
  padding: .5rem;
  border-radius: .3rem;
  border: none;
  font-size: 1em;
  font-weight: 100;
  cursor: pointer;
  background-color: #fff;
  font-weight: 100;
}
form:hover{
  background-color: rgba(0, 174, 255, 0.2);
  color: black;
}
a{
  text-decoration: none;
  font-size: 1.1em;
  letter-spacing: .0625rem;
  padding: .5rem;
  border-radius: .3rem;
}
</style>
