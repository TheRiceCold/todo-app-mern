### Todo App

## Getting Started
  - clone the project and then start the project
```
  git clone https://github.com/dwghdev/todo-app-MERN 
  cd todo-app-MERN

  # install modules
    npm install
  
  # run server
    npm start
```

## Endpoints

**Todo list** \
``GET https://localhost:8080/api/todos``

**Create Todo**
``POST https://localhost:8080/api/todos``
<small>{ task: "newTodo", completed: false }</small>

**Update Todo**
``PUT https://localhost:8080/api/todos``
<small>{ task: "updateTodo", completed: false }</small>

**Delete Todo**
``DELETE https://localhost:8080/api/todos``
